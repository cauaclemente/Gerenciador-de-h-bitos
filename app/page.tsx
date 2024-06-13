"use client";

// app/page.tsx

import React, { useState, useEffect } from "react";
import fetchHabits from "./utils/fetchHabits";
import { RiDeleteBin6Line } from "react-icons/ri";
import DayState from "./components/dayState";
import Link from "next/link";

const Home = () => {
  const [habits, setHabits] = useState<any>(null);

  useEffect(() => {
    const getHabits = async () => {
      try{
        const habitsData = await fetchHabits();
        const habitsObject = habitsData.reduce((acc: { [x: string]: any; }, habit: { habit: string | number; }) => {
          acc[habit.habit] = habit
          return acc
        }, {});
        setHabits(habitsObject)
      }catch(err){
        console.log(err)
      }
    };

    getHabits();
  }, []);

  const today = new Date();
  const todayWeekDay = today.getDay();
  const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

  const sortedWeekDay =
    weekDays.slice(todayWeekDay + 1).concat(weekDays.slice(0, todayWeekDay + 1));

  return (
    <main className="container relative flex flex-col gap-8 p-4 pt-16">
      {habits === null || Object.keys(habits).length === 0 ? (
        <h1 className="mt-20 text-4xl font-light text-white font-display text-center">
          Você não tem hábitos cadastrados
        </h1>
      ) : (
        Object.entries(habits).map(([habitName, habitStreak]) => ( // Corrigido para habitName
          <div key={habitName} className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <span className="text-xl font-light text-white font-sans">
                {habitName} {/* Mostra o nome do hábito */}
              </span>
              <button>
                <RiDeleteBin6Line color="red" size={20} />
              </button>
            </div>
            <section className="grid grid-cols-7 bg-neutral-800 rounded-md p-2">
              {sortedWeekDay.map((day, index) => (
                <div key={index} className="flex flex-col last:font-bold">
                  <span className="font-sans text-xs text-white md:text-sm text-center">
                    {day}
                  </span>
                  <DayState day={undefined} />
                </div>
              ))}
            </section>
          </div>
        ))
      )}

      <Link href="/new-habit">
        <button 
          className="
          fixed bg-[#45edad] text-neutral-900 font-semibold font-display 
          rounded-md text-2xl p-2 bottom-10 w-[80%] max-w-[700px] left-1/2 -translate-x-1/2">
           Novo hábito
        </button>
      </Link>
    </main>
  );
};

export default Home;
