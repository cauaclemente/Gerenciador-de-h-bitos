"use client";

import axios from "axios";
import Link from "next/link";
import { useState } from "react";

const NewHabit = () => {
  const [habit, setHabit] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3333/api/habit/post", { habit });
      if (response.status === 200) {
        console.log("Hábito cadastrado com sucesso");

      } else {
        console.error("Erro ao cadastrar");
      }

      setHabit("");
    } catch (error) {
      console.error("Erro ao cadastrar", error);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHabit(event.target.value);
  };

  return (
    <main className="container relative flex flex-col gap-8 px-12 pt-16 top-28">
      <h1 className="text-white font-semibold text-center text-3xl md:text-4xl font-display">
        Novo Hábito
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
        <input
          type="text"
          placeholder="Digite o seu hábito..."
          value={habit}
          onChange={handleChange}
          className="p-2 md:p-3 font-sans text-xl text-white rounded-md bg-neutral-800 md:w-[80%] md:max-w-[700px] mx-auto"
        />
        <button
          type="submit"
          className="
          bg-[#45edad] text-neutral-900 font-semibold font-display rounded-md text-2xl mt-10 
          p-2 w-[100%] max-w-[700px] mx-auto hover:font-bold"
        >
          Cadastrar
        </button>
        <Link href="/"
            className="
            bg-[red] text-center  text-neutral-900 font-semibold font-display rounded-md text-2xl 
            p-2 w-[100%] max-w-[700px] mx-auto hover:font-bold"
          >
            Voltar

        </Link>
      </form>
    </main>
  );
};

export default NewHabit;
