import { useState } from 'react'
import { cancelBooking } from '../services/api'
import FilledInput from '@mui/material/FilledInput'
import Button from '@mui/material/Button'

const CancelBooking = () => {
   const [bookingId, setBookingId] = useState('')

   const handleChange = (e) => {
      setBookingId(e.target.value)
   }

   const handleSubmit = async (e) => {
      e.preventDefault()
      await cancelBooking(bookingId)
      alert('Booking cancelled successfully')
   }

   return (
      <div>
         <h1 className="text-2xl font-bold mb-6">Cancel Booking</h1>
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
            <Button type="submit" variant="contained" color="secondary">Cancel Booking</Button>
         </form>
      </div>
   )
}

export default CancelBooking
