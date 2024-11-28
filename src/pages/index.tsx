import { useState } from "react";
import { PropertyUnit } from "./api/types";
import UnitItem from "./components/UnitItem"; // Impor UnitItem

export default function Home() {
  // Dummy data untuk unit properti
  const [units, setUnits] = useState<PropertyUnit[]>([
    { id: 1, finished: true },
    { id: 2, finished: true },
    { id: 3, finished: true },
    { id: 4, finished: true },
    { id: 5, finished: true },
    { id: 6, finished: false },
    { id: 7, finished: true },
    { id: 8, finished: false },
    { id: 9, finished: true },
    { id: 10, finished: false },
  ]);

  // Menghitung jumlah unit selesai
  const finishedUnits = units.filter((unit) => unit.finished).length;
  const totalUnits = units.length;

  // Menghitung persentase progress
  const progressPercentage = (finishedUnits / totalUnits) * 100;

  // Fungsi untuk menangani perubahan status unit (Edit)
  const handleEdit = (unitId: number) => {
    setUnits((prevUnits) =>
      prevUnits.map((unit) =>
        unit.id === unitId
          ? { ...unit, finished: !unit.finished } // Membalik status finished
          : unit
      )
    );
  };

  return (
    <div className="container my-5">
      <h1 className="text-center">Proyek Konstruksi</h1>
      <div className="row">
        <div className="col-12">
          <div className="alert alert-info">
            <h4 className="alert-heading">Ringkasan Proyek</h4>
            <p>
              {finishedUnits} selesai dari {totalUnits} unit.
            </p>
            <p className="lead">
              Kemajuan proyek: {progressPercentage.toFixed(2)}%
            </p>
          </div>
        </div>
      </div>
      <h3>Daftar Unit Properti:</h3>
      <ul className="list-group">
        {units.length === 0 ? (
          <li className="list-group-item">Tidak ada unit untuk ditampilkan</li>
        ) : (
          units.map((unit) => (
            <UnitItem key={unit.id} unit={unit} onEdit={handleEdit} />
          ))
        )}
      </ul>
    </div>
  );
}
