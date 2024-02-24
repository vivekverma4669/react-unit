import React from 'react';
import Button from '../common/button/Button';



function UserCard({ user }) {
  const { name, address, avatar, posts, followers, isMarried } = user;

  const followUser = () => {
    alert(`You are now following ${name}`);
  };


  return( <div data-testid="user-card">
 <img src={avatar} alt={name} />
      <h2 data-testid="user_name">{name}</h2>
      <p data-testid="user_address">{address}</p>
      <h3>Posts</h3>
      <p data-testid="user_posts">{posts}</p>
      <h3>Followers</h3>
      <p data-testid="user_followers">{followers}</p>
      <h3>Married</h3>
      <p data-testid="is-married">{isMarried ? 'Yes' : 'No'}</p>
      <Button onClick={followUser}>Follow</Button>

  </div>
  )
}

export default UserCard;
