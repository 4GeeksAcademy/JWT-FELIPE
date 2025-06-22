const BASE_URL = "https://upgraded-acorn-jv7gj4w6g6xf55g4-3001.app.github.dev/api/user";

export const users = {
  createUser: async (email, password) => {
    try {
      const res = await fetch(`${BASE_URL}/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, is_active: true }),
      });
      return await res.json();
    } catch (err) {
      console.error("Error en createUser:", err);
      return { message: "Error de red." };
    }
  },
  loginUser: async (email, password) => {
    try {
      const res = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      return await res.json();
    } catch (err) {
      console.error("Error en loginUser:", err);
      return { message: "Error de red." };
    }
  },
};