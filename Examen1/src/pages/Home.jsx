const Home = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0a0a0a, #1a1a1a)",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "'Segoe UI', sans-serif",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1
        style={{
          fontSize: "40px",
          color: "#ff2d2d",
          letterSpacing: "3px",
          marginBottom: "10px",
        }}
      >
        AUTO PARTS SYSTEM
      </h1>

      <p
        style={{
          fontSize: "18px",
          color: "#ccc",
          maxWidth: "500px",
          lineHeight: "1.6",
          marginBottom: "30px",
        }}
      >
        Bienvenido al sistema de repuestos automotrices.  
        Consulta, busca y gestiona piezas de forma rápida y eficiente.
      </p>

      <div
        style={{
          display: "flex",
          gap: "15px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            padding: "15px 20px",
            border: "1px solid #ff2d2d",
            borderRadius: "12px",
            background: "#141414",
            minWidth: "180px",
          }}
        >
          🔧 Inventario
        </div>

        <div
          style={{
            padding: "15px 20px",
            border: "1px solid #ff2d2d",
            borderRadius: "12px",
            background: "#141414",
            minWidth: "180px",
          }}
        >
          🚗 Repuestos
        </div>

        <div
          style={{
            padding: "15px 20px",
            border: "1px solid #ff2d2d",
            borderRadius: "12px",
            background: "#141414",
            minWidth: "180px",
          }}
        >
          ⚙️ Gestión
        </div>
      </div>
    </div>
  );
};

export default Home;