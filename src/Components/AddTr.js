import React, { useRef } from 'react';

const AddTr = () => {
  const courseNameRef = useRef('');
  const descriptionRef = useRef('');
  const startDateRef = useRef('');
  const enddateRef = useRef('');

  function AddRecord() {
    const courseName = courseNameRef.current.value;
    const description = descriptionRef.current.value;
    const startDate = startDateRef.current.value;
    const enddate = enddateRef.current.value;
    SendRecord(courseName, description, startDate, enddate);
  }

  function SendRecord(courseName, description, startDate, enddate) {
    const jsonData = {
      CourseName: courseName,
      Description: description,
      StartDate: startDate,
      Enddate: enddate,
    };

    fetch('https://localhost:7241/api/addtd/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(jsonData),
    })
      .then((response) => {
        if (response.ok) {
          alert('Training data added successfully');
        } else {
          throw new Error('Failed to add training data');
        }
      })
      .catch((error) => {
        console.error(error);
        alert('Failed to add training data');
      });
  }

  return (
    <div>
      <div>
        <label>Enter courseName</label>
        <input type="text" ref={courseNameRef} className="form-control" />

        <label>Enter description</label>
        <input type="text" ref={descriptionRef} className="form-control" />

        <label>Enter startDate</label>
        <input type="text" ref={startDateRef} className="form-control" />

        <label>Enter endDate</label>
        <input type="text" ref={enddateRef} className="form-control" />
        <br />
        <br />

        <button type="button" className="btn btn-primary" onClick={AddRecord}>
          ADD
        </button>
      </div>
    </div>
  );
};

export default AddTr;
