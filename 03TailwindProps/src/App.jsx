import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Card";

function App() {
  const [count, setCount] = useState(0);
  let Obj = {
    name: "chan",
    age: 24,
  };

  return (
    <>
      <h1 className="bg-green-400 text-black p-3 mb-4 rounded-xl">Tailwind</h1>
      <Card name="Hello" />
      <Card name="Chandan" btnText="ping me" />
    </>
  );
}

export default App;
