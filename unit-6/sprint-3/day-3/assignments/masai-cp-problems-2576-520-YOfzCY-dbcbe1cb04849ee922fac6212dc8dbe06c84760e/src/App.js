import { useState , useReducer} from "react";
import "./App.css";

const initialState = {
  email: "",
  password: "",
}; 


//should have the cases "email", "password", and "reset", along with the default case.
//The default case within reducer function should throw an error with message "invalid action type"
const reducer = (state, action) => {
  switch (action.type) {
    case "email":
      return { ...state, email: action.payload };
    case "password":
      return { ...state, password: action.payload };
    case "reset":
      return initialState;
    default:
      console.log("Invalid action type");
  }
};



function App() {
  // import and use the useReducer hook here, with the reducer function and the initialState.

  //store the data in this object variable when you click on the submit button, to render, the data in the UI.
  const [submittedData, setSubmittedData] = useState(null);
  const [formData, dispatch] = useReducer(reducer, initialState);

  
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData({ ...formData });
    dispatch({ type: "reset" });
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
  <input type="email" data-testid="user-email"  name="email" value={formData.email} onChange={handleInputChange} />
</div>

        <div className="userpassword-wrapper">
          <label>User Password</label>
          <input type="password" data-testid="user-password"  name="password"
            value={formData.password}
            onChange={handleInputChange} />
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

// DO NOT change/modify the exports
export default App;
export { reducer, initialState };
