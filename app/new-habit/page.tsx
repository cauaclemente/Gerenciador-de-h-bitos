
const NewHabit = () => {
  return ( 
    <>
      <main className="container relative flex flex-col gap-8 px-12 pt-16 top-28">
        <h1 className="text-white font-semibold text-center text-3xl md:text-4xl font-display ">Novo Hábito</h1>
        <form className="flex flex-col gap-4 mt-4">
        <input 
          type="text"
          placeholder="Digite o seu habito..."
          className="p-2 md:p-3 font-sans text-xl text-white rounded-md bg-neutral-800 md:w-[80%] md:max-w-[700px] mx-auto"
          />
          <button className="
          bg-[#45edad] text-neutral-900 font-semibold font-display rounded-md text-2xl mt-10 
            p-2 w-[100%] max-w-[700px] mx-auto hover:font-bold ">
            Cadastrar
          </button>
          <button className="
          bg-[#ff3c3c] text-neutral-900 font-semibold font-display rounded-md text-2xl mt-5 
            p-2 w-[100%] max-w-[700px] mx-auto hover:font-bold">
            Cancelar
          </button>
        </form>

      </main>
    </>
   );
}
 
export default NewHabit;