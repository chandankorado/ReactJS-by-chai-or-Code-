import React, { useState } from "react";

function Counter() {
  let [counter, setCounter] = useState(10);

  const addValue = () => {
    if (counter <= 19) {
      // counter++
      setCounter((prevCounter) => prevCounter + 1); // prev_value
      console.log("clicked : ", counter);
    } else alert("Can't go More !!");
  };
  const removeValue = () => {
    if (counter >= 1) {
      counter--;
      setCounter(counter);
      console.log("clicked : ", counter);
    } else alert("Can't go below !!");
  };

  return (
    <>
      <h1>Counter</h1>
      <h2>Counter value: {counter}</h2>
      <p>Counter para : {counter}</p>
      <h2>Counter value h2: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <button onClick={removeValue}>Remove value</button>
    </>
  );
}

export default Counter;
