import React from 'react';

const DataDemo = () => {
    let countrynames = ["India","USA","Japan","Maldives","swiz"]
    const  studentnames = [

             {Sid:101,SName:'Srikanth',Marks:78},
            
             {Sid:102,SName:'Pandu',Marks:80},
            
             {Sid:103,SName:'Kommunuri',Marks:92}
            
            ];
  //  let myarray=[];
    // countrynames.forEach(item => {
    //     myarray.push(<li>{item}</li>)
    //   });
    return (
//         <ul>
//            {/* {myarray} */}
//            {countrynames.map((s,i)=>{
//             return <li key={i}>{s}</li>
//            })}

               
// </ul>

// const listElements = studentnames.map((d,i))=>
<div>
    <table border={2.0}>
        <tr>
            <th>Sid</th>
            <th>SName</th>
            <th>Marks</th>
        </tr>
        {studentnames.map((element,i)=>(
      <tr key={i}>
        <td>{element.Sid}</td>
        <td>{element.SName}</td>
        <td>{element.Marks}</td>
      </tr>
        
        ))}
    </table>
</div>
    
    

);
    
};

export default DataDemo;