// utils/fetchHabits.ts

import axios from "axios";

const fetchHabits = async () => {
  try {
    const response = await axios.get("http://localhost:3333/api/habit/get");
    if (response.status === 200) {
      return response.data; // Retorna os dados dos hábitos
    } else {
      console.error("Erro ao buscar hábitos: status não esperado", response.status);
      return null;
    }
  } catch (error) {
    console.error("Erro ao buscar hábitos", error);
    return null;
  }
};

export default fetchHabits;
