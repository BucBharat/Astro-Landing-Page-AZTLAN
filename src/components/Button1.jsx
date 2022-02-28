import React, { useState } from 'react';
// import './Counter.css';

export default function Button1({ children }) {
  //   const [count, setCount] = useState(initialCount);
  const [colorP, setColorP] = useState(false);
  const clickEvent = () => {
    setColorP(colorP => !colorP);
    console.log('Changing the color of the text');
  };
  //   const add = () => {
  //     setCount(i => i + 1);
  //     console.log('adding');
  //   };
  //   const subtract = () => {
  //     setCount(i => i - 1);
  //     console.log('Subtracting');
  //   };

  return (
    <>
      <div className="counter">
        <button onClick={clickEvent}>Button text</button>
      </div>

      <p className={colorP ? 'text-red-200' : 'text-blue-200'}>
        Hey this is bharat
      </p>
    </>
  );
}
