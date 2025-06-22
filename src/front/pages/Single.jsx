import { useParams, Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Single = () => {
  const { store } = useGlobalReducer();
  const { theId } = useParams();
  const single = store.todos.find((x) => x.id === parseInt(theId));

  return (
    <div className="container text-center mt-4">
      <h1 className="display-4">Detalle de Usuario</h1>
      <p>Email: {single?.email}</p>
      <p>ID: {single?.id}</p>
      <Link to="/demo">
        <button className="btn btn-primary mt-3">Volver</button>
      </Link>
    </div>
  );
};