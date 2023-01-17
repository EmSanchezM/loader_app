import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { Roles } from '../../../lib/constants/Roles'
import useAuth from '../../../lib/hooks/auth/useAuth'

type Props = {
    allowedRoles: Roles[]
}

export const PrivateRoute = ({ allowedRoles }: Props) => {
    const location = useLocation()
    const { auth } = useAuth()

    return allowedRoles.includes(auth.user?.rol) ? <Outlet /> : <Navigate to='/' state={{ from: location }} />
}
