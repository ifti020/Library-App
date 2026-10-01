import {useAuth} from "./AuthContext.tsx";
import {SpinnerLoading} from "../componenets/SpinnerLoading.tsx";
import {Navigate} from "react-router-dom";

interface PrivateRouteProps {
    children: React.ReactNode;

}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({children}) =>{
    const { isAuthenticated, initialized} = useAuth();

    if(!initialized){
        return <SpinnerLoading/>
    }
    if(!isAuthenticated){
        return <Navigate to ="/" replace/>
    }

    return <> {children}</>
}