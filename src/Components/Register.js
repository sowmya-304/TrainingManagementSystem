import React, { useRef,useNavigate,setMessageError } from 'react';

const Register = () => {
  const navigate = useNavigate();
  const managerId = useRef(null);
  const employeeName = useRef(null);
  const email = useRef(null);
  const mobile = useRef(null);
  const password = useRef(null);
  const userType = useRef(null);
   

  function AddRecord() {
    const nameValue = employeeName.current.value;
    const jsonDataUser = {
      "UserName": nameValue,
      "Password": password.current.value,
      "UserType": userType.current.value,
    };

    const jsonDataEmployee = {
      
      "ManagerId": managerId.current.value,
      "EmployeeName": nameValue,
      "Email": email.current.value,
      "Mobile": mobile.current.value,
    };

    fetch('https://localhost:7186/api/adduser/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(jsonDataUser),
    })
      .then((userResponse) => {
        if (userResponse.ok) {
          return userResponse.json();
        } else {
          throw new Error('Failed to create user');
        }
      })
      .then((user) => {
        jsonDataEmployee.UserId = user.UserId;

        fetch('https://localhost:7186/api/addemp/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(jsonDataEmployee),
        })
          .then((employeeResponse) => {
            if (employeeResponse.ok) {
              alert('User and Employee registered successfully');
            } else {
              throw new Error('Failed to create employee');
            }
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
        setMessageError('Failed to register user and employee');
      });
  }

  return (
    <div className="container mt-5" style={{color:"white"}}>
    <div className="col-md-6 offset-md-3">
      <h1 className="text-center">Registration</h1>
      <form name="myform">
        <div className="mb-3">
          <label htmlFor="managerid" className="form-label">
            ManagerId
          </label>
          <input
            type="text"
            name="managerid"
            className="form-control"
            ref={managerId}
            placeholder="ManagerId"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="employeeName" className="form-label">
            EmployeeName
          </label>
          <input
            type="text"
            name="employeeName"
            className="form-control"
            ref={employeeName}
            placeholder="Enter EmployeeName"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="text"
            name="email"
            className="form-control"
            ref={email}
            placeholder="Enter Email"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="mobile" className="form-label">
            Mobile
          </label>
          <input
            type="text"
            name="mobile"
            className="form-control"
            ref={mobile}
            placeholder="Enter Mobile"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            ref={password}
            placeholder="Enter Password"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="userType" className="form-label">
            UserType
          </label>
          <input
            type="text"
            name="userType"
            className="form-control"
            ref={userType}
            placeholder="Enter UserType"
            required
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={AddRecord}
        >
          Register
        </button>
      </form>
    </div>
  </div>
);
};
 
export default Register;




// import React, { useRef,useState } from 'react';
// import { Link } from 'react-router-dom';
// import {MDBContainer,MDBRow,MDBCol,MDBCard,MDBCardBody} from 'mdb-react-ui-kit';

// const Register = () => {
//   const managerId = useRef(null);
//   const employeeName = useRef(null);
//   const email = useRef(null);
//   const mobile = useRef(null);
//   const password = useRef(null);
//   const userType = useRef(null);
//   const [message,setMessageError]=useState(null)
//   const [ManagerIdError,setmanagerIdError]=useState(null)
//   const [EmployeeNameError,setEmployeeNameError]=useState(null)
//   const [EmailError,setEmailError]=useState(null)
//   const [MobileError,setMobileError]=useState(null)
//   const [PasswordError,setPasswordError]=useState(null)
//   const AddRecord = async (e) => {
//     e.preventDefault();
//     if (!ManagerIdError) {
//       setmanagerIdError('ManagerId is required');
//     } else {
//       setmanagerIdError(null);
//     }
//     if (!EmployeeNameError) {
//       setEmployeeNameError('EmployeeName is required');
//     } else {
//       setEmployeeNameError(null);
//     }
//     if (!EmailError) {
//       setEmailError('Email is required');
//     } else {
//       setEmailError(null);
//     }
//     if (!MobileError) {
//       setMobileError('Mobile is required');
//     } else {
//       setMobileError(null);
//     }
//     if (!PasswordError) {
//       setPasswordError('Password is required');
//       return;
//     } else {
//       setPasswordError(null);
//     }
//     const nameValue = employeeName.current.value;
//     const jsonDataUser = {
//       "UserName": nameValue,
//       "Password": password.current.value,
//       "UserType": userType.current.value,
//     };
  
  
//     fetch('https://localhost:7186/api/adduser/', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(jsonDataUser),
//     })
//       .then((userResponse) => {
//         if (userResponse.ok) {
//           return userResponse.json();
//         } else {
//           throw new Error('Failed to create user');
//         }
//       })
//       .then((user) => {
//         const jsonDataEmployee = {
//           "ManagerId": managerId.current.value,
//           "EmployeeName": nameValue,
//           "Email": email.current.value,
//           "Mobile": mobile.current.value,
//           "UserId": user, 
//         };
  
//         fetch('https://localhost:7186/api/addemp/', {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify(jsonDataEmployee),
//         })
//           .then((employeeResponse) => {
//             if (employeeResponse.ok) {
//               setMessageError('User and Employee registered successfully');
//             } else {
//               throw new Error('Failed to create employee');
//             }
//       })
        
        
//           .catch((error) => {
//             console.error(error);
//           });
//       })
//       .catch((error) => {
//         console.error(error);
//         setMessageError('Failed to register user and employee');
      
//       });
//     }
  
  

//   return (
//     <div>
//       <MDBContainer fluid>
//         <MDBRow className='d-flex justify-content-center align-items-center h-100'>
//           <MDBCol col='12'>
//             <MDBCard className='bg-dark text-white my-2 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
//               <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-2 w-60'>
//                 <h1 className="text-center">Registration</h1>
//                 <form name="myform">
//                   <div className="row">
//                     <label htmlFor="managerid" className="form-label">ManagerId</label><span style={{ color: 'red' }}>*</span>
//                     <input type="text" name="managerid" className="form-control" ref={managerId} placeholder="Enter ManagerId"
//                     required/>
//                     {ManagerIdError && (<p style={{color:"yellow"}}>{ManagerIdError}</p>)}

//                   </div><br/>
//                   <div className="row">
//                     <label htmlFor="employeeName" className="form-label">EmployeeName</label><span style={{ color: 'red' }}>*</span>
//                     <input type="text" name="employeeName" className="form-control" ref={employeeName} placeholder="Enter EmployeeName"
//                      required/>
//                     {EmployeeNameError && (<p style={{color:"yellow"}}>{EmployeeNameError}</p>)}
//                   </div><br/>
//                   <div className="row">
//                     <label htmlFor="email" className="form-label">Email</label><span style={{ color: 'red' }}>*</span>
//                     <input type="text" name="email" className="form-control" ref={email} placeholder="Enter Email"
//                      required/>
//                      {EmailError && (<p style={{color:"yellow"}}>{EmailError}</p>)}
//                   </div><br/>
//                   <div className="row">
//                     <label htmlFor="mobile" className="form-label">Mobile</label><span style={{ color: 'red' }}>*</span>
//                     <input type="text" name="mobile" className="form-control" ref={mobile} placeholder="Enter Mobile"
//                      required/>
//                      {MobileError && (<p style={{color:"yellow"}}>{MobileError}</p>)}
//                   </div><br/>
//                   <div className="row">
//                     <label htmlFor="password" className="form-label">Password</label><span style={{ color: 'red' }}>*</span>
//                     <input type="password" name="password" className="form-control" ref={password} placeholder="Enter Password"
//                      required/>
//                      {PasswordError && (<p style={{color:"yellow"}}>{PasswordError}</p>)}
//                   </div><br/>
//                   <div className="row">
//                     <label htmlFor="userType" className="form-label">UserType</label><span style={{ color: 'red' }}>*</span>
//                     <input type="text" name="userType" className="form-control" ref={userType} value="Employee" readOnly 
//                      />
//                   </div>
//                   <br/>
//                   {/* <button type="button" className="btn btn-primary" onClick={AddRecord}>Register</button> */}
//                   <center><Link className="btn btn-primary" onClick={AddRecord}>Register</Link></center>
//                   {message && (<p style={{color:"yellow"}}>{message}</p>)}
//                 </form>
//               </MDBCardBody>
//             </MDBCard>
//           </MDBCol>
//         </MDBRow>
//       </MDBContainer>
//     </div>
//   );
// };
// export default Register;