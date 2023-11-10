import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
 
const HomeEmp = () => {
  const [TrainingData, setTrainingData] = useState([]);
 
  useEffect(() => {
    FetchData();
  }, []);
 
  const FetchData = async () => {
    const url = 'https://localhost:7241/api/db7/';
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setTrainingData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <div>
      <h1>Training Data</h1>
      <table border="1">
        <thead>
          <tr>
            <th> CourseName </th>
            <th>Description </th>
            <th>StartDate</th>
            <th>EndDate </th>
          </tr>
        </thead>
        <tbody>
          {TrainingData.map((i) => (
            <tr key={i.trainingId}>
                <td>{i.courseName}</td>
              <td>{i.description}</td>
              <td>{i.startDate}</td>
              <td>{i.enddate}</td>
          
            </tr>
          ))}
        </tbody>
      </table>

 
    </div>
  );
};
 
export default HomeEmp;