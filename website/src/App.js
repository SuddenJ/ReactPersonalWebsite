import { Outlet } from "react-router-dom";
import NavBar from "./Components/NavBar";

export default function App() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}