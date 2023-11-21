import 'react-toastify/dist/ReactToastify.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import App from './App.tsx';
import { TooltipProvider } from './components/ui/tooltip.tsx';
import LoadingBar from './contexts/LoadingBar.tsx';
import Protected from './layout/protected.tsx';
import RoleGuard from './layout/role-guard.tsx';
import UnAuth from './layout/unauth.tsx';
import LoginPage from './pages/login/index.tsx';
import ActivePatients from './pages/Patients/ActivePatients.tsx';
import AllPatients from './pages/Patients/AllPatients.tsx';
import PatientsLayout from './pages/Patients/layout.tsx';
import SinglePatient from './pages/Patients/SinglePatient.tsx';
import Renavigator from './pages/Renavigator.tsx';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <Protected />,
        errorElement: <div>Unauthorized</div>,
        children: [
          {
            path: "",
            element: <Renavigator />,
          },
          {
            path: "/:client_id/apps",
            element: <RoleGuard routeFor={["DOCTOR"]} />,
            children: [
              {
                path: "",
                element: <App />,
              },
              {
                path: "patients",
                element: <PatientsLayout />,
                children: [
                  {
                    index: true,
                    path: "segments/all",
                    element: <AllPatients />,
                  },
                  {
                    path: "segments/active",
                    element: <ActivePatients />,
                  },
                  {
                    path: "segments/new",
                    element: <AllPatients />,
                  },
                  {
                    path: ":id",
                    element: <SinglePatient />,
                  },
                ],
              },
            ],
          },
          {
            path: "/ph",
            element: <RoleGuard routeFor={["PHARMACY"]} />,
            children: [
              {
                element: <App />,
              },
            ],
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
    <TooltipProvider>
      <QueryClientProvider client={queryClient}>
        <LoadingBar>
          <RouterProvider router={router} />
        </LoadingBar>
      </QueryClientProvider>
      <ToastContainer />
    </TooltipProvider>
  </React.StrictMode>
);
