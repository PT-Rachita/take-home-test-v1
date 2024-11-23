"use client";

const DaftarUnit = ({ units }) => {
  return (
    <div style={styles.container}>
      <h3 style={styles.title}>Daftar Unit</h3>
      <div style={styles.cardContainer}>
        {units.map((unit) => (
          <div key={unit.id} style={styles.card}>
            <div style={styles.cardTitle}>{unit.name}</div>
            <div
              style={{
                ...styles.cardStatus,
                color: unit.finished ? "green" : "red", 
              }}
            >
              {unit.finished ? "Selesai" : "Belum Selesai"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


//CSS Tampilan List Unit
const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  title: {
    textAlign: "center",
    fontSize: "24px",
    marginBottom: "20px",
  },
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: "20px",
    paddingTop: "20px",
  },
  card: {
    backgroundColor: "#f4f4f4",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "calc(33% - 20px)",
    padding: "15px",
    boxSizing: "border-box",
    textAlign: "center",
    transition: "transform 0.2s ease-in-out",
  },
  cardTitle: {
    fontSize: "18px",
    fontWeight: "bold",
  },
  cardStatus: {
    fontSize: "16px",
    color: unit => (unit.finished ? "green" : "red"),
  },
};

export default DaftarUnit;
