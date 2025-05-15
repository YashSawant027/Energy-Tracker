import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Products from './cpmponents/Products';

// Optional: simple error fallback component
const ErrorPage = () => <div style={{ padding: '2rem', color: 'red' }}>Something went wrong or page not found.</div>;

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
<<<<<<< HEAD
    errorElement : <div>Not Found</div>
=======
    errorElement: <ErrorPage /> // ✅ Handles error boundary
>>>>>>> 28f16309f5c6801297e4751a1c404338d2455026
  },
  {
    path: '/product',
    element: <Products />,
    errorElement: <ErrorPage />
  },
  {
    path: '*', // ✅ Catch-all route for invalid URLs
    element: <ErrorPage />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
