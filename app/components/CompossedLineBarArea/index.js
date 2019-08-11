import React from 'react';
import PropTypes from 'prop-types';
import { Typography, withStyles } from '@material-ui/core';
import LoadingIndicator from '../LoadingIndicator';
import Chart from './Chart';

const styles = {
  chartFluid: {
    width: '100%',
    minWidth: 500,
    height: 450,
    overflowX: 'scroll',
    overflowY: 'scroll',
  },
};

function CompossedLineBarArea(props) {
  const {
    classes,
    addresses: { data, error, loading },
    handleOnClickChart,
  } = props;

  if (loading) return <LoadingIndicator />;

  if (error) {
    return <Typography variant="subtitle1">Server error!</Typography>;
  }
  if (data) {
    const dataGraph = data.map(value => {
      return {
        name: value.attributes.name,
        avgPrice: value.attributes.average_price,
        slug: value.attributes.slug,
      };
    });

    return (
      <Chart
        data={dataGraph}
        handleOnClickChart={handleOnClickChart}
      />
    );
  }

  return <Typography variant="h6">No data found!</Typography>;
}



CompossedLineBarArea.propTypes = {
  classes: PropTypes.object.isRequired,
  addresses: PropTypes.object.isRequired,
  handleOnClickChart: PropTypes.func.isRequired,
};

const withStyle = withStyles(styles);

export default withStyle(CompossedLineBarArea);
