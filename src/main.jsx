import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'



import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import App from './App';
import ErrorPage from './Components/ErrorPage';
import AddCoffee from './Components/AddCoffee';
import UpdateCoffee from './Components/UpdateCoffee';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import AuthProvider from './Providers/AuthProvider';
import Users from './Components/Users';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    loader: () => fetch('http://localhost:5000/coffee')
  },
  {
path:'addCoffee',
element:<AddCoffee></AddCoffee>
  },
  {
    path:'updateCoffee/:id',
    element:<UpdateCoffee></UpdateCoffee>,
     loader:({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)

  },
  {
    path: '/signin',
    element:<SignIn></SignIn>
  },
  {
    path:'/signup', 
    element:<SignUp></SignUp>
  },
  {
    path:'/users',
    element:<Users> </Users>,
    loader:()=> fetch('http://localhost:5000/user')
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider> 
    <RouterProvider router={router} />
    </AuthProvider>
    
  </StrictMode>,
)
