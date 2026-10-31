
import React from 'react';

// Komponen BadgeSkill menerima props namaSkill dan level
function BadgeSkill({ namaSkill, level }) {

  // Menentukan warna badge berdasarkan level keahlian
  const warnaBadge = {
    Pemula: {
      backgroundColor: '#E3F2FD',
      color: '#1565C0'
    },
    Menengah: {
      backgroundColor: '#FFF3CD',
      color: '#856404'
    },
    Mahir: {
      backgroundColor: '#D4EDDA',
      color: '#155724'
    }
  };

  return (
    <span style={{
      ...warnaBadge[level],
      padding: '6px 12px',
      borderRadius: '20px',
      fontSize: '13px',
      fontWeight: 'bold',
      margin: '4px',
      display: 'inline-block'
    }}>
      {namaSkill} - {level}
    </span>
  );
}

export default BadgeSkill;
