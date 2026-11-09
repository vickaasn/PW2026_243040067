
import { useState, useEffect } from 'react';
import './App.css';

import FormTransaksi from './components/FormTransaksi';
import DaftarTransaksi from './components/DaftarTransaksi';

type Transaksi = {
  id: number;
  keterangan: string;
  nominal: number;
  jenis: 'Pemasukan' | 'Pengeluaran';
};

function App() {
  const [daftarTransaksi, setDaftarTransaksi] = useState<Transaksi[]>(() => {
    const dataTersimpan = localStorage.getItem('catatan-keuangan');

    if (dataTersimpan) {
      return JSON.parse(dataTersimpan) as Transaksi[];
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      'catatan-keuangan',
      JSON.stringify(daftarTransaksi)
    );
  }, [daftarTransaksi]);

  const tambahTransaksi = (
    keterangan: string,
    nominal: number,
    jenis: 'Pemasukan' | 'Pengeluaran'
  ) => {
    const transaksiBaru: Transaksi = {
      id: Date.now(),
      keterangan,
      nominal,
      jenis,
    };

    setDaftarTransaksi((sebelumnya) => [
      ...sebelumnya,
      transaksiBaru,
    ]);
  };

  const hapusTransaksi = (id: number) => {
    setDaftarTransaksi((sebelumnya) =>
      sebelumnya.filter((transaksi) => transaksi.id !== id)
    );
  };

  const totalPemasukan = daftarTransaksi
    .filter((transaksi) => transaksi.jenis === 'Pemasukan')
    .reduce((total, transaksi) => total + transaksi.nominal, 0);

  const totalPengeluaran = daftarTransaksi
    .filter((transaksi) => transaksi.jenis === 'Pengeluaran')
    .reduce((total, transaksi) => total + transaksi.nominal, 0);

  const saldo = totalPemasukan - totalPengeluaran;

  const formatRupiah = (angka: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(angka);
  };

  return (
    <main className="wadah">
      <header className="header">
        <h1>Catatan Keuangan</h1>
        <p>Kelola pemasukan dan pengeluaranmu dengan mudah.</p>
      </header>

      <section className="ringkasan-keuangan">
        <div className="kartu-saldo">
          <h3>Total Saldo</h3>
          <h2>{formatRupiah(saldo)}</h2>
        </div>

        <div className="kartu-pemasukan">
          <h3>Total Pemasukan</h3>
          <h2>{formatRupiah(totalPemasukan)}</h2>
        </div>

        <div className="kartu-pengeluaran">
          <h3>Total Pengeluaran</h3>
          <h2>{formatRupiah(totalPengeluaran)}</h2>
        </div>
      </section>

      <section className="kartu">
        <h2>Tambah Transaksi</h2>
        <FormTransaksi onTambah={tambahTransaksi} />
      </section>

      <DaftarTransaksi
        daftarTransaksi={daftarTransaksi}
        onHapus={hapusTransaksi}
      />
    </main>
  );
}

export default App;
