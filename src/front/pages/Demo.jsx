import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Demo = () => {
  const { store } = useGlobalReducer();

  return (
    <div className="container">
      <h1>Área Privada</h1>
      <ul className="list-group">
        {store.todos.map((item) => (
          <li
            key={item.id}
            className="list-group-item d-flex justify-content-between"
            style={{ background: item.background }}
          >
            <Link to={`/single/${item.id}`}>Usuario: {item.email}</Link>
            <p>ID: {item.id}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};