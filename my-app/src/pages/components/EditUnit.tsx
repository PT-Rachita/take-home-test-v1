interface EditUnitProps {
  unitId: number;
  finished: boolean; // Menambahkan properti finished untuk menentukan teks tombol
  onEdit: (unitId: number) => void;
}

export default function EditUnit({ unitId, finished, onEdit }: EditUnitProps) {
  return (
    <button
      className={`btn btn-sm btn-${finished ? "success" : "danger"} float-end`}
      onClick={() => onEdit(unitId)} // Menangani pengeditan status unit
    >
      {finished ? "Selesai" : "Belum"}{" "}
      {/* Menampilkan teks tombol sesuai status */}
    </button>
  );
}
