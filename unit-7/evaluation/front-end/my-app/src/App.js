import React from 'react';
import { BrowserRouter , Route, Routes} from 'react-router-dom';
import Signup from './Components/Signup.jsx';
import Login from './Components/Login.jsx';
import Home from './Components/Home.jsx';
import MyLogs from './Components/MyLogs.jsx';
import PrivateRoute from './Components/PrivateRoute.jsx';
import { AuthProvider } from './context.jsx';

const App=()=>{
  return (
    <BrowserRouter>
      <AuthProvider>
    <Routes>
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" component={<Login/>} />
        <PrivateRoute  path="/" element={<Home/>} />
        <PrivateRoute  path="/my-logs" component={<MyLogs/>} /> 
        </Routes> 
        </AuthProvider>
    </BrowserRouter>
      
  );
}
export default App;

