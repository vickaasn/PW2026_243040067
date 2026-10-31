
import React from 'react';

// Komponen untuk menampilkan kartu proyek
function KartuProyek({ judul, deskripsi, teknologi, githubUrl }) {
  return (
    <div style={{
      backgroundColor: '#FFFFFF',
      border: '1px solid #D0D7DE',
      borderRadius: '10px',
      padding: '20px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }}>
      <h3 style={{
        color: '#1B365D',
        marginTop: '0'
      }}>
        {judul}
      </h3>

      <p style={{
        color: '#555',
        fontSize: '14px',
        lineHeight: '1.6'
      }}>
        {deskripsi}
      </p>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '6px',
        marginBottom: '16px'
      }}>
        {teknologi.map((tech) => (
        <span key={tech} style={{
            backgroundColor: '#E3F2FD',
            color: '#1565C0',
            padding: '5px 10px',
            borderRadius: '15px',
            fontSize: '12px'
        }}>
            #{tech}
        </span>
        ))}
      </div>

      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          backgroundColor: '#1B365D',
          color: '#FFFFFF',
          padding: '9px 16px',
          borderRadius: '6px',
          textDecoration: 'none',
          fontSize: '13px',
          fontWeight: 'bold'
        }}
      >
        Lihat GitHub
      </a>
    </div>
  );
}

export default KartuProyek;
