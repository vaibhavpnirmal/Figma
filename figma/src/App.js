import React, { useState } from "react";
import Child from "./Child";

const App = () => {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");

  const getData = (data) => {
    setName(data);
  };
  return (
    <>
      <Child info={getData} />
      <h1>{name}</h1>
      <div
        style={{
          width: "300px",
          height: "300px",
          border: "2px solid black",
          backgroundColor: `${name}`,
        }}
      >
        text
      </div>
    </>
  );
};
export default App;