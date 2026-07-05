import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import './index.css'

import App from './App.tsx'
import Home from "./components/Home.tsx";
import Resume from "./components/Resume.tsx";
import Equipment from "./components/Equipment.tsx"

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <div>404 not found go back pls :(</div>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: 'resume',
        element: <Resume/>
      },
      {
        path: 'equipment',
        element: <Equipment/>
      }
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
