"use client";
import "./style.css";
import Header from "@/src/components/Header";
import TODOHero from "@/src/components/TODOHero";
import TODOList from "@/src/components/TODOList";
import Form from "@/src/components/Form";
import { useEffect, useState } from "react";

export default function Home() {
  const [todos, SetTodos] = useState([]);

  //   useEffect(()=>{
  //     SetTodos([
  //     { title: "some task", id: crypto.randomUUID(), is_completed: false },
  //     {
  //       title: "some other task",
  //       id: crypto.randomUUID(),
  //       is_completed: true,
  //     },
  //     {title: "last task", id: crypto.randomUUID(), is_completed: false},
  //   ]);
  // }, [])

  const todos_completed = todos.filter(
    (todo) => todo.is_completed === true
  ).length;

  const total_todos = todos.length;
// How to Build the TODO App's Functionality
  return (
    <div className="wrapper">
      <Header />
      <TODOHero todos_completed={todos_completed} total_todos={todos_completed} />
      <Form  setTodos={SetTodos} />
      <TODOList todos={todos} />
    </div>
  );
}
