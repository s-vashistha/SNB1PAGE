import React from 'react';
import './ActivityMonitoringTable.css';

const ActivityMonitoringTable = () => {
  return (
    <div className="table-container">
      <table className="activity-table">
        <thead>
          <tr>
            <th rowSpan="2" className="feature-column">Features</th>
            <th colSpan="4">Activity Monitoring (For animals)</th>
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
            <td>Location & Geo Fencing</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Feeding</td>
            <td>Yes</td>
            <td>No</td>
            <td>No</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Sitting</td>
            <td>Yes</td>
            <td>No</td>
            <td>No</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Standing</td>
            <td>Yes</td>
            <td>No</td>
            <td>No</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Resting</td>
            <td>Yes</td>
            <td>No</td>
            <td>No</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Rumination</td>
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

export default ActivityMonitoringTable;
