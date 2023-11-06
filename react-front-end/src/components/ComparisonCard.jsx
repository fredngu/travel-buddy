import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

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
  const tripList = allTrips.map((trip) => {
    if (trips.includes(trip['trip_id'])) {
      return trip;
    }
    return false
  });
  console.log(tripList);
  return tripList;
}

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function ComparisonCard(props) {
  const { comparison, allTrips } = props;
  console.log(comparison)
  const compareTrips = getComparisonList(comparison);
  const tripList = getComparisonTrip(compareTrips, allTrips);
  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <h1>{comparison?.comparison_name}</h1>
          <Demo>
            <List>
              {tripList.map((trip, idx) => {
                return (
                  <ListItem key={idx}>
                    <ListItemText
                      primary={trip['trip_name']}
                      secondary={trip['city_name']}
                    />
                  </ListItem>
                );
              })}
            </List>
          </Demo>
        </Grid>
      </Grid>
    </Box>
  );
}