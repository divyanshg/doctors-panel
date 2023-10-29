import 'react-toastify/dist/ReactToastify.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import App from './App.tsx';
import LoadingBar from './contexts/LoadingBar.tsx';
import Protected from './layout/protected.tsx';
import UnAuth from './layout/unauth.tsx';
import LoginPage from './pages/login/index.tsx';
import Products from './pages/products/index.tsx';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <Protected />,
        children: [
          {
            path: "/",
            element: <App />,
          },
          {
            path: "products",
            element: <Products />,
          },
        ],
      },
      {
        path: "/",
        element: <UnAuth />,
        children: [
          {
            path: "login",
            element: <LoginPage />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <LoadingBar>
        <RouterProvider router={router} />
      </LoadingBar>
    </QueryClientProvider>
    <ToastContainer />
  </React.StrictMode>
);
