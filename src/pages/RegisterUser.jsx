import { useState } from 'react'
import { registerUser } from '../services/api'
import FilledInput from '@mui/material/FilledInput'
import Button from '@mui/material/Button'

const RegisterUser = () => {
   const [formData, setFormData] = useState({ name: '', email: '', phoneNumber: '' })

   const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value })
   }

   const handleSubmit = async (e) => {
      e.preventDefault()
      await registerUser(formData)
      alert('User registered successfully')
   }

   return (
      <div>
         <h1 className="text-2xl font-bold mb-6">Register User</h1>
         <form onSubmit={handleSubmit} className="space-y-4">
            <div>
               <label>Name</label>
               <FilledInput
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  fullWidth
               />
            </div>
            <div>
               <label>Email</label>
               <FilledInput
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  fullWidth
               />
            </div>
            <div>
               <label>Phone Number</label>
               <FilledInput
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  fullWidth
               />
            </div>
            <Button type="submit" variant="contained" color="primary">Register</Button>
         </form>
      </div>
   )
}

export default RegisterUser
