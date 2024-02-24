import { ADD, REDUCE } from './actionTypes';

const handleAddActionObj = (payload) => {
  return { type: ADD, payload: payload };
};

const handleReduceActionObj = (payload) => {
  return { type: REDUCE, payload: payload };
};

export { handleAddActionObj, handleReduceActionObj };
