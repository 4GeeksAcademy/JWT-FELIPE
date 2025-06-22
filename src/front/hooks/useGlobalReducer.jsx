import { useContext, useReducer, createContext } from "react";
import storeReducer, { initialStore } from "../store"; // Asegúrate de que la ruta sea correcta

// Creamos un contexto para el estado global
const StoreContext = createContext();

// Provider que envuelve la aplicación y proporciona el estado global y dispatch
export function StoreProvider({ children }) {
  const [store, dispatch] = useReducer(storeReducer, initialStore());
  return (
    <StoreContext.Provider value={{ store, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
}

// Hook personalizado para acceder al estado global y al dispatch
export default function useGlobalReducer() {
  const { store, dispatch } = useContext(StoreContext);
  return { store, dispatch };
}