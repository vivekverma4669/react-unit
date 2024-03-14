import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { AllRoutes } from "./Routes/AllRoutes";
import { Navbar } from "./Components/Navbar";

function App() {
  return(
    <BrowserRouter>
   <div className="App-dark">;
   <Navbar/>
  <AllRoutes/>
  </div>
  </BrowserRouter>
  )
}

export default App;
