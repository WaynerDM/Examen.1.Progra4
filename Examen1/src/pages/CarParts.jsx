import { useEffect, useState } from "react";

const CarParts = () => {
  const [parts, setParts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(10);
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
              "Content-Type": "application/json",
            },
          }
        );

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

  // 🔵 estados
  if (loading) return <p>fetch and render data...</p>;
  if (error) return <p>{error}</p>;

  // 🔥 elementos visibles (paginación)
  const visibleParts = parts.slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  return (
    <div>
      <h2>Repuestos de Carro</h2>

      {visibleParts.map((part) => (
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
      ))}

      {/* 🔥 BOTÓN VER MÁS */}
      {visibleCount < parts.length && (
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