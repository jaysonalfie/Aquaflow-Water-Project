import React from "react";
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import AboutPage from "./pages/AboutPage";
import ShopsPage from "./pages/ShopsPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ErrorPage from "./ErrorPage";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./components/AuthContext";
import DispensorShop from "./Dispensor/DispensorShop";
import CheckoutPage from "./pages/CheckoutPage";


//creating react router for the elements in the application
const router = createBrowserRouter(
  createRoutesFromElements(
    //creating parent route as main layout will be in every page
    <Route>
    <Route path="/dispensorshop" element={<DispensorShop/>}/>
    <Route path="/checkout" element={<CheckoutPage/>}/>

      <Route path='/' element={<MainLayout/>}>
    <Route index element={<LoginPage/>}/>
    <Route path="/home" element={<ProtectedRoute><HomePage/></ProtectedRoute>} />
    <Route path="/about" element={<ProtectedRoute><AboutPage/></ProtectedRoute>}/>
    <Route path="/shop" element={<ProtectedRoute><ShopsPage/></ProtectedRoute>}/>
    <Route path="/shop" element={<ProtectedRoute><ShopsPage/></ProtectedRoute>}/>
    
   
    <Route path="/signup" element={<SignupPage/>}/>
    <Route path="*"  element={<ErrorPage/>}/>
  </Route>
    </Route>
    
)
)
const App=()=> {
  
  return (
    // Wrap the entire app with AuthProvider to provide authentication context to all components
    <AuthProvider>
          {/* RouterProvider uses the created router to handle routing */}
      <RouterProvider router={router}/>
    </AuthProvider>
  )
  
}

export default App;
