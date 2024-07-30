import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import RegisterUser from './pages/RegisterUser'
import RegisterBooking from './pages/RegisterBooking'
import CancelBooking from './pages/CancelBooking'
import CancelNotification from './pages/CancelNotification'

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/register-user" element={<RegisterUser />} />
            <Route path="/register-booking" element={<RegisterBooking />} />
            <Route path="/cancel-booking" element={<CancelBooking />} />
            <Route path="/cancel-notification" element={<CancelNotification />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
