import { Outlet } from 'react-router-dom'

export const HomeLayout = () => {
  return (
    <>
      <h1>HomeLayout</h1>
      <main>
        <Outlet />
      </main>
    </>
  )
}

