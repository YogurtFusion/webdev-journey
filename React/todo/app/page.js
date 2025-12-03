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

// Now, the todos prop will be populated by the data from our state, and without any further ado, this will work. Here’s an image showing the List created from our todos data:

  return (
    <div className="wrapper">
      <Header />
      <TODOHero todos_completed={0} total_todos={0} />
      <Form />
      <TODOList todos={todos} />
    </div>
  );
}
