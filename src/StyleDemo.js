import React from 'react';

const StyleDemo = () => {
    let name = 'Murari'
    let a = 10;
    let b = 50;
    var myStyle={
        color:"yellow",fontSize:"25px",backgroundColor:"red"
    }
    return (
        <div>
            Lets {name} Learn react<br/>
            Your Age is {a+b}<br/>
          <div style={{color:'red',backgroundColor:'yellow'}}> Thanks for being our mentor</div>
          <div style={{myStyle}}> Thanks for being our mentor</div>
        </div>
    );
};

export default StyleDemo;