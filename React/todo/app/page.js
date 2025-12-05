"use client";
import "./style.css";
import Header from "@/src/components/Header";
import TODOHero from "@/src/components/TODOHero";
import TODOList from "@/src/components/TODOList";
import Form from "@/src/components/Form";
import { useEffect, useState } from "react";

export default function Home() {
  const [todos, SetTodos] = useState([]);

  useEffect(() => {
    
  const storedTodos = localStorage.getItem("todos")
  if (storedTodos){
    SetTodos(JSON.parse(storedTodos))
  }
  }, [])
  

  const todos_completed = todos.filter(
    (todo) => todo.is_completed === true
  ).length;

  const total_todos = todos.length;
  return (
    <div className="wrapper">
      <Header />
      <TODOHero todos_completed={todos_completed} total_todos={total_todos} />
      <Form  setTodos={SetTodos} todos={todos} />
      <TODOList todos={todos} setTodos={SetTodos} />
    </div>
  );
}
