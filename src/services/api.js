import apiClient from './apiClient';

// Fetch flight data
export const fetchFlightData = async () => {
   try {
      const response = await apiClient.get('/flights');
      return response.data;
   } catch (error) {
      console.error('Error fetching flight data:', error);
      throw error;
   }
};

// Register a user
export const registerUser = async (userData) => {
   try {
      const response = await apiClient.post('/users', userData);
      return response.data;
   } catch (error) {
      console.error('Error registering user:', error);
      throw error;
   }
};

// Register a booking
export const registerBooking = async (bookingData) => {
   try {
      const response = await apiClient.post('/bookings', bookingData);
      return response.data;
   } catch (error) {
      console.error('Error registering booking:', error);
      throw error;
   }
};

// Cancel a booking
export const cancelBooking = async (bookingId) => {
   try {
      const response = await apiClient.delete(`/bookings/${bookingId}`);
      return response.data;
   } catch (error) {
      console.error('Error canceling booking:', error);
      throw error;
   }
};

// Cancel notification
export const cancelNotification = async (bookingId) => {
   try {
      const response = await apiClient.patch(`/bookings/${bookingId}/cancel-notification`);
      return response.data;
   } catch (error) {
      console.error('Error canceling notification:', error);
      throw error;
   }
};
