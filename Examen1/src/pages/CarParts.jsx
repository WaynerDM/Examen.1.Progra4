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
        const res = await fetch(import.meta.env.VITE_API_URL, {
          method: "GET",
          headers: {
            "X-Access-Key": import.meta.env.VITE_JSONBIN_ACCESS_KEY,
            "Content-Type": "application/json",
          },
        });

        const data = await res.json();

        const articles = data.record?.articles || [];

        setParts(articles);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Error cargando datos");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // 🔵 LOADING / ERROR / EMPTY STATE
  if (loading) return <p>Cargando repuestos...</p>;
  if (error) return <p>Error cargando datos 😢</p>;
  if (parts.length === 0) return <p>No hay repuestos disponibles</p>;

  // 🔍 FILTRO BUSCADOR
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
    <div style={{ padding: "20px" }}>
      <h2>Repuestos de Carro 🚗</h2>

      {/* 🔍 BUSCADOR */}
      <input
        type="text"
        placeholder="Buscar repuesto..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setVisibleCount(10);
        }}
        style={{
          padding: "8px",
          marginBottom: "15px",
          width: "100%",
          maxWidth: "300px",
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
              border: "1px solid #ccc",
              margin: "10px 0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            <h3>{part.articleProductName}</h3>
            <p>Código: {part.articleNo}</p>
            <p>Proveedor: {part.supplierName}</p>
          </div>
        ))
      )}

      {/* 🔥 VER MÁS */}
      {visibleCount < filteredParts.length && (
        <button
          onClick={loadMore}
          style={{
            marginTop: "15px",
            padding: "10px 20px",
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