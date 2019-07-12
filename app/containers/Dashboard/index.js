/* eslint-disable import/no-unresolved */
/* eslint-disable quotes */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import CompossedLineBarArea from './CompossedLineBarArea';
import reducer, { addressesSelector, saga, index } from './duck';
const key = 'dashboard';

export function Dashboard({ addresses, getAddresses }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    if (!addresses.data) {
      getAddresses();
    }
  }, []);

  return (
    <div>
      <CompossedLineBarArea addresses={addresses} />
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  getAddresses: (params = {}) => dispatch(index(params)),
});

const mapStateToProps = createStructuredSelector({
  addresses: addressesSelector(),
});

Dashboard.propTypes = {
  getAddresses: PropTypes.func.isRequired,
  addresses: PropTypes.object.isRequired,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Dashboard);
