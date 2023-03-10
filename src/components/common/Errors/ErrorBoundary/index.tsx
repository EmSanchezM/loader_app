import { useRouteError, isRouteErrorResponse } from 'react-router-dom'
import { NotFound } from '../NotFound'
import { Unauthorized } from '../Unauthorized'
import { Unavailable } from '../Unavailable'

export const ErrorBoundary = () => {
    const error = useRouteError()

    if (isRouteErrorResponse(error)) {
        if (error.status === 404) return <NotFound />

        if(error.status === 401) return <Unauthorized />

        if(error.status === 503) return <Unavailable />
    }
    
    return (
        <div>
            <h1>Something went wrong</h1>
        </div>
    )
}
