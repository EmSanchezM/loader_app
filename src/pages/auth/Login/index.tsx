import { NavigateFunction, useNavigate } from "react-router-dom"
import { Roles } from "../../../lib/constants/Roles"
import useAuth from "../../../lib/hooks/auth/useAuth"
import { AuthUser } from "../../../lib/interfaces/auth/authUser"

export const Login = () => {
  const navigate: NavigateFunction = useNavigate()
  const { setAuth } = useAuth()

  const handleOnLoginAdmin = () => {
    const adminUser: AuthUser = {
      accessToken: 'asasxzdewoiwniewneiowneiwo1212',
      user: {
        username: 'admin01',
        email: 'admin01@gmail.com',
        rol: Roles.ADMIN
      }
    }

    setAuth(adminUser);

    if (adminUser.user?.rol === 'ADMIN') navigate('dashboard', { replace: true });
  }

  const handleOnLoginUser = () => {
    const normalUser: AuthUser = {
      accessToken: 'asasxzdewoiwniewneiowneiwo1212',
      user: {
        username: 'user01',
        email: 'user01@gmail.com',
        rol: Roles.USER
      }
    }

    setAuth(normalUser);

    if (normalUser.user.rol === 'USER') navigate('home', { replace: true });
  }

  return (
    <div>
      <h1 className='text-3xl font-bold underline'>Login</h1>
      <section className="flex gap-2 mt-3">
      <button onClick={handleOnLoginAdmin} className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>Login with Admin</button>
      <button onClick={handleOnLoginUser} className='bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded'>Login with User</button>
    
      </section>
      </div>
  )
}
