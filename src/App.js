import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Employee from './Components/Employee';
import HomeEmp from './Components/HomeEmp';
import Manager from './Components/Manager';
import HomeManager from './Components/HomeManager';
import Master from './Components/Master';
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
import EmployeeData from './Components/EmployeeData';
import Logout from './Components/Logout';
import EmployeeDataMgr from './Components/EmployeeDataMgr';
import TrainingRegistration from './Components/TrainingRegistration';
import ViewFeedBack1 from './Components/ViewFeedBack1';
import AcceptOrReject from './Components/AcceptOrReject';
import Attendance1 from './Components/Attendance1';
import TrainingRegistration1 from './Components/TrainingRegistration1';
import Attendance2 from './Components/Attendance2';
import AcceptOrReject1 from './Components/AcceptOrReject1';
import HrHome from './Components/HrHome';
import EmpHome from './Components/EmpHome';

const App = () => {
  return (
    <div>
      <Routes>
        {/* Routes for Employee */}
        <Route path="/LoginRadio" element={<LoginRadio />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/" element={<Employee />}>
          <Route index element={<HomeEmp />} />
          <Route path="/HomeEmp" element={<HomeEmp />} />
          <Route path="HomeEmp/EmployeeDataMgr" element={<EmployeeDataMgr />} />
          <Route path="HomeEmp/TrainingRegistration1" element={<TrainingRegistration1 />} />
          <Route path="HomeEmp/Attendance2" element={<Attendance2/>} />
          <Route path="HomeEmp/AcceptOrReject" element={<AcceptOrReject />} />
          <Route path="HomeEmp/TrainingData" element={<TrainingData />} />
          <Route path="HomeEmp/HomeEmp" element={<HomeEmp />} />
         
          {/* <Route path="HomeEmp/Attendance" element={<Attendance />} /> */}
          <Route path="HomeEmp/FeedBack" element={<FeedBack />} />
        </Route>

        {/* Routes for Manager */}
        <Route path="/" element={<Manager />}>
          <Route index element={<HomeManager />} />
          <Route path="/HomeManager" element={<HomeManager />} />
          <Route path="HomeManager/EmployeeDataMgr" element={<EmployeeDataMgr />} />
          <Route path="HomeManager/TrainingRegistration" element={<TrainingRegistration />} />
          <Route path="HomeManager/ViewFeedBack1" element={<ViewFeedBack1 />} />
          <Route path="HomeManager/Attendance1" element={<Attendance1 />} />
          <Route path="HomeManager/AcceptOrReject" element={<AcceptOrReject />} />
        </Route>

        {/* Routes for Hr */}
        <Route element={<Master />}>
          <Route index element={<HrHome />} />
          <Route path="/HrHome" element={<HrHome />} />
          <Route path="HrHome/Attendance" element={<Attendance />} />
          <Route path="HrHome/AddTr" element={<AddTr />} />
          <Route path="HrHome/EditTraining" element={<EditTraining />} />
          <Route path="HrHome/TrainingData" element={<TrainingData />} />
          <Route path="HrHome/TrainingData/AddTr" element={<AddTr/>} />
          <Route path="HrHome/DeleteTraining" element={<DeleteTraining />} />
          <Route path="HrHome/DeleteContact" element={<DeleteContact />} />
          <Route path="HrHome/ManagerData" element={<ManagerData />} />
          <Route path="HrHome/ViewFeedBack" element={<ViewFeedback />} />
          <Route path="HrHome/EmployeeData" element={<EmployeeData />} />
        </Route>

        <Route path="/Logout" element={<Logout />} />
      </Routes>
    </div>
  );
};

export default App;
