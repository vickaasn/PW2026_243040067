
type Transaksi = {
  id: number;
  keterangan: string;
  nominal: number;
  jenis: 'Pemasukan' | 'Pengeluaran';
};

type ItemTransaksiProps = {
  transaksi: Transaksi;
  onHapus: (id: number) => void;
};

function ItemTransaksi({ transaksi, onHapus }: ItemTransaksiProps) {
  const formatRupiah = (angka: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(angka);
  };

  return (
    <div className="item-transaksi">
      <div className="info-transaksi">
        <strong>{transaksi.keterangan}</strong>
        <span className={transaksi.jenis === 'Pemasukan' ? 'teks-masuk' : 'teks-keluar'}>
          {transaksi.jenis}
        </span>
      </div>

      <div className="aksi-transaksi">
        <strong className={transaksi.jenis === 'Pemasukan' ? 'teks-masuk' : 'teks-keluar'}>
          {transaksi.jenis === 'Pemasukan' ? '+' : '-'}
          {formatRupiah(transaksi.nominal)}
        </strong>

        <button
          type="button"
          className="tombol-hapus"
          onClick={() => onHapus(transaksi.id)}
        >
          Hapus
        </button>
      </div>
    </div>
  );
}

export default ItemTransaksi;
