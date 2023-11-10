import React,  {useState, useEffect , useRef } from 'react';

const AddContacts = () => {
    const firstname = useRef('');
    const lastname = useRef('');
    const mobile = useRef('');
    const images =useRef('');


    

  function AddRecord()
  {
    const jsonData ={
        "firstname":firstname.current.value,
        "lastname":lastname.current.value,
        "mobile":mobile.current.value,   
        "images":images.current.value,     
      }
    
      console.log(jsonData)

      fetch('http://localhost:3000/addContact', {
              method: 'post',
              headers: { 'Content-Type': 'application/json' },         
              body: JSON.stringify(jsonData)
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
        <label>enter firstname </label>
        <input type="text" ref={firstname} className='form-control'  />
    
        <label>enter lastname </label>
        <input type="text" ref={lastname} className='form-control'  />
    
    
        <label>enter Mobile </label>
        <input type="text" ref={mobile}className='form-control'  />
    
        <label>enter images </label>
        <input type="text" ref={images}className='form-control'  />
        <input type="button" value="ADD Contact" className='btn btn-primary' onClick={AddRecord}/> 
    
    </div>
                
    );
};

export default AddContacts;