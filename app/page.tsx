import { RiDeleteBin6Line } from "react-icons/ri";
import DayState from "./components/dayState";


export default function Home() {

  const habits = {
    "Beber água": {
      "2024-06-06": false,
      "2024-06-05": true,
      "2024-06-04": true,
    },
    "ler livro": {
      "2024-06-06": true,
      "2024-06-05": false,
      "2024-06-04": true,
    }
  }

  const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

  return (
    <>
      <main className="container relative flex flex-col gap-8 p-4 pt-16">
        {habits === null || (Object.keys(habits).length === 0 && (
          <h1 className=" mt-20 text-4xl font-light text-white font-display text-center">
            Você não tem hábitos cadastrados
          </h1>
        ))}
        {habits !== null &&
          Object.entries(habits).map(([habit, habitStreak]) => (
            <div key={habit} className="flex flex-col gap-2">
              <div className=" flex justify-between items-center"> 
                <span className="text-xl font-light text-white font-sans">
                  {habit}
                </span>
                <button> <RiDeleteBin6Line color="red" size={20} />
                </button>
              </div>
              <section className=" grid grid-cols-7 bg-neutral-800 rounded-md p-2">
              {weekDays.map((day) => (
                <div key={day} className="flex flex-col" >
                  <span className="font-sans text-xs text-white md:text-sm text-center">
                  {day}
                </span>
                <DayState day={undefined} />
                </div>
              ))}
              </section>  
            </div>
          ))
        }
      </main>
    </>
  );
}
