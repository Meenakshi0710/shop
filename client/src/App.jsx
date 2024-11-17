import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import Products from "./pages/products/Products";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import About from "./pages/about/About";
import "./App.scss"
import { Navigate } from "react-router-dom";
const Layout = () =>{
  return(
    <div className="app">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("jwt");
  
  if (!token) {
    return <Navigate to="/login" />;
  }
  return children;
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/signup",
        element: <Signup/>,
      },
      {
        path: "/products/:id",
        element: (<ProtectedRoute><Products/></ProtectedRoute>),
      },
      {
        path: "/product/:id",
        element: (<ProtectedRoute><Product/></ProtectedRoute>),
      },
      
    ]
  },
 
]);

function App() {

  return (
    <>
     <div>
     <RouterProvider router={router} />

     </div>
      
    </>
  )
}

export default App
