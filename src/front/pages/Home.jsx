import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { users } from "../fetch_user.js";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();
  const navigate = useNavigate();

  const handleCreateUser = async () => {
    try {
      const data = await users.createUser(store.email, store.password);
      if (data.token || data.user) {
        swal("Usuario registrado", "Inicia sesión", "success");
        navigate("/");
      } else {
        swal("Error", data.message || "Error de registro", "warning");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleLoginUser = async () => {
    try {
      const data = await users.loginUser(store.email, store.password);
      if (data.token) {
        sessionStorage.setItem("token", data.token);
        dispatch({ type: "add_user", value: data.user });
        navigate("/demo");
      } else {
        swal("Error", data.message || "Credenciales inválidas", "warning");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="text-center mt-5">
      <h1>Autenticación</h1>
      <input
        placeholder="Email"
        className="form-control mb-2"
        value={store.email}
        onChange={(e) => dispatch({ type: "addEmail", value: e.target.value })}
      />
      <input
        placeholder="Contraseña"
        type="password"
        className="form-control mb-3"
        value={store.password}
        onChange={(e) => dispatch({ type: "addPassword", value: e.target.value })}
      />
      <button className="btn btn-success me-3" onClick={handleLoginUser}>
        Iniciar Sesión
      </button>
      <button className="btn btn-primary" onClick={handleCreateUser}>
        Registrarse
      </button>
    </div>
  );
};