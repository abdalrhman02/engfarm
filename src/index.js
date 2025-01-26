import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

// Pages
import Home from './Pages/Home';
import About from './Pages/About';
import Learn from './Pages/Learn';
import Signup from './Pages/Signup';
import Login from './Pages/Login';

// Learn Pages
import Animals from './Pages/LearnPages/Animals';

// Styles
import './Style/Global/global.css';
import './Style/Home/home.css';
import './Style/LearnPage/learn.css';
import './Style/Login/signup-login.css';
import './Style/Components/allComps.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {path: "/", element: <Home />,},
  {path: "About", element: <About />,},
  {path: "Learn", element: <Learn />,},
  {path: "Signup", element: <Signup />,},
  {path: "Login", element: <Login />,},
  {path: "Animals", element: <Animals />,},
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();