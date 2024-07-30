import { useState } from 'react'
import { registerBooking } from '../services/api'
import FilledInput from '@mui/material/FilledInput'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import Button from '@mui/material/Button'

const RegisterBooking = () => {
   const [formData, setFormData] = useState({ userId: '', flightId: '', bookingDate: '', emailNotification: false })

   const handleChange = (e) => {
      const { name, value, type, checked } = e.target
      setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value })
   }

   const handleSubmit = async (e) => {
      e.preventDefault()
      await registerBooking(formData)
      alert('Booking registered successfully')
   }

   return (
      <div>
         <h1 className="text-2xl font-bold mb-6">Register Booking</h1>
         <form onSubmit={handleSubmit} className="space-y-4">
            <div>
               <label>User ID</label>
               <FilledInput
                  type="text"
                  name="userId"
                  value={formData.userId}
                  onChange={handleChange}
                  fullWidth
               />
            </div>
            <div>
               <label>Flight ID</label>
               <FilledInput
                  type="text"
                  name="flightId"
                  value={formData.flightId}
                  onChange={handleChange}
                  fullWidth
               />
            </div>
            <div>
               <label>Booking Date</label>
               <FilledInput
                  type="datetime-local"
                  name="bookingDate"
                  value={formData.bookingDate}
                  onChange={handleChange}
                  fullWidth
               />
            </div>
            <FormControlLabel
               control={
                  <Checkbox
                     name="emailNotification"
                     checked={formData.emailNotification}
                     onChange={handleChange}
                  />
               }
               label="Opt-in for Email Notification"
            />
            <Button type="submit" variant="contained" color="primary">Register</Button>
         </form>
      </div>
   )
}

export default RegisterBooking
