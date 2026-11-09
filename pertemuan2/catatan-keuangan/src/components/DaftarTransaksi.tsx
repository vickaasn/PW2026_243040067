
import ItemTransaksi from './ItemTransaksi';

type Transaksi = {
  id: number;
  keterangan: string;
  nominal: number;
  jenis: 'Pemasukan' | 'Pengeluaran';
};

type DaftarTransaksiProps = {
  daftarTransaksi: Transaksi[];
  onHapus: (id: number) => void;
};

function DaftarTransaksi({
  daftarTransaksi,
  onHapus,
}: DaftarTransaksiProps) {
  return (
    <section className="kartu">
      <h2>Riwayat Transaksi</h2>

      {daftarTransaksi.length === 0 ? (
        <p className="kosong">
          Belum ada transaksi. Yuk tambahkan transaksi pertamamu!
        </p>
      ) : (
        <div className="daftar-transaksi">
          {daftarTransaksi.map((transaksi) => (
            <ItemTransaksi
              key={transaksi.id}
              transaksi={transaksi}
              onHapus={onHapus}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default DaftarTransaksi;
