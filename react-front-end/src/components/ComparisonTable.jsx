import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function BasicTable(props) {
  const {comparisons} = props
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">COMPARISON NAME</TableCell>
            <TableCell align="center">TRIP 1</TableCell>
            <TableCell align="center">TRIP 2</TableCell>
            <TableCell align="center">TRIP 3</TableCell>
            <TableCell align="center">TRIP 4</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {comparisons.map((comparison) => (
            <TableRow
              key={comparison.comparison_id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {comparison.comparison_name}
              </TableCell>
              <TableCell align="center">{comparison.trip1}</TableCell>
              <TableCell align="center">{comparison.trip2}</TableCell>
              <TableCell align="center">{comparison.trip3}</TableCell>
              <TableCell align="center">{comparison.trip4}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}