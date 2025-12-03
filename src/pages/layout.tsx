import { Outlet } from 'react-router'

export default function Layout() {
  return (
    <main style={{ padding: '1rem 0' }}>
      <Outlet />
    </main>
  )
}
