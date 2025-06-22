export const initialStore = () => ({
  message: null,
  email: "",
  password: "",
  token: "",
  validToken: false,
  todos: [],
  login: "",
  register: "none",
});

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "addEmail":
      return { ...store, email: action.value };
    case "addPassword":
      return { ...store, password: action.value };
    case "addToken":
      return { ...store, token: action.value };
    case "add_user":
      if (store.todos.some((u) => u.id === action.value.id)) return store;
      return { ...store, todos: [...store.todos, action.value] };
    default:
      return store;
  }
}