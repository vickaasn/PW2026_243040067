import React from 'react';
import './App.css';
import KartuProfil from './KartuProfil';
import BadgeSkill from './BadgeSkill';
import ItemMatkul from './ItemMatkul';
import KartuProyek from './KartuProyek';
 
function App() { 
  // 1. Data daftar mata kuliah praktikum semester ini 
  const daftarPraktikum = [ 
    { id: 101, kode: 'IF211', nama: 'Pemrograman Web (React & Laravel)', sks: 3, hari: 'Senin' 
}, 
    { id: 102, kode: 'IF212', nama: 'Sistem Basis Data (PostgreSQL)', sks: 3, hari: 'Rabu' }, 
    { id: 103, kode: 'IF213', nama: 'Rekayasa Perangkat Lunak Terapan', sks: 3, hari: 'Kamis' }, 
    { id: 104, kode: 'IF214', nama: 'Arsitektur Sistem Terdistribusi', sks: 2, hari: 'Jumat' } 
  ]; 
  const daftarSkill = [
    { id: 1, namaSkill: 'HTML', level: 'Pemula' },
    { id: 2, namaSkill: 'CSS', level: 'Menengah' },
    { id: 3, namaSkill: 'JavaScript', level: 'Menengah' },
    { id: 4, namaSkill: 'React JS', level: 'Pemula' }
  ];

  // 3. Data proyek Showcase Portofolio Mini
  
  const daftarProyek = [
    {
      id: 1,
      judul: 'SneakyPair - E-Commerce Sepatu',
      deskripsi: 'Website e-commerce untuk menampilkan produk sepatu serta menyediakan fitur keranjang dan transaksi pembelian.',
      teknologi: ['PHP', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
      githubUrl: 'https://github.com/vickaasn/pw2025_tubes_243040067'
    },
    {
      id: 2,
      judul: 'Fresh Green & Haven',
      deskripsi: 'Website toko tanaman hias untuk menampilkan berbagai produk tanaman beserta informasi dan katalog produk.',
      teknologi: ['HTML', 'CSS', 'Bootstrap'],
      githubUrl: 'https://github.com/vickaasn/itw2024_project2_243040067'
    },
    {
      id: 3,
      judul: 'Personal Portfolio Website',
      deskripsi: 'Website portofolio pribadi untuk memperkenalkan diri, kemampuan, dan hasil karya.',
      teknologi: ['HTML', 'CSS', 'JavaScript'],
      githubUrl: 'https://github.com/vickaasn/itw2024_project1_243040067'
    },
    {
      id: 4,
      judul: 'Proyek Pemrograman Basis Data',
      deskripsi: 'Proyek pembelajaran pemrograman basis data yang dikembangkan dalam kegiatan perkuliahan.',
      teknologi: ['Database', 'SQL'],
      githubUrl: 'https://github.com/vickaasn/PBD2025_C_243040067'
    }
  ];

  // 2. Fungsi penanganan interaksi event tombol 
  const notifikasiSapaan = () => { 
    alert('Selamat datang di Modul 1! Anda berhasil menguasai fondasi arsitektur React JS.'); 
  }; 
 
  return ( 
    <div style={{ maxWidth: '800px', margin: '40px auto', padding: '0 24px', fontFamily: 'Arial, sans-serif' }}> 
      <header style={{ textAlign: 'center', marginBottom: '32px' }}> 
        <h1 style={{ color: '#1B365D', margin: '0 0 8px 0' }}>Praktikum Pemrograman Web</h1> 
        <p style={{ color: '#666', fontSize: '15px' }}>Laboratorium Informatika - Modul 1: 
Pengenalan React JS & Vite</p> 
      </header> 
 
      <section style={{ marginBottom: '32px' }}> 
        <h2 style={{ color: '#2C3E50', borderBottom: '2px solid #E1E4E8', paddingBottom: '8px' 
}}> 
          Profil Mahasiswa Praktikan 
        </h2> 
        <KartuProfil  
          nama="Mahasiswa Teknik Informatika"  
          npm="243040067"  
          kelas="IF - Praktikum"  
          status="Aktif" 
          fotoUrl="/profil.jpeg" 
        /> 
      </section> 
      
      <section style={{ marginBottom: '32px' }}>
        <h2 style={{
          color: '#2C3E50',
          borderBottom: '2px solid #E1E4E8',
          paddingBottom: '8px'
        }}>
          Keahlian Mahasiswa
        </h2>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px'
        }}>
          {daftarSkill.map((skill) => (
            <BadgeSkill
              key={skill.id}
              namaSkill={skill.namaSkill}
              level={skill.level}
            />
          ))}
        </div>
      </section>

 
     
      <section style={{ marginBottom: '32px' }}>
        <h2 style={{
          color: '#2C3E50',
          borderBottom: '2px solid #E1E4E8',
          paddingBottom: '8px'
        }}>
          Daftar Rencana Praktikum Semester (List Rendering)
        </h2>

        <div style={{ display: 'grid', gap: '12px' }}>
          {daftarPraktikum.map((matkul) => (
            <ItemMatkul
              key={matkul.id}
              kode={matkul.kode}
              nama={matkul.nama}
              sks={matkul.sks}
              hari={matkul.hari}
            />
          ))}
        </div>
      </section>

      
      <section style={{ marginBottom: '32px' }}>
        <h2 style={{
          color: '#2C3E50',
          borderBottom: '2px solid #E1E4E8',
          paddingBottom: '8px'
        }}>
          Showcase Portofolio Mini
        </h2>

       <div className="showcase-grid">
          {daftarProyek.map((proyek) => (
            <KartuProyek
              key={proyek.id}
              judul={proyek.judul}
              deskripsi={proyek.deskripsi}
              teknologi={proyek.teknologi}
              githubUrl={proyek.githubUrl}
            />
          ))}
        </div>
      </section>

      <div style={{ textAlign: 'center', marginTop: '40px' }}> 
        <button onClick={notifikasiSapaan} style={{ 
          backgroundColor: '#1B365D', 
          color: '#FFFFFF', 
          padding: '12px 24px', 
          border: 'none', 
          borderRadius: '6px', 
          cursor: 'pointer', 
          fontWeight: 'bold', 
          fontSize: '14px' 
        }}> 
          Uji Interaktivitas Event (Klik Disini) 
        </button> 
      </div> 
    </div> 
  ); 
} 
 
export default App;