import React from 'react';

const WatchCard = ({ watch }) => {
  return (
    <div data-testid={`watch-card-wrapper-${watch.id}`}>

      <div>
        <img data-testid="watch-card-image" src={watch.image} alt={watch.name} />
      </div>
      <div>
        <div data-testid="watch-name">{watch.name}</div>
        <div data-testid="watch-category">{watch.category}</div>
      </div>
    </div>
  );
};

export default WatchCard;