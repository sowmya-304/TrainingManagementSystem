import React, { useRef } from 'react';

const Register = () => {
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

    fetch('https://localhost:7241/api/adduser/', {
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

        fetch('https://localhost:7241/api/addemp/', {
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
        alert('Failed to register user and employee');
      });
  }

  return (
    <div className="container mt-5">
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