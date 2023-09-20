import { Outlet } from 'react-router-dom'
import './layout.css'
import Topbar from '../../components/Topbar/Topbar'
import Sidebar from '../../components/Sidebar/Sidebar'

const Layout = () => {
  return (
   < div>
        <Topbar />
        <div className="container">
          <Sidebar />
          <Outlet />
        </div>
      </div>
  )
}

export default Layout