import { useState } from 'react'
import { cancelNotification } from '../services/api'
import FilledInput from '@mui/material/FilledInput'
import Button from '@mui/material/Button'

const CancelNotification = () => {
   const [bookingId, setBookingId] = useState('')

   const handleChange = (e) => {
      setBookingId(e.target.value)
   }

   const handleSubmit = async (e) => {
      e.preventDefault()
      await cancelNotification(bookingId)
      alert('Notification cancelled successfully')
   }

   return (
      <div>
         <h1 className="text-2xl font-bold mb-6">Cancel Notification</h1>
         <form onSubmit={handleSubmit} className="space-y-4">
            <div>
               <label>Booking ID</label>
               <FilledInput
                  type="text"
                  value={bookingId}
                  onChange={handleChange}
                  fullWidth
               />
            </div>
            <Button type="submit" variant="contained" color="secondary">Cancel Notification</Button>
         </form>
      </div>
   )
}

export default CancelNotification
