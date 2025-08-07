import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router";

import './index.css'

import App from './App.tsx'
import Home from "./components/Home.tsx";
import About from "./components/About.tsx";
import Blog from "./components/Blog.tsx";
import Projects from "./components/Projects.tsx";
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
                path: '/about',
                element: <About />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/projects',
                element: <Projects />
            },
            {
                path: '/cv',
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
