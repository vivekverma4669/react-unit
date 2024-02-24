// This users list; You should not modify this;\
import Button from "../common/button/Button";
import Container from '../common/container/Container';
import UserCard from '../users/UserCard';
import React, { useState } from 'react';



const usersList = [
  {
    id: 1,
    name: "Chrisse",
    address: "4018 Sachs Trail",
    avatar: "https://placehold.co/200",
    posts: 1841,
    followers: 66868,
    isMarried: true,
  },
  {
    id: 2,
    name: "Chandler",
    address: "15 Yemen road, Yemen",
    avatar: "https://placehold.co/200",
    posts: 1433,
    followers: 20000,
    isMarried: false,
  },
  {
    id: 3,
    name: "Lottie",
    address: "564 Messerschmidt Court",
    avatar: "https://placehold.co/200",
    posts: 1900,
    followers: 23658,
    isMarried: true,
  },
  {
    id: 4,
    name: "Gray",
    address: "50 Schiller Point",
    avatar: "https://placehold.co/200",
    posts: 875,
    followers: 52900,
    isMarried: true,
  },
  {
    id: 5,
    name: "Clemens",
    address: "67556 Nevada Center",
    avatar: "https://placehold.co/200",
    posts: 1800,
    followers: 31529,
    isMarried: true,
  },
];



function Users() {
  
const [sortedUsers, setSortedUsers] = useState(usersList);

  const sortByAsc = () => {
    setSortedUsers([...usersList].sort((a, b) => a.followers - b.followers));
  };
  
  const sortByDesc = () => {
    setSortedUsers([...usersList].sort((a, b) => b.followers - a.followers));
  };
  
  const resetSort = () => {
    setSortedUsers(usersList);
  };
  
  return (
    <Container>
      {/* You can wrap all the elements in such a way that `Container` component will act like a parent div */}
      <h1>Users List</h1>
      <h3>Sort By their number of followers</h3>

      <div data-testid="users-app-buttons">
      <Button onClick={sortByAsc}>Sort by asc</Button>
      <Button onClick={sortByDesc}>Sort by desc</Button>
      <Button onClick={resetSort}>Reset</Button>
        {/* create 3 buttons here with the help of `Button` component as mentioned in the problem statement */}
      </div>
      <div>
        {sortedUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </Container>
  );
}

export default Users;
