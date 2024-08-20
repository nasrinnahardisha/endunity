import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddApple from './Components/AddApple/AddApple.jsx';
import UpdateApple from './Components/UpdateApple/UpdateApple.jsx';
import Root from './Components/Routes/Root.jsx';
import Home from './Components/Home/Home.jsx';






const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element:<Home></Home> ,
        //2.2 [read] : http://localhost:5001/apple : api use to data useLoaded in the home
        loader:() => fetch('http://localhost:5001/apple')
        
      },
      {
        path: "/addApple",
        element:<AddApple></AddApple> ,

      },
      {
        path: "/updateApple/:id",
        element:<UpdateApple></UpdateApple> ,
        //4.2
        loader:({params}) => fetch(`http://localhost:5001/apple/${params.id}`)
       

      },
    ],
  },
]);




createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider router={router} />
  </StrictMode>,
)
