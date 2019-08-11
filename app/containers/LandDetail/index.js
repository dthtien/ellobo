/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { LoadingIndicator } from 'components';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';
import numeral from 'numeral';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import {
  Typography,
  Grid,
  CardContent,
  withStyles,
  Card,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';
import reducer, { landSelector, saga, getLand } from './duck';
import styles from './styles';
import { Chart } from '../../components';

class LandDetail extends Component {
  componentDidMount() {
    const {
      match: { params },
      // eslint-disable-next-line no-shadow
      getLand,
    } = this.props;

    getLand(params);
  }

  renderHistoryPricesChart = () => {
    const { land: { data }, classes } = this.props;

    const { attributes } = data;
    const { history_prices: historyPrices } = attributes;


    if (historyPrices.length) {
      const prices = historyPrices.map(price => ({
        name: price.posted_date,
        avgPrice: price.square_meter_price,
      }));

      return <Chart data={prices} />;
    } else {
      <Typography variant="inherit">
        No history prices
      </Typography>
    }
  };

  renderHistoryPricesTable = () => {
    const { land: { data }, classes } = this.props;

    const { attributes } = data;
    const { history_prices: historyPrices } = attributes;


    if (historyPrices.length > 0 ) {
      return(
        <Table className={classes.priceHistoriesTable}>
          <TableHead>
            <TableRow>
              <TableCell>Total Price</TableCell>
              <TableCell>Posted date</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {
              historyPrices.map((price, index) => (
                <TableRow key={'price-' + index}>
                  <TableCell>
                    <Typography variant="h6">
                      {numeral(price.total_price).format('0,0')} VND
                    </Typography>
                    <Typography
                      className={classes.title}
                      color="textSecondary"
                      variant="inherit"
                    >
                      {numeral(price.square_meter_price).format('0,0')}{' '}
                      VND/m²
                    </Typography>
                  </TableCell>
                  <TableCell>
                    {price.posted_date}
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      )
    } else {
      <Typography variant="inherit">
        No history prices
      </Typography>
    }
  };

  render() {
    const {
      land: { data, loading, error },
      classes,
    } = this.props;

    if (loading) return <LoadingIndicator />;

    if (error) return <Typography color="error">Server Error!</Typography>;

    if (data) {
      const { attributes } = data;
      const { history_prices: historyPrices } = attributes;

      return (
        <>
          <Helmet>
            <title>{attributes.title}</title>
            <meta name="description" content={attributes.title} />
          </Helmet>
          <Grid container>
            <Grid item xs={8}>
              <Typography variant="h5" className={classes.districtName}>
                {attributes.title}
              </Typography>
              {
                this.renderHistoryPricesChart()
              }
            </Grid>
            <Grid item xs={4}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography variant="h6">
                    {numeral(attributes.total_price).format('0,0')} VND
                  </Typography>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    variant="inherit"
                  >
                    {numeral(attributes.square_meter_price).format('0,0')}{' '}
                    VND/m²
                  </Typography>
                  <hr />
                  <Typography variant="h5">{attributes.p}</Typography>
                  <Typography className={classes.title} variant="h6">
                    <span color="grey">Acreage: </span>
                    {attributes.acreage} m²
                  </Typography>
                </CardContent>
              </Card>
              { this.renderHistoryPricesTable() }
            </Grid>
          </Grid>
          <Grid container className={classes.descriptionArea}>
            <Typography variant="inherit">{attributes.description}</Typography>
          </Grid>
        </>
      );
    }

    return <Typography color="error">No data found!</Typography>;
  }
}

LandDetail.propTypes = {
  land: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  getLand: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

const key = 'landReducer';

const mapStateToProps = createStructuredSelector({
  land: landSelector(),
});

function mapDispatchToProps(dispatch) {
  return {
    getLand: bindActionCreators(getLand, dispatch),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withSaga = injectSaga({ key, saga });
const withReducer = injectReducer({ key, reducer });

export default compose(
  withSaga,
  withReducer,
  withConnect,
  withStyles(styles),
)(LandDetail);
