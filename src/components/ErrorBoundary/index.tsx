import { useRouteError, isRouteErrorResponse } from 'react-router-dom'
import { NotFound } from '../NotFound'

export const ErrorBoundary = () => {
    const error = useRouteError()

    if (isRouteErrorResponse(error)) {
        if (error.status === 404) return <NotFound />

        if(error.status === 401) return <div>You aren't authorized to see this</div>

        if(error.status === 503) return <div>Looks like our API is down</div>
    }
    
    return (
        <div>
            <h1>Something went wrong</h1>
        </div>
    )
}
