// Your code goes here
// do a default export

import React, { useState } from 'react';

function UserCard({ name, avatar, posts, followers, address }) {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleToggleFollow = () => {
    setIsFollowing((prevIsFollowing) => !prevIsFollowing);
  };

  return (
    <div>
      <img src={avatar} alt={name} style={{ borderRadius: '50%' }} />
      <h2 data-testid="user_name">{name}</h2>
      <p data-testid="user_address">{address}</p>
      <p data-testid="user_posts">{posts}</p>
      <p data-testid="user_followers">{followers}</p>
      <h3>Posts</h3>
      <h3>Followers</h3>
      <button onClick={handleToggleFollow}>
        {isFollowing ? 'Following' : 'Follow'}
      </button>
    </div>
  );
};

export default UserCard;
