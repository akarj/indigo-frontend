# Flight Notification System Frontend

This is the frontend application for the Flight Notification System. It is built using React, Vite, Tailwind CSS, and Material-UI.

## Features

- **Dashboard**: Displays the list of flights with their details.
- **Register User**: Allows registration of new users.
- **Register Booking**: Allows booking a flight for a registered user.
- **Cancel Booking**: Allows cancellation of an existing booking.
- **Cancel Notification**: Allows opting out of notifications for a flight.

## Folder Structure

```textplan
flight-notification-frontend/
├── src/
│ ├── assets/
│ ├── components/
│ │ ├── Dashboard.jsx
│ │ ├── RegisterUser.jsx
│ │ ├── RegisterBooking.jsx
│ │ ├── CancelBooking.jsx
│ │ ├── CancelNotification.jsx
│ │ └── Sidebar.jsx
│ ├── pages/
│ │ ├── Home.jsx
│ │ ├── UserRegistration.jsx
│ │ ├── BookingRegistration.jsx
│ │ ├── BookingCancellation.jsx
│ │ └── NotificationCancellation.jsx
│ ├── services/
│ │ ├── axiosInstance.js
│ │ ├── userService.js
│ │ ├── bookingService.js
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
├── .env
├── .eslintrc.json
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```
