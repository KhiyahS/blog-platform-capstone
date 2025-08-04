import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import About from './pages/About'; // Ensure this component exists
import Login from './pages/Login'; // Ensure this component exists
import Signup from './pages/Signup'; // Ensure this component exists
import Blog from './pages/Blog'; // Ensure this component exists

// Define your routes with createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/blog",
    element: <Blog />
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
