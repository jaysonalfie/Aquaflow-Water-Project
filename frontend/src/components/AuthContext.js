import React , {createContext, useState} from 'react'


//a context object that will provide and consume authentication related data
export  const AuthContext = createContext();

//component that will wrap around other components to provide authentication data and functions
//manages authentication state
 export const AuthProvider = ({children}) =>{
   const [isAuthenticated, setIsAuthenticated] = useState(false)  
   const [user, setUser] = useState(null)  
   const [loading, setLoading] = useState(false)  
   const [error, setError] = useState("");


   const login = async (username, password) =>{
    setLoading(true);
    setError('');
    //preparing login details to be sent to the server
    const formDetails = new URLSearchParams();
    formDetails.append('username',username)
    formDetails.append('password',password)

    try {
        const response = await fetch('http://localhost:8000/token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: formDetails,
        });
        setLoading(false);
        
        if (response.ok) {
            const data = await response.json();
            setIsAuthenticated(true);
            setUser(data.user); // Assuming the server response includes user data
            localStorage.setItem('token', data.access_token);
          } else {
            const errorData = await response.json();
            setError(errorData.detail || 'Authentication failed');
          }

   } catch (error) {
    setLoading(false);
    setError('An error occured. Please try again later')
   }
 }

 //function to log out the user
 const logout = ()=> {
    setIsAuthenticated(false)
    setUser(null)
    localStorage.removeItem('token')

 }

 //makes data available to all other components inside it

 const value = {isAuthenticated, user, loading, error, login, logout};

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}