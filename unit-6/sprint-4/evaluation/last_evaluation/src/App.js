import "./App.css";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import { Navbar } from "./Components/Navbar";
import { AllRoutes } from "./Routes/AllRoutes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return( 
  <Provider store={store}>
  <BrowserRouter>
  <div className="App-dark">
    <Navbar/>
    <AllRoutes/>
  </div>
  </BrowserRouter>
  </Provider>
)}


export default App;

