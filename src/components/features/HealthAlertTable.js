import React from 'react';
import './HealthAlertTable.css';

const HealthAlertTable = () => {
  return (
    <div className="table-container">
      <table className="health-alert-table">
        <thead>
          <tr>
            <th rowSpan="2" className="feature-column">Features</th>
            <th colSpan="4">Health Alert (For female animals)</th>
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
            <td>Heat cycle</td>
            <td>Yes</td>
            <td>No</td>
            <td>No</td>
            <td>No</td>
          </tr>
          <tr>
            <td>Lactation</td>
            <td>Yes</td>
            <td>No</td>
            <td>No</td>
            <td>No</td>
          </tr>
          <tr>
            <td>Gestation</td>
            <td>Yes</td>
            <td>No</td>
            <td>No</td>
            <td>No</td>
          </tr>
          <tr>
            <td>Insemination window</td>
            <td>Yes</td>
            <td>No</td>
            <td>No</td>
            <td>No</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HealthAlertTable;
