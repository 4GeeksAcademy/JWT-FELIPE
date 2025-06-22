import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg justify-content-end navbar-light bg-light">
         <button className="btn btn-danger" onClick={handleLogout}>Cerrar Sesión</button>
    </nav>
  );
};