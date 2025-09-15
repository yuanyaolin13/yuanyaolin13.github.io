import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import './index.css'

import App from './App.tsx'
import Home from "./components/Home.tsx";
import WIP from './components/WIP.tsx';
// import Projects from "./components/Projects.tsx";
// import About from "./components/About.tsx";
// import Blog from "./components/Blog.tsx";
// import Projects from "./components/Projects.tsx";
import CV from "./components/CV.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <div>404 not found go back pls :(</div>,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'about',
                element: <WIP />
            },
            {
                path: 'blog',
                element: <WIP />
            },
            {
                path: 'projects',
                element: <WIP />
            },
            {
                path: 'cv',
                element: <CV />
            }
        ]
    }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
