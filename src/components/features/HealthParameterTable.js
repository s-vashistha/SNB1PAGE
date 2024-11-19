import React from 'react';
import './HealthParameterTable.css';

const HealthParameterTable = () => {
  return (
    <div className="table-container">
      <table className="health-table">
        <thead>
          <tr>
            <th rowSpan="2" className="feature-column">Features</th>
            <th colSpan="4">Primary Health Parameters (For animals)</th>
          </tr>
          <tr>
            <th>Cattle</th>
            <th>Pet</th>
            <th>Goat/Sheep</th>
            <th>Wildlife</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>a. Body temperature</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>b. Heart rate</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>No</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>c. SPO2</td>
            <td>No</td>
            <td>Yes</td>
            <td>No</td>
            <td>No</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HealthParameterTable;
