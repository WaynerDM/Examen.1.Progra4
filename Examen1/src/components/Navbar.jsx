import { Link } from "@tanstack/react-router";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "14px 20px",
        background: "linear-gradient(90deg, #0f0f0f, #1a1a1a)",
        borderBottom: "2px solid #ff2d2d",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      <div style={{ color: "#ff2d2d", fontWeight: "bold", fontSize: "18px" }}>
        AUTO PARTS SYSTEM
      </div>

      <div style={{ display: "flex", gap: "25px" }}>
        <Link
          to="/"
          activeProps={{
            style: {
              color: "#ff2d2d",
              fontWeight: "bold",
              borderBottom: "2px solid #ff2d2d",
              paddingBottom: "2px",
            },
          }}
          style={{
            textDecoration: "none",
            color: "#fff",
            transition: "0.2s",
          }}
        >
          🏠 Home
        </Link>

        <Link
          to="/carparts"
          activeProps={{
            style: {
              color: "#ff2d2d",
              fontWeight: "bold",
              borderBottom: "2px solid #ff2d2d",
              paddingBottom: "2px",
            },
          }}
          style={{
            textDecoration: "none",
            color: "#fff",
            transition: "0.2s",
          }}
        >
          🚗 Repuestos
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;