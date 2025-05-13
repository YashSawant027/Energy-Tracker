import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Nav from './Nav/Nav';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Products from './cpmponents/Products';

const root = ReactDOM.createRoot(document.getElementById('root'));

  let productss = createBrowserRouter([
    {
    path: '/',
    element: <App />
  },
  {
    path: '/product',
    element: <Products />
  }
  ])

root.render(
  <React.StrictMode>
    <RouterProvider router={productss}/>
  </React.StrictMode>
);

reportWebVitals();
