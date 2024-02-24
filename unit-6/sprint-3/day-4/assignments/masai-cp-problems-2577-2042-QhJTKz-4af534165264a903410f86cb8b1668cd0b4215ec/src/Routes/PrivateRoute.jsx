import { AuthContext } from "../Context/AuthContext";
import { useContext, useEffect } from "react";
import ProductDetailsPage from "../Pages/ProductDetailsPage";
import { Navigate, useNavigate } from "react-router-dom";

const PrivateRoute = ( {children}) => {
     
    let navigate = useNavigate();

    const { authState } = useContext(AuthContext);
    console.log(authState);

    useEffect(()=>{
    if(!authState.isAuth){
        // <Navigate to="/login" replace={true} />
        navigate("/login");
    }
})
    return  children;
    
};

export default PrivateRoute;
