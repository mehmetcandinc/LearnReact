import React, { useState } from "react";

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
const FavoriteColor = () => {
  const [color, setColor] = useState("red");
  return (
    <>
      <h1>My favorite color is {color} !</h1>
      <button type="button" onClick={() => setColor("blue")}>
        Blue
      </button>
      <button type="button" onClick={() => setColor("red")}>
        Red
      </button>
      <button type="button" onClick={() => setColor("pink")}>
        Pink
      </button>
      <button type="button" onClick={() => setColor("green")}>
        Green
      </button>
    </>
  );
};

const BasicOparations = () => {
  const [sum, setSum] = useState(0);
  const [sub, setSub] = useState(0);
  const [multi, setMulti] = useState(0);
  const [div, setDiv] = useState(0);
  const func = React.useCallback((a, b) => {
    setSum(a + b);
  }, []);
const array =  [1,2,3,4,5]
  React.useEffect(() => {
    func(5,6)
    return () => {};
  }, []);

  return (
    <>
      <h1>Basic Oparations</h1>

      <input type='text' defaultValue={sum} onChange={(e)=>{setSum(e.currentTarget.value)}} />
      <h2>
        {" "}
        Addition {sum}
        <br></br> Subtraction {sub}
        <br></br> Multiplication {multi}
        <br></br> Division {div}{" "}
      </h2>
      <button
        type="button"
        onClick={(event) => {
          func(Math.random(), 3);
        }}
      >
        Addition
      </button>
      <button type="button" onClick={() => setSub(9 - 5)}>
        Subtraction
      </button>

      <select>
        {array.map((e) => {
          return <option  value={e}>{e}</option>;
        })}
        <option></option>
        <option></option>
      </select>
      <button type="button" onClick={() => setMulti(10 * 5)}>
        Multiplication
      </button>
      <button type="button" onClick={() => setDiv(10 / 5)}>
        Division
      </button>
    </>
  );
};

export { Example, FavoriteColor, BasicOparations };
