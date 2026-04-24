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

  // 🔵 ESTADOS BASE
  if (loading) return <p>Cargando repuestos...</p>;
  if (error) return <p>{error}</p>;
  if (!parts || parts.length === 0)
    return <p>No hay repuestos disponibles</p>;

  // 🔍 BUSCADOR
  const filteredParts = parts.filter((part) =>
    (part.articleProductName || "")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  // 🔥 PAGINACIÓN
  const visibleParts = filteredParts.slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  return (
    <div
      style={{
        padding: "30px",
        maxWidth: "800px",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
        background: "#f7f7f7",
        minHeight: "100vh",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        🚗 Repuestos de Carro
      </h2>

      {/* 🔍 BUSCADOR */}
      <input
        type="text"
        placeholder="🔍 Buscar repuesto..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setVisibleCount(10);
        }}
        style={{
          padding: "10px 12px",
          marginBottom: "20px",
          width: "100%",
          maxWidth: "350px",
          borderRadius: "10px",
          border: "1px solid #ddd",
          outline: "none",
          boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
        }}
      />

      {/* 🔥 LISTA */}
      {visibleParts.length === 0 ? (
        <p>No se encontraron resultados</p>
      ) : (
        visibleParts.map((part) => (
          <div
            key={part.articleId}
            style={{
              background: "#fff",
              border: "1px solid #eee",
              margin: "12px 0",
              padding: "15px",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
            }}
          >
            <h3 style={{ marginBottom: "5px" }}>
              🚗 {part.articleProductName}
            </h3>
            <p style={{ margin: "4px 0" }}>
              <strong>Código:</strong> {part.articleNo}
            </p>
            <p style={{ margin: "4px 0" }}>
              <strong>Proveedor:</strong> {part.supplierName}
            </p>
          </div>
        ))
      )}

      {/* 🔥 VER MÁS */}
      {visibleCount < filteredParts.length && (
        <button
          onClick={loadMore}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            background: "#111",
            color: "#fff",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          Ver más
        </button>
      )}
    </div>
  );
};

export default CarParts;