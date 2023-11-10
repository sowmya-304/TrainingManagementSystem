import React from 'react';
import { Link, useNavigate, Outlet } from 'react-router-dom';

const Manager = () => {
  const ob = useNavigate();

  // function NoMethod() {
  //   const data = document.forms['myform'].elements.data.value;
  //   ob({
  //     pathname: '/Search',
  //     search: `?fname=${data}`,
  //   });
  // }

  // Check the user role stored in session storage
  const userRole = sessionStorage.getItem('userRole');
  const isUserLoggedIn = sessionStorage.getItem('uid') !== null;

  return (
    <div>
      <div>
        <img src="/assets/images/banner1.jpg" style={{ width: '100%', height: '150px' }} />
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                <div className="navbar-nav">
                <Link to="/EmployeeDataMgr" className="nav-item nav-link">
                    EmployeeData
                  </Link>
                  <Link to="/TrainingRegistration" className="nav-item nav-link">
                    TrainingRegistration
                  </Link>
                 
                  <Link to="/ViewFeedBack1" className="nav-item nav-link">
                  ViewFeedBack
                  </Link><br/>
                  <Link to="/Attendance1" className="nav-item nav-link">
                  Attendance
                  </Link>
                 </div>
                {/* <form name="myform" className="d-flex">
                  <div className="input-group">
                    <input type="text" name="data" style={{ width: '500px' }} className="form-control" placeholder="Search" />
                    <button type="button" onClick={NoMethod} className="btn btn-info">
                      Search
                    </button>
                  </div>
                </form> */}
                <div className="navbar-nav">
                  {isUserLoggedIn ? (
                    <li>
                      <Link className="nav-item nav-link" to="/Logout">
                        Logout
                      </Link>
                    </li>
                  ) : (
                    <li>
                      <Link className="nav-item nav-link" to="/LoginRadio">
                        Login
                      </Link>
                    </li>
                  )}
                </div>
              </div>
              {isUserLoggedIn ? (
                <div className="btn btn-success">Welcome : {sessionStorage.getItem('uid')}</div>
              ) : (
                <div className="btn btn-info">Welcome Guest</div>
              )}
            </div>
          </nav>
          <div style={{ marginTop: '100px', marginLeft: '150px' }}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manager;
