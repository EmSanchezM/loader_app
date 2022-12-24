import { createBrowserRouter } from 'react-router-dom'
import { ErrorBoundary } from '../components/ErrorBoundary';

import { PublicLayout} from '../layouts/PublicLayout';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <PublicLayout />,
        errorElement: <ErrorBoundary />,
    },
]);
