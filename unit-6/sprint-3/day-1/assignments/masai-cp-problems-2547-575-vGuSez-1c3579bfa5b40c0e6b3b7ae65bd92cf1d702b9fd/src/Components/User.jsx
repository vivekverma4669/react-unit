
import React from 'react';
import { useTheme } from '../Context/ThemeContextProvider';

const User = ({ user }) => {
  const { isDarkTheme } = useTheme();

  return (
    <div data-testid="user" style={{ width:"200px", color: isDarkTheme ? 'yellow' : 'blue' }}>
      <img src={user.img} alt={user.name} style={{ width: "100%" }} />
      <div>{user.name}</div>
      <div>{user.position}</div>
      <h2>Professional Level {user.level}</h2>
      <input data-testid="level" type="range" />
      <h2>{user.points} Points</h2>
    </div>
  );
};

export default User;
