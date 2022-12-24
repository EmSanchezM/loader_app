import { createBrowserRouter } from 'react-router-dom'
import { ErrorBoundary } from '../components/ErrorBoundary';

import { 
    PublicLayout, 
    HomeLayout, 
    DashboardLayout 
} from '../layouts';

import { Login } from '../pages/auth/Login';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <PublicLayout />,
        errorElement: <ErrorBoundary />,
        children: [
            {
                index: true, 
                element: <Login />
            },
            {
                path: 'dashboard',
                element: <div>Private route</div>,
                children: [
                    { index: true, element: <DashboardLayout /> }
                ]
            },
            {
                path: 'home',
                element: <div>Private route</div>,
                children: [
                    { index: true, element: <HomeLayout /> }
                ]
            }
        ]
    },
]);
