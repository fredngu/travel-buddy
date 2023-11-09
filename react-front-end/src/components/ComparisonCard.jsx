import * as React from 'react';
import { useState } from 'react';
import TripTable from './TripTable';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Typography, IconButton, Dialog, Card, CardHeader, CardContent } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';

//retrieve all the trips in the comparison
function getComparisonList(comparisons) {
  const comparisonTrips = comparisons;
  const tripList = [];
  for (const trip in comparisonTrips) {
    if (trip.includes('trip')) {
      tripList.push(comparisonTrips[trip]);
    }
  }
  return tripList;
}

//compare the comparison trips with all the trips and return the info of the trips
function getComparisonTrip(trips, allTrips) {
  console.log(trips);
  console.log(allTrips);
  const tripList = allTrips.filter((trip) => {
    return trips.includes(trip['trip_id'])
  });
  console.log(tripList);
  return tripList;
}

export default function ComparisonCard(props) {
  const { comparison, allTrips } = props;
  console.log(comparison);
  const compareTrips = getComparisonList(comparison);
  const tripList = getComparisonTrip(compareTrips, allTrips);
  console.log(tripList)
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  return (
    <div>
      <Card sx={{ fontSize: '1.4rem' }}>
        <CardHeader
          title={comparison?.comparison_name}
          sx={{ fontSize: '1.6rem' }}
        />
        <CardContent>
          <List>
            {tripList.map((trip, idx) => (
              <ListItem key={idx}>
                <ListItemText
                  primary={trip['trip_name']}
                  secondary={trip['city_name']}
                  sx={{ fontSize: '1.4rem' }}
                />
              </ListItem>
            ))}
          </List>
        </CardContent>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton onClick={handleOpen}>
            <Typography variant="srOnly">
              View Details
            </Typography>
          </IconButton>
        </div>
      </Card>
      <Dialog open={open} onClose={handleClose} sx={{ width: '100vw', height: '100vh' }}>
        <DialogTitle>
          {comparison?.comparison_name}
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
            sx={{ position: 'absolute', top: 0, right: 0 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            <TripTable trips={tripList} />
          </Typography>
        </DialogContent>
      </Dialog>

    </div>
  );
}