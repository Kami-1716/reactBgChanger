import { useState } from "react";

function App() {
  const [color, setColor] = useState("cyan");

  return (
    <>
      <div
        className="h-screen w-screen flex justify-center items-center"
        style={{ backgroundColor: color }}
      >
        <button
          className=" text-white font-bold py-4 px-8 rounded mr-3"
          onClick={() => setColor("blue")}
          style={{ backgroundColor: "blue" }}
        >
          Blue
        </button>
        <button
          className=" hover:bg-red-600 text-white font-bold py-4 px-8 rounded mr-3"
          onClick={() => setColor("red")}
          style={{ backgroundColor: "red" }}
        >
          Red
        </button>
        <button
          className="text-black font-bold py-4 px-8 rounded mr-3"
          onClick={() => setColor("yellow")}
          style={{ backgroundColor: "yellow" }}
        >
          Yellow
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded mr-3"
          onClick={() => setColor("green")}
          style={{ backgroundColor: "green" }}
        >
          Green
        </button>
        <button
          className=" text-white font-bold py-4 px-8 rounded mr-3"
          onClick={() => setColor("orange")}
          style={{ backgroundColor: "orange" }}
        >
          Orange
        </button>
      </div>
    </>
  );
}

export default App;
