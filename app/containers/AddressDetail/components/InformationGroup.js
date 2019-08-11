import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Card, CardContent, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import numeral from 'numeral';

const InformationGroup = ({
  classes,
  averagePrice,
  landCounts,
  name,
  slug,
}) => (
  <Grid container>
    <Grid item xs={4}>
      <Typography variant="h4" className={classes.districtName}>
        {name}
      </Typography>
    </Grid>
    <Grid item xs={8} className={classes.informationGroup}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h6">
            {numeral(averagePrice).format('0,0')} VND/m²
          </Typography>
          <Typography
            className={classes.title}
            color="textSecondary"
            variant="h5"
          >
            Average price
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5">{landCounts}</Typography>
          <Link to={`/addresses/${slug}/lands`}>
            <Typography
              className={classes.title}
              color="textSecondary"
              variant="h5"
            >
              Selling lands
            </Typography>
          </Link>
        </CardContent>
      </Card>
    </Grid>
  </Grid>
);

InformationGroup.propTypes = {
  classes: PropTypes.object.isRequired,
  averagePrice: PropTypes.number.isRequired,
  landCounts: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default InformationGroup;
