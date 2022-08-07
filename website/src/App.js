import { Outlet, Link } from "react-router-dom";
import navBar from "./Components/navBar";

export default function App() {
  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/readMe">Read Me about creating this site</Link> |{" "}
        <Link to="/cryptoPriceApi">Crypto Price Api</Link>
      </nav>
      <Outlet />
    </div>
  );
}