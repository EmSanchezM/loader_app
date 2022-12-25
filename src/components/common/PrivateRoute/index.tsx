import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { Roles } from '../../../lib/constants/Roles'

type Props = {
    allowedRoles: Array<Roles>
}

export const PrivateRoute = ({ allowedRoles }: Props) => {
    const location = useLocation()

    return allowedRoles.includes(Roles.USER) ? <Outlet /> : <Navigate to='/' state={{ from: location }} />
}
