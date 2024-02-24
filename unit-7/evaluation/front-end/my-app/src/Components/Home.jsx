import React, { useState, useEffect } from 'react';

const Home = () => {
  const [petrolLogs, setPetrolLogs] = useState([]);
  const [selectedStation, setSelectedStation] = useState('');
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      fetchPetrolLogs();
    }
  }, [token]);

  const fetchPetrolLogs = async () => {
    try {
      // Fetch petrol logs from backend based on selected station
      let url = 'http://localhost:7000/petro';
      if (selectedStation) {
        url += `?station=${selectedStation}`;
      }
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (response.ok) {
        const data = await response.json();
        setPetrolLogs(data.petrolLogs);
      } else {
        console.error('Failed to fetch petrol logs');
      }
    } catch (error) {
      console.error('Error fetching petrol logs:', error);
    }
  };

  const handleStationChange = (e) => {
    setSelectedStation(e.target.value);
  };

  return (
    <div>
      <h2>Home</h2>
      {token ? (
        <div>
          <select value={selectedStation} onChange={handleStationChange}>
            <option value="">All Stations</option>
            <option value="Shell">Shell</option>
            <option value="Bharat-petroleum">Bharat Petroleum</option>
            <option value="HP">HP</option>
          </select>
          <ul>
            {petrolLogs.map((log) => (
              <li key={log._id}>
                Date: {log.date}, Odometer Reading: {log.odometerReading}, Petrol Price: {log.petrolPrice}, Petrol Volume: {log.petrolVolume}, Station: {log.station}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Please log in to view petrol logs.</p>
      )}
    </div>
  );
};

export default Home;
