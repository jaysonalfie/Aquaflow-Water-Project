import React ,{useContext} from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';


//copmonents to protect routes from unauthorized access
const ProtectedRoute = ({children}) => {

    //retrieving the authentication status from AuthContext
    const {isAuthenticated} = useContext(AuthContext)
    
    //if user is not authenticated , redirects them to log in page
    if (!isAuthenticated){
        return <Navigate to ='/' replace />

    }
  
    //if user is authenticated , renders the children components
  return children;
  
}

export default ProtectedRoute;