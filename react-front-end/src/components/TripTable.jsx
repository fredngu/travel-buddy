import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function BasicTable(props) {
  const {trips} = props
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">TRIP NAME</TableCell>
            <TableCell align="center">DATE</TableCell>
            <TableCell align="center">LOCATION</TableCell>
            <TableCell align="center">DURATION</TableCell>
            <TableCell align="center">FLIGHT AVERAGE</TableCell>
            <TableCell align="center">HOTEL AVERAGE</TableCell>
            <TableCell align="center">NOTES</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {trips.map((trip) => (
            <TableRow
              key={trip.trip_name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {trip.trip_name}
              </TableCell>
              <TableCell align="center">{trip.start_date}</TableCell>
              <TableCell align="center">{trip.city_name}</TableCell>
              <TableCell align="center">{trip.end_date}</TableCell>
              <TableCell align="center">{trip.flight_lowest}</TableCell>
              <TableCell align="center">{trip.hotel_lowest}</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}