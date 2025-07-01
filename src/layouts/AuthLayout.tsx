import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
  return (
    <div>
        <p>AuthLayout</p>
        <Outlet />
    </div>
  )
}
