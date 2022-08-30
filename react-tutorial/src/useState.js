import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}



 const FavoriteColor = () =>{
  const [color,setColor] = useState("red");
  return(<>
    <h1>My favorite color is {color} !</h1>
    <button type='button' onClick={()=> setColor('blue')}>Blue</button>
    <button type='button' onClick={()=> setColor("red")}>Red</button>
    <button type='button' onClick={()=>setColor("pink")}>Pink</button>
    <button type='button' onClick={()=> setColor("green")}>Green</button>
    </>
  )
 }

export  {Example, FavoriteColor}