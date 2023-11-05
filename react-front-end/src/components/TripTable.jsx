import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import moment from 'moment';

export default function BasicTable(props) {
  const {trips} = props
  const start_date = moment(trips[0].start_date).utc().format('YYYY-MM-DD, h:mm:ss a')
  const end_date = moment(trips[0].end_date).utc().format('YYYY-MM-DD, h:mm:ss a')
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">TRIP NAME</TableCell>
            <TableCell align="center">DESTINATION</TableCell>
            <TableCell align="center">START DATE</TableCell>
            <TableCell align="center">END DATE</TableCell>
            <TableCell align="center">FLIGHT PRICE</TableCell>
            <TableCell align="center">HOTEL NAME</TableCell>
            <TableCell align="center">HOTEL PRICE RANGE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {trips.map((trip) => (
            <TableRow
              key={trip.trip_name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {trip.trip_name}
              </TableCell>
              <TableCell align="center">{trip.city_name}</TableCell>
              <TableCell align="center">{start_date}</TableCell>
              <TableCell align="center">{end_date}</TableCell>
              <TableCell align="center">${trip.flight_price}</TableCell>
              <TableCell align="center">{trip.hotel_name}</TableCell>
              <TableCell align="center">{trip.hotel_price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}