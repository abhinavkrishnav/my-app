import React, { useState } from 'react';

const AttendancePage = () => {
  // Initial state for teacher attendance, assuming all are initially marked
  const [attendance, setAttendance] = useState(Array(28).fill(true));

  // Function to toggle the checkbox for a specific teacher
  const toggleAttendance = (index) => {
    setAttendance((prevAttendance) => {
      const newAttendance = [...prevAttendance];
      newAttendance[index] = !newAttendance[index];
      return newAttendance;
    });
  };

  return (
    <div>
      <h1>Attendance</h1>
      <table>
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Name</th>
            <th>Attendance</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 28 }, (_, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{`Teacher ${index + 1}`}</td>
              <td>
                <input
                  type="checkbox"
                  checked={attendance[index]}
                  onChange={() => toggleAttendance(index)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendancePage;
