import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import AuthContextProvider from "./Context/AuthContext";
import AllRoutes from "./Routes/AllRoutes";
import Login from "./Pages/Login";

const App = () => {
  return (
    <>
    <BrowserRouter>
      <AuthContextProvider>
        <div className="App">
         <Navbar/>
         <AllRoutes/>
        </div>
      </AuthContextProvider>
      </BrowserRouter>
    </>
  )
};

export default App;
