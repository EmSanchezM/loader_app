import { createBrowserRouter } from 'react-router-dom'
import { ErrorBoundary } from '../components/common/Errors/ErrorBoundary';
import { NotFound } from '../components/common/Errors/NotFound';
import { PrivateRoute } from '../components/common/PrivateRoute';

import { 
    PublicLayout, 
    HomeLayout, 
    DashboardLayout 
} from '../layouts';
import { Roles } from '../lib/constants/Roles';

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
                element: <PrivateRoute allowedRoles={[Roles.ADMIN]}  />,
                children: [
                    { index: true, element: <DashboardLayout /> }
                ]
            },
            {
                path: 'home',
                element: <PrivateRoute allowedRoles={[Roles.USER]}  />,
                children: [
                    { index: true, element: <HomeLayout /> }
                ]
            },
            {
                path: '*',
                element: <NotFound />
            }
        ]
    },
]);
