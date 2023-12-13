import React, { useRef, useState } from 'react';

const UseRefDemo = () => {
    const a = useRef();
    const b = useRef();
    const[value , setValue] = useState('a');
    

    
    const show = ()=>{
        console.log(a.current.value) //prints textbox value
        console.log(b.current.innerText) //prints content of h1 tag
        setValue(a.current.value)
    }
 
    return (
        <div>
            {value}
            <input type="text" ref={a} onChange={show}/>
            <h1 className='topheading' ref={b} >This is a h1 element</h1>
            <input type="text" ref={b} onChange={show}/>
        </div>
    );
};

export default UseRefDemo;