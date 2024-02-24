import { ADD, REDUCE, CHANGE_THEME } from "./actionTypes";
const handleAdd = () => ({ type: ADD, payload: 1 });
const handleReduce = () => ({ type: REDUCE, payload: 1 });
const handleTheme = (theme) => ({ type: CHANGE_THEME, payload: theme });

export { handleAdd, handleReduce, handleTheme };