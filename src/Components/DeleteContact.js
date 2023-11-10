import React,  {useState, useEffect , useRef } from 'react';
import { useNavigate } from "react-router-dom";


const DeleteContact = () => {
    var ob = useNavigate();
    function NoMethod()
    {   
        ob('/Home')
    }
    
    function DeleteRecord()
    {
        const qp = new URLSearchParams(window.location.search)
        var id= qp.get("c")
    fetch('https://localhost:7241/api/delete?id='+id, {
        method: 'DELETE'
       })
       .then((response) => {
        alert("done")
        console.log(response);
       })
       .catch((error) => {
         console.error(error);
       });
    
      }
    return (
        <div>
                
        <h1>Are you sure you want to delete this contact?</h1>
        <div style={{marginLeft:"300px", padding:"50px"}}>
        <input type="button" value="Yes" className='btn btn-info' onClick={DeleteRecord}/> 
        <input type="button" value="No"  className='btn btn-info' onClick={NoMethod}/> 
        </div>
        
                </div>
    );
};

export default DeleteContact;