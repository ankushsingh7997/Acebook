


import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";
import { Profile } from "./components/profile/Profile";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  
  {
    path: "/login",
    element: <Login/>,
    
  },
  {
    path: "/",
    element: <Home/>,
    
  },
  {
    path: "/profile/:username",
    element: <Profile/>,
    
  },
  {
    path: "/register",
    element: <Register/>,
    
  },
  
]);



  
function App() {
 
  return (
    <RouterProvider
    router={router}
  />
  )

    
  
}

export default App;
