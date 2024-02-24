import React from 'react';
import { useTheme} from '../Context/ThemeContextProvider';
import User from './User';
import userData from '../db.json'

const Dashboard = () => {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <div
      data-testid="dashboard-cont"
      style={{
        backgroundColor: isDarkTheme ? 'black' : 'white',
        color: isDarkTheme ? 'white' : 'black',
      }}
    >
      <h1>Dashboard</h1>
      <select onChange={toggleTheme}>
        <option value="light">Light Theme</option>
        <option value="dark">Dark Theme</option>
      </select>
    {userData.map((u)=>{
        return (
    <User user={u}/>
    )
    })
    }
    </div>
  );
};

export {Dashboard};
