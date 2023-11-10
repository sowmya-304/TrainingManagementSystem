import React, { useEffect, useState } from 'react';

const UseEffectDemo = () => {
    const [count, setCount] = useState(0);
    useEffect(() =>{
    console.log("ApI was called");
},[count]);


    return (
    
 <div>
 <button onClick={() => { setCount(count); }} > Click</button>

   <button   onClick={() => {  setCount(count + 1); }} >new Click</button>
 </div>

    );
};

export default UseEffectDemo;