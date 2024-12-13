import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

// Pages
import Home from './Pages/Home';
import About from './Pages/About';
import Learn from './Pages/Learn';

// Styles
import './Style/Global/global.css';
import './Style/Home/home.css';
import './Style/Components/allComps.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {path: "/", element: <Home />,},
  {path: "About", element: <About />,},
  {path: "Learn", element: <Learn />,},
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();