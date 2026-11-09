
import { useState } from 'react';
import type { FormEvent } from 'react';

type FormTransaksiProps = {
  onTambah: (
    keterangan: string,
    nominal: number,
    jenis: 'Pemasukan' | 'Pengeluaran'
  ) => void;
};

function FormTransaksi({ onTambah }: FormTransaksiProps) {
  const [keterangan, setKeterangan] = useState('');
  const [nominal, setNominal] = useState('');
  const [jenis, setJenis] = useState<'Pemasukan' | 'Pengeluaran'>(
    'Pemasukan'
  );

  const tanganiKirim = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nilai = Number(nominal);

    if (
      keterangan.trim() === '' ||
      nilai <= 0 ||
      !Number.isFinite(nilai)
    ) {
      return;
    }

    onTambah(keterangan.trim(), nilai, jenis);

    setKeterangan('');
    setNominal('');
  };

  return (
    <form onSubmit={tanganiKirim} className="form-transaksi">
      <div className="grup-form">
        <label htmlFor="keterangan">Keterangan</label>
        <input
          id="keterangan"
          type="text"
          placeholder="Contoh: Uang makan"
          value={keterangan}
          onChange={(event) => setKeterangan(event.target.value)}
        />
      </div>

      <div className="grup-form">
        <label htmlFor="nominal">Nominal (Rp)</label>
        <input
          id="nominal"
          type="number"
          min="1"
          placeholder="Contoh: 50000"
          value={nominal}
          onChange={(event) => setNominal(event.target.value)}
        />
      </div>

      <div className="grup-form">
        <label htmlFor="jenis">Jenis Transaksi</label>
        <select
          id="jenis"
          value={jenis}
          onChange={(event) =>
            setJenis(event.target.value as 'Pemasukan' | 'Pengeluaran')
          }
        >
          <option value="Pemasukan">Pemasukan</option>
          <option value="Pengeluaran">Pengeluaran</option>
        </select>
      </div>

      <button type="submit" className="tombol">
        Tambah Transaksi
      </button>
    </form>
  );
}

export default FormTransaksi;
