import { useState, useEffect } from 'react';
import './App.css';

import Kartu from './component/kartu';
import Penghitung from './component/penghitung';
import FormTugas from './component/FormTugas';
import ItemTugas from './component/ItemTugas';

type Tugas = {
  id: number;
  judul: string;
  selesai: boolean;
};

function App() {
  const [daftarTugas, setDaftarTugas] = useState<Tugas[]>(() => {
    const dataTersimpan = localStorage.getItem('daftar-tugas');

    if (dataTersimpan) {
      return JSON.parse(dataTersimpan) as Tugas[];
    }

    return [
      { id: 1, judul: 'Install Node.js dan Vite', selesai: true },
      { id: 2, judul: 'Pelajari useState', selesai: false },
    ];
  });

  const [filter, setFilter] = useState('semua');

// Efek A: dijalankan saat aplikasi pertama kali tampil
useEffect(() => {
  console.log('Aplikasi Daftar Tugas siap digunakan!');
}, []);

// Efek B: memperbarui judul tab browser
useEffect(() => {
  const sisa = daftarTugas.filter(
    (tugas) => !tugas.selesai
  ).length;

  document.title = `(${sisa}) Tugas Belum Selesai`;
}, [daftarTugas]);

// Efek C: menyimpan data ke localStorage
useEffect(() => {
  localStorage.setItem(
    'daftar-tugas',
    JSON.stringify(daftarTugas)
  );
}, [daftarTugas]);

  const tambahTugas = (judul: string) => {
    const tugasBaru = {
      id: Date.now(),
      judul: judul,
      selesai: false,
    };

    setDaftarTugas([...daftarTugas, tugasBaru]);
  };

  const ubahStatus = (id: number) => {
    const daftarBaru = daftarTugas.map((tugas) => {
      if (tugas.id === id) {
        return { ...tugas, selesai: !tugas.selesai };
      }

      return tugas;
    });

    setDaftarTugas(daftarBaru);
  };

  const hapusTugas = (id: number) => {
    setDaftarTugas(
      daftarTugas.filter((tugas) => tugas.id !== id)
    );
  };

  const jumlahSelesai = daftarTugas.filter(
    (tugas) => tugas.selesai
  ).length;
  const tugasDitampilkan = daftarTugas.filter((tugas) => {
  if (filter === 'belum') return !tugas.selesai;
  if (filter === 'selesai') return tugas.selesai;
  return true;
});

  return (
    <div className="wadah">
      <h1 className="judul">Daftar Tugas Praktikum</h1>

      <p className="subjudul">
        Laboratorium Informatika - Modul 2: React Lanjutan
      </p>

      <Penghitung />

      <Kartu judul="Tambah Tugas Baru">
        <FormTugas onTambah={tambahTugas} />
      </Kartu>

      <Kartu judul="Daftar Tugas">
        <div className="baris filter">
  <button
    className={filter === 'semua' ? 'tombol aktif' : 'tombol'}
    onClick={() => setFilter('semua')}
  >
    Semua
  </button>

  <button
    className={filter === 'belum' ? 'tombol aktif' : 'tombol'}
    onClick={() => setFilter('belum')}
  >
    Belum Selesai
  </button>

  <button
    className={filter === 'selesai' ? 'tombol aktif' : 'tombol'}
    onClick={() => setFilter('selesai')}
  >
    Selesai
  </button>
</div>
        <p className="ringkasan">
          {jumlahSelesai} dari {daftarTugas.length} tugas selesai
        </p>
        {jumlahSelesai > 0 && (
  <button
    className="tombol tombol-merah"
    onClick={() => {
      setDaftarTugas(
        daftarTugas.filter((tugas) => !tugas.selesai)
      );
    }}
  >
    Hapus Semua yang Selesai
  </button>
)}

        {tugasDitampilkan.length === 0 ? (
          <p className="kosong">
            Belum ada tugas. Yuk tambahkan tugas pertamamu!
          </p>
        ) : (
          <ul className="daftar">
            {tugasDitampilkan.map((tugas) => (
  <ItemTugas
    key={tugas.id}
    tugas={tugas}
    onUbahStatus={ubahStatus}
    onHapus={hapusTugas}
  />
))}
          </ul>
        )}
      </Kartu>
    </div>
  );
}

export default App;
