import { useEffect, useState } from "react";

const CarParts = () => {
  const [parts, setParts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(10);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://api.jsonbin.io/v3/b/69e535e236566621a8ce210a",
          {
            method: "GET",
            headers: {
              "X-Access-Key":
                "$2a$10$7L0fDBh3v77EF1usWl4EfOwXzcST0EFg9vISOOTUPBq7xcutgDBU2",
            },
          }
        );

        if (!res.ok) {
          throw new Error("Error en la respuesta del servidor");
        }

        const data = await res.json();
        const articles = data?.record?.articles || [];
        setParts(articles);
      } catch (err) {
        console.error(err);
        setError("Error cargando datos");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #0a0a0a, #1a1a1a)",
          color: "#ff2d2d",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Cargando repuestos...
      </div>
    );
  }

  if (error) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #0a0a0a, #1a1a1a)",
          color: "#ff3b3b",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {error}
      </div>
    );
  }

  if (!parts.length) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #0a0a0a, #1a1a1a)",
          color: "#ccc",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        No hay repuestos disponibles
      </div>
    );
  }

  const filteredParts = parts.filter((part) =>
    (part.articleProductName || "")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const visibleParts = filteredParts.slice(0, visibleCount);

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "30px",
        background: "linear-gradient(135deg, #0a0a0a, #1a1a1a)",
        fontFamily: "'Segoe UI', sans-serif",
        color: "#fff",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#ff2d2d",
          letterSpacing: "3px",
          marginBottom: "25px",
        }}
      >
        🔧 REPUESTOS AUTOMOTRICES
      </h1>

      <input
        type="text"
        placeholder="Buscar repuesto..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setVisibleCount(10);
        }}
        style={{
          display: "block",
          margin: "0 auto 25px",
          padding: "12px 15px",
          width: "100%",
          maxWidth: "420px",
          borderRadius: "12px",
          border: "1px solid #333",
          background: "#111",
          color: "#fff",
          outline: "none",
        }}
      />

      {visibleParts.length === 0 ? (
        <p style={{ textAlign: "center", color: "#aaa" }}>
          No se encontraron resultados
        </p>
      ) : (
        visibleParts.map((part) => (
          <div
            key={part.articleId}
            style={{
              background: "#141414",
              borderLeft: "5px solid #ff2d2d",
              margin: "12px 0",
              padding: "15px",
              borderRadius: "12px",
              boxShadow: "0 6px 15px rgba(0,0,0,0.5)",
              transition: "transform 0.2s",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.02)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            <h3 style={{ color: "#ff4d4d", marginBottom: "6px" }}>
              🚗 {part.articleProductName}
            </h3>
            <p style={{ margin: "3px 0", color: "#ccc" }}>
              Código: {part.articleNo}
            </p>
            <p style={{ margin: "3px 0", color: "#999" }}>
              Proveedor: {part.supplierName}
            </p>
          </div>
        ))
      )}

      {visibleCount < filteredParts.length && (
        <button
          onClick={() => setVisibleCount((prev) => prev + 10)}
          style={{
            display: "block",
            margin: "25px auto 0",
            padding: "12px 30px",
            background: "#ff2d2d",
            color: "#fff",
            border: "none",
            borderRadius: "12px",
            cursor: "pointer",
            fontWeight: "bold",
            letterSpacing: "1px",
            boxShadow: "0 0 15px rgba(255, 45, 45, 0.4)",
          }}
        >
          VER MÁS
        </button>
      )}
    </div>
  );
};

export default CarParts;