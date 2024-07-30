import { Link } from 'react-router-dom'

const Sidebar = () => {
   return (
      <div className="w-64 h-screen bg-gray-800 text-white flex flex-col">
         <div className="p-6 text-2xl font-bold">Navigation</div>
         <nav className="flex flex-col p-6">
            <Link to="/" className="mb-4 hover:underline">Dashboard</Link>
            <Link to="/register-user" className="mb-4 hover:underline">Register User</Link>
            <Link to="/register-booking" className="mb-4 hover:underline">Register Booking</Link>
            <Link to="/cancel-booking" className="mb-4 hover:underline">Cancel Booking</Link>
            <Link to="/cancel-notification" className="mb-4 hover:underline">Cancel Notification</Link>
         </nav>
      </div>
   )
}

export default Sidebar
