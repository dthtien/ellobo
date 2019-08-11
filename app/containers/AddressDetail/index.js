// eslint-disable-next-line import/order
/* eslint-disable import/no-unresolved */
/**
 *
 * AddressDetail
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import { Typography, withStyles } from '@material-ui/core';
import { CompossedLineBarArea, LoadingIndicator } from 'components';
import reducer, { addressSelector, saga, getAddress } from './duck';
import styles from './styles';
import { InformationGroup } from './components';
const key = 'addressDetail';

export function AddressDetail({
  classes,
  // eslint-disable-next-line no-shadow
  getAddress,
  address,
  match,
  history,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    getAddress(match.params.id);
  }, []);

  const { data, loading, error } = address;

  if (loading) return <LoadingIndicator />;

  if (error) return <Typography variant="h6">Server Error!</Typography>;

  if (data) {
    const { attributes } = data;
    const addresses = {
      data: attributes.sub_addresses,
      loading,
      error,
    };
    const handleOnClickChart = slug => {
      history.push(`/addresses/${slug}`);
      getAddress(slug);
    };

    return (
      <div>
        <Helmet>
          <title>AddressDetail</title>
          <meta name="description" content="Description of AddressDetail" />
        </Helmet>
        <div className={classes.root}>
          <InformationGroup
            classes={classes}
            landCounts={attributes.land_counts}
            averagePrice={attributes.average_price}
            name={attributes.name}
            slug={attributes.slug}
          />
          <CompossedLineBarArea
            addresses={addresses}
            handleOnClickChart={handleOnClickChart}
          />
        </div>
      </div>
    );
  }

  return <Typography variant="h6">No data found</Typography>;
}

AddressDetail.propTypes = {
  classes: PropTypes.object.isRequired,
  getAddress: PropTypes.func.isRequired,
  address: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  address: addressSelector(),
});

function mapDispatchToProps(dispatch) {
  return {
    getAddress: bindActionCreators(getAddress, dispatch),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withStyle = withStyles(styles);

export default compose(
  withStyle,
  withConnect,
)(AddressDetail);
