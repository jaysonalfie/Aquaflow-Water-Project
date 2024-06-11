import React , {createContext, useState} from 'react'


//a context object that will provide and consume authentication related data
export  const AuthContext = createContext();

//component that will wrap around other components to provide authentication data and functions
//manages authentication state
 export const AuthProvider = ({children}) =>{
  //state variables to manage authentication status, user infor , loading state and error messages
   const [isAuthenticated, setIsAuthenticated] = useState(false)  
   const [user, setUser] = useState(null)  
   const [loading, setLoading] = useState(false)  
   const [error, setError] = useState("");


   //function to handle user login
   const login = async (username, password) =>{
    //seeting load state to tre while login request is being processed
    setLoading(true);
    setError('');
    //preparing login details to be sent to the server
    const formDetails = new URLSearchParams();
    formDetails.append('username',username)
    formDetails.append('password',password)

    try {
      //sending login request to the server
        const response = await fetch('http://localhost:8000/token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: formDetails,
        });
        setLoading(false);
        
        if (response.ok) {
          //if response is successful extract the user data and token
            const data = await response.json();
            setIsAuthenticated(true);
            setUser(data.user); // Assuming the server response includes user data
            localStorage.setItem('token', data.access_token);//store access token n local storage
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
    setIsAuthenticated(false)//set auth to false
    setUser(null)//clears user data
    localStorage.removeItem('token')//Removes access token from local storage

 }

 //makes data available to all other components inside it

 const value = {isAuthenticated, user, loading, error, login, logout};

   // Return the AuthContext.Provider with the value prop containing the authentication data and functions
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}