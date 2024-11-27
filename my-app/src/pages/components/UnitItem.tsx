import { PropertyUnit } from "../api/types";
import EditUnit from "./EditUnit"; // Impor komponen EditUnit

interface UnitItemProps {
  unit: PropertyUnit;
  onEdit: (unitId: number) => void;
}

export default function UnitItem({ unit, onEdit }: UnitItemProps) {
  if (!unit) {
    // Jika unit tidak ada, tampilkan loading atau pesan error
    return <li className="list-group-item">Unit tidak ditemukan</li>;
  }

  return (
    <li
      className={`list-group-item ${
        unit.finished ? "list-group-item-success" : "list-group-item-warning"
      }`}
    >
      Unit {unit.id} - {unit.finished ? "Selesai" : "Belum Selesai"}{" "}
      <EditUnit unitId={unit.id} finished={unit.finished} onEdit={onEdit} />
    </li>
  );
}
