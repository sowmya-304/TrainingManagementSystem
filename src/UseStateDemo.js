import React, { useState } from 'react';

const UseStateDemo = () => {
   
    const [ctr,assign]=useState(0)
const increament = () =>
{
assign(ctr+1);
console.log(ctr)
};


    return (
        <div>
             {ctr} // c is not increamenting
<button onClick={increament}>Click here</button>

        </div>
    );
};


export default UseStateDemo;