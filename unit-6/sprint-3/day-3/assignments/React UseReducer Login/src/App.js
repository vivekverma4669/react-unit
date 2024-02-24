import React, { useReducer, useState } from "react";
import "./App.css";

const initialState = {
  email: "",
  password: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "email":
      return { ...state, email: action.payload };
    case "password":
      return { ...state, password: action.payload };
    case "reset":
      return initialState;
    default:
      throw new Error("Invalid action type");
  }
};

function App() {

  const [formData, dispatch] = useReducer(reducer, initialState);
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData({ ...formData });

    
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: name, payload: value });
  };

  return (
    <div className="App">
      <h2>useReducer Hook</h2>
      <form className="form-wrapper" data-testid="form-wrapper" onSubmit={handleSubmit}>
        <div className="useremail-wrapper">
          <label>User Email</label>
          <input
            type="email"
            data-testid="user-email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="userpassword-wrapper">
          <label>User Password</label>
          <input
            type="password"
            data-testid="user-password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>

        {submittedData ? (
        <div>
          <div data-testid="submitted-data-email">User Email: {submittedData.email}</div>
          <div data-testid="submitted-data-password">User Password: {submittedData.password}</div>
        </div>
      ) : (
        <div data-testid="no-details-container">No details found</div>
      )}
    </div>
  );
}

export default App;
export { reducer, initialState };
