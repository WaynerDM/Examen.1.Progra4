import { Link } from "@tanstack/react-router";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        gap: "20px",
        padding: "12px 16px",
        backgroundColor: "#f5f5f5",
        borderBottom: "1px solid #ddd",
        alignItems: "center",
      }}
    >
      <Link
        to="/"
        activeProps={{
          style: {
            fontWeight: "bold",
            color: "blue",
          },
        }}
        style={{ textDecoration: "none", color: "black" }}
      >
        🏠 Home
      </Link>

      <Link
        to="/carparts"
        activeProps={{
          style: {
            fontWeight: "bold",
            color: "blue",
          },
        }}
        style={{ textDecoration: "none", color: "black" }}
      >
        🚗 Repuestos
      </Link>
    </nav>
  );
};

export default Navbar;