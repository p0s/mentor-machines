"use client";
import { useState } from "react";
import Learn from "./Learn";
import Mentors from "./Mentors";

export default function App() {
  const [selected, setSelected] = useState<number | null>(null);
  const handleSelect = (index: number) => {
    setSelected(index);
  };
  return (
    <>
      {selected !== null ? <Learn /> : <Mentors handleSelect={handleSelect} />}
    </>
  );
}
