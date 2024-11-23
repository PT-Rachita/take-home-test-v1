"use client";
import { useState, useEffect } from "react";
import DaftarUnit from "./components/DaftarUnit";

const page = () => {
  const [units, setUnits] = useState([]);

  useEffect(() => {
    BuatDataDummy();
  }, []);

  // Fungsi untuk generate data random
  const BuatDataDummy = () => {
    const totalUnits = Math.floor(Math.random() * 50) + 1; 
    const dummyUnits = Array.from({ length: totalUnits }, (_, index) => ({
      id: index + 1,
      name: `Unit ${index + 1}`,
      finished: Math.random() > 0.5, 
    }));
    setUnits(dummyUnits);
  };
  

  // Fungsi untuk menghitung unit yang selesai maupun belum selesai
  const finishedUnits = units.filter((unit) => unit.finished).length;
  const totalUnits = units.length;
  const progressPercentage = totalUnits > 0 ? ((finishedUnits / totalUnits) * 100).toFixed(2) : 0;

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Construction Progress Calculator</h1>
      
      <div style={styles.progressContainer}>
        <p style={styles.progressText}>
          {finishedUnits} unit selesai dari total {totalUnits} unit
        </p>
        <p style={styles.progressText}>Total Progress Level Project: {progressPercentage} %</p>
      </div>
      
      <button
        onClick={BuatDataDummy}
        style={styles.refreshButton}
      >
        Refresh Jumlah Unit
      </button>

      <DaftarUnit units={units} />
    </div>
  );
};

//CSS Tampilan Webnya
const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    margin: "0 auto",
    padding: "20px",
    maxWidth: "1200px",
    textAlign: "center",
  },
  heading: {
    fontSize: "32px",
    marginBottom: "20px",
    color: "#333",
  },
  progressContainer: {
    marginBottom: "20px",
  },
  progressText: {
    fontSize: "18px",
    margin: "5px 0",
  },
  refreshButton: {
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    marginTop: "20px",
  },
};

export default page;
