import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Filter from '../Components/Filter';
import WatchCard from '../Components/WatchCard';
import { fetchWatchesData } from '../Redux/AppReducer/action';

const Watches = () => {
  const dispatch = useDispatch();
  const watches = useSelector((state) => state.app.watches);

  useEffect(() => {
    dispatch(fetchWatchesData());
  }, [dispatch]);

  return (
    <div>
      <Filter />
      <div>
        {watches.map((watch) => (
          <WatchCard key={watch.id} watch={watch} />
        ))}
      </div>
    </div>
  );
};

export default Watches;