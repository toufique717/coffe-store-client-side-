import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Addcoffe from './componants/Addcoffe';
import Updatecoffe from './componants/Updatecoffe';
import Signup from './componants/Signup';
import Signin from './componants/Signin';
import Authprovider from './provider/Authprovider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('http://localhost:5000/coffe')
  },
  {
    path: "addcoffe",
    element: <Addcoffe></Addcoffe>,
  },

  {
    path: "/signup",
    element: <Signup></Signup>,
  },

  {
    path: "/signin",
    element:<Signin></Signin>,
  },
  {
    path: "updatecoffe/:id",
    element: <Updatecoffe></Updatecoffe>,
    loader: ({ params }) => fetch(`http://localhost:5000/coffe/${params.id}`)
  }
]); // ✅ this bracket was missing

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Authprovider>
      <RouterProvider router={router} />
   </Authprovider>
  </StrictMode>
);
