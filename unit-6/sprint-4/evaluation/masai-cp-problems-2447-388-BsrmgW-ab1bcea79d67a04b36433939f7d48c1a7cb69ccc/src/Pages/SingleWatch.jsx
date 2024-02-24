import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SingleWatch = () => {
  const { id } = useParams();
  const watch = useSelector((state) => state.app.watches.find((w) => w.id === parseInt(id)));

  if (!watch) {
    return <div>Watch not found</div>;
  }

  return (
    <div>
      <h2>{watch.name}</h2>
      <div>
        <img src={watch.image} alt="Cover Pic" />
      </div>
      <div>
        <div>{watch.category}</div>
      </div>
    </div>
  );
};

export default SingleWatch;