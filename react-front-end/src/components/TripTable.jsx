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
  const { trips } = props;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, fontSize: '1.2rem' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={{ fontSize: '1.4rem' }}>
              TRIP NAME
            </TableCell>
            <TableCell align="center" sx={{ fontSize: '1.4rem' }}>
              DESTINATION
            </TableCell>
            <TableCell align="center" sx={{ fontSize: '1.4rem' }}>
              START DATE
            </TableCell>
            <TableCell align="center" sx={{ fontSize: '1.4rem' }}>
              END DATE
            </TableCell>
            <TableCell align="center" sx={{ fontSize: '1.4rem' }}>
              FLIGHT PRICE
            </TableCell>
            <TableCell align="center" sx={{ fontSize: '1.4rem' }}>
              HOTEL NAME
            </TableCell>
            <TableCell align="center" sx={{ fontSize: '1.4rem' }}>
              HOTEL PRICE RANGE
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {trips.map((trip) => (
            <TableRow
              key={trip.trip_id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                align="center"
                sx={{ fontSize: '1.2rem' }}
              >
                {trip.trip_name}
              </TableCell>
<<<<<<< HEAD
              <TableCell align="center" sx={{ fontSize: '1.2rem' }}>
                {trip.city_name}
              </TableCell>
              <TableCell align="center" sx={{ fontSize: '1.2rem' }}>
                {moment(trip?.start_date).utc().format('YYYY-MM-DD, h:mm a')}
              </TableCell>
              <TableCell align="center" sx={{ fontSize: '1.2rem' }}>
                {moment(trip?.end_date).utc().format('YYYY-MM-DD, h:mm a')}
              </TableCell>
              <TableCell align="center" sx={{ fontSize: '1.2rem' }}>
                ${trip.flight_price}
              </TableCell>
              <TableCell align="center" sx={{ fontSize: '1.2rem' }}>
                {trip.hotel_name}
              </TableCell>
              <TableCell align="center" sx={{ fontSize: '1.2rem' }}>
                {trip.hotel_price}
              </TableCell>
=======
              <TableCell align="center">{trip.city_name}</TableCell>
              <TableCell align="center">{moment(trip?.start_date).utc().format('YYYY-MM-DD, hh:mm a')}</TableCell>
              <TableCell align="center">{moment(trip?.end_date).utc().format('YYYY-MM-DD, hh:mm a')}</TableCell>
              <TableCell align="center">${trip.flight_price}</TableCell>
              <TableCell align="center">{trip.hotel_name}</TableCell>
              <TableCell align="center">{trip.hotel_price}</TableCell>
>>>>>>> b6660f56076f9c9462e80d797dbc69866b74cbcd
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
