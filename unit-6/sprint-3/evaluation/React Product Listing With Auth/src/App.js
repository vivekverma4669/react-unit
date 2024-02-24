import AllRoutes from "./Routes/AllRoutes";
import { BrowserRouter  } from 'react-router-dom';
import AuthContextProvider from "./Context/AuthContext";

export default function App() {
  return <div className="App">{/* Add AllRoutes.jsx component */}
     <BrowserRouter>
      <AuthContextProvider>
        <AllRoutes />
      </AuthContextProvider>
    </BrowserRouter>
  </div>;
}
