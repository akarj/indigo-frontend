import { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { fetchFlightData } from '../services/api'

const Dashboard = () => {
   const [flightData, setFlightData] = useState([])

   useEffect(() => {
      const getData = async () => {
         const data = await fetchFlightData()
         setFlightData(data)
      }
      getData()
   }, [])

   const columns = [
      { field: 'flightId', headerName: 'Flight Id', width: 150 },
      { field: 'departureAirport', headerName: 'Departure Airport', width: 200 },
      { field: 'arrivingAirport', headerName: 'Arrival Airport', width: 200 },
      {
         field: 'departureTime',
         headerName: 'Departure Time',
         width: 200,
         valueGetter: (params) =>
            params.row.tentativeDepartureTime || params.row.departureTime,
      },
      {
         field: 'status',
         headerName: 'Status',
         width: 150,
         valueGetter: (params) =>
            params.row.flightCancelled ? 'Cancelled' : (new Date(params.row.tentativeDepartureTime) - new Date(params.row.departureTime) > 0 ? 'Delayed' : 'On Time'),
      },
      { field: 'terminal', headerName: 'Terminal', width: 150 },
   ]

   return (
      <div>
         <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
         <div style={{ height: 400, width: '100%' }}>
            <DataGrid rows={flightData} columns={columns} pageSize={10} />
         </div>
      </div>
   )
}

export default Dashboard
