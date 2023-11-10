import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './Components/Login';
import Manager from './Components/Manager';
import { Route, BrowserRouter, Routes, Outlet } from 'react-router-dom';
import Home from './Components/Home';
import HomeManager from './Components/HomeManager';
import LoginRadio from './Components/LoginRadio';
import Register from './Components/Register';
import FeedBack from './Components/FeedBack';
import Attendance from './Components/Attendance';
import AddTr from './Components/AddTr';
import EditTraining from './Components/EditTraining';
import TrainingData from './Components/TrainingData';
import DeleteTraining from './Components/DeleteTraining';
import DeleteContact from './Components/DeleteContact';
import ManagerData from './Components/ManagerData';
import ViewFeedback from './Components/ViewFeedBack';
import Master from './Components/Master';
import EmployeeData from  './Components/EmployeeData';
import Logout from './Components/Logout';
import ViewEmp from './Components/ViewEmp';
import PrivateRoute from './Components/PrivateRoute';
import EmployeeDataMgr from './Components/EmployeeDataMgr';
import TrainingRegistration from './Components/TrainingRegistration';
import ViewFeedBack1 from './Components/ViewFeedBack1';
import AcceptOrReject from './Components/AcceptOrReject';
import Attendance1 from './Components/Attendance1';
import Employee from './Components/Employee';
import HomeEmp from './Components/HomeEmp';
import TrainingRegistration1 from './Components/TrainingRegistration1';
import Attendance2 from './Components/Attendance2';
import AcceptOrReject1 from './Components/AcceptOrReject1';
import HrHome from './Components/HrHome';
import EmpHome from './Components/EmpHome';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      {/* Routes that use layout 3 Employee*/}

      {/* <Route path="/" element={<Employee/>}>
          <Route index element={<HomeEmp />} />
          <Route path="/EmployeeDataMgr" element={<EmployeeDataMgr />} />
          <Route path="/TrainingRegistration" element={<TrainingRegistration />} />
          <Route path="/ViewFeedBack1" element={<ViewFeedBack1 />} />
          <Route path="/Attendance1" element={<Attendance1 />} />
          <Route path="/AcceptOrReject1" element={<AcceptOrReject1 />} />
          <Route path="/HomeEmp" element={<HomeEmp />} />
          <Route path="/TrainingRegistration1" element={<TrainingRegistration1 />} />
          <Route path="/Attendance2" element={<Attendance2 />} />
          <Route path="/FeedBack" element={<FeedBack />} />   
           <Route path="/Logout" element={<Logout />} />
           <Route path="/LoginRadio" element={<LoginRadio />} />
           <Route path="/Register" element={<Register />} />
           <Route path="/EmpHome" element={<EmpHome />} />

        </Route> */}
        {/* Routes that use layout 2 Manager */}
        <Route path="/" element={<Manager />}>
          <Route index element={<HomeManager />} />
          <Route path="EmployeeDataMgr" element={<EmployeeDataMgr />} />
          <Route path="TrainingRegistration" element={<TrainingRegistration />} />
          <Route path="/ViewFeedBack1" element={<ViewFeedBack1 />} />
          <Route path="/Attendance1" element={<Attendance1 />} />
          <Route path="/AcceptOrReject" element={<AcceptOrReject />} />
                 <Route path="/Logout" element={<Logout />} />
           <Route path="/LoginRadio" element={<LoginRadio />} />
           <Route path="/Register" element={<Register />} />
           <Route path="/HomeManager" element={<HomeManager />} />


        </Route>

        {/* Routes that use layout 1 Hr*/}
       {/* <Route element={<Master />}>
          <Route path='/' element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/LoginRadio" element={<LoginRadio />} />
          <Route path="/Attendance" element={<Attendance />} />
          <Route path="/AddTr" element={<AddTr />} />
          <Route path="/EditTraining" element={<EditTraining />} />
          <Route path="/TrainingData" element={<TrainingData />} />
          <Route path="/DeleteTraining" element={<DeleteTraining />} />
          <Route path="/DeleteContact" element={<DeleteContact />} />
          <Route path="/ManagerData" element={<ManagerData />} />
          <Route path="/ViewFeedBack" element={<ViewFeedback />} />
          <Route path="/EmployeeData" element={<EmployeeData />} />
          <Route path="/Logout" element={<Logout />} />
          <Route path="/HrHome" element={<HrHome />} />
          <Route path="/PrivateRoute" element={<PrivateRoute />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
