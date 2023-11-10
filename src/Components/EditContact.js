import React,  {useState, useEffect , useRef } from 'react';

const EditContact = () => {
    
  const qp = new URLSearchParams(window.location.search)
  var [cid,setcid] = useState(qp.get("c"))
  var [fname,setfname] = useState(qp.get("f"))
  var [lname,setlname] = useState(qp.get("l"))
  var [mobile,setmobile] = useState(qp.get("m"))
  var [image,setimage] = useState(qp.get("i"))
    
  function updaterecord()
  {
   var {cid,firstname,lastname,mobile,image}= document.forms["myform"]
   var jsonData ={
    "cid": parseInt(cid.value),
    "firstname":firstname.value,
    "lastname":lastname.value,
    "mobile":mobile.value,   
    "images":image.value   
  }
  console.log(jsonData)
  fetch('http://localhost:3000/editcontact', {
    method: 'put',
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
     <form name="myform">
       <label>enter cid </label>
 <input type="text" name="cid" defaultValue={cid} className='form-control'  />

 <label>enter firstname </label>
 <input type="text" name="firstname" defaultValue={fname} className='form-control'  />

 <label>enter lastname </label>
 <input type="text" name="lastname" defaultValue={lname} className='form-control'  />


 <label>enter Mobile </label>
 <input type="text" name="mobile" defaultValue={mobile}className='form-control'  />

 <label>enter images </label>
 <input type="text" name="image" defaultValue={image}className='form-control'  />
 <input type="button" value="update Contact" onClick={updaterecord} className='btn btn-primary' /> 
 </form>
</div>


    );
};

export default EditContact;