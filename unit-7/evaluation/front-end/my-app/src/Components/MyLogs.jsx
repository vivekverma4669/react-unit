import React, { useState, useEffect } from 'react';

const MyLogs = () => {
  const [userLogs, setUserLogs] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      fetchUserLogs();
    }
  }, [token]);

  const fetchUserLogs = async () => {
    try {
      // Fetch user's logs from backend
      const response = await fetch('http://localhost:7000/petro', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (response.ok) {
        const data = await response.json();
        setUserLogs(data.petrolLogs);
      } else {
        console.error('Failed to fetch user logs');
      }
    } catch (error) {
      console.error('Error fetching user logs:', error);
    }
  };

  const handleEdit = (logId) => {
    // Implement edit logic
    console.log('Edit log:', logId);
  };

  const handleDelete = async (logId) => {
    try {
      // Delete log with given ID
      const response = await fetch(`http://localhost:7000/petro/${logId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (response.ok) {
        // Remove deleted log from userLogs state
        setUserLogs(userLogs.filter((log) => log._id !== logId));
        console.log('Log deleted successfully');
      } else {
        console.error('Failed to delete log');
      }
    } catch (error) {
      console.error('Error deleting log:', error);
    }
  };

  return (
    <div>
      <h2>My Logs</h2>
      {token ? (
        <ul>
          {userLogs.map((log) => (
            <li key={log._id}>
              Date: {log.date}, Odometer Reading: {log.odometerReading}, Petrol Price: {log.petrolPrice}, Petrol Volume: {log.petrolVolume}, Station: {log.station}
              <button onClick={() => handleEdit(log._id)}>Edit</button>
              <button onClick={() => handleDelete(log._id)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Please log in to view your logs.</p>
      )}
    </div>
  );
};

export default MyLogs;
