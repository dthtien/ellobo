/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable prettier/prettier */
/* eslint-disable import/no-unresolved */
/* eslint-disable quotes */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { makeStyles } from '@material-ui/core';
import { CompossedLineBarArea } from 'components';
import reducer, {
  addressesSelector,
  saga,
  index,
  addressNamesSelector,
  getAddressNames,
} from './duck';
import styles from './styles';
import SearchForm from './SearchForm';

const key = 'dashboard';

export function Dashboard({
  addresses,
  getAddresses,
  addressNames,
  // eslint-disable-next-line no-shadow
  getAddressNames,
  history,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    if (!addresses.data) {
      getAddresses();
    }

    if (!addressNames.data) {
      getAddressNames();
    }
  }, []);

  const handleSearch = (searchingAddresses) => {
    const searchingAddressName = searchingAddresses.map(({value}) => value)
    getAddresses({ address_names: searchingAddressName });
  }

  const useStyles = makeStyles(styles);

  const { data: names, loading, error } = addressNames;
  const classes = useStyles();
  let suggestions;
  if (names) {
    suggestions = names.data.map(({ attributes }) => ({
      label: attributes.name,
      value: attributes.alias_name,
    }));
  }
  return (
    <div>
      <SearchForm
        {...{
          error, names, loading, classes, suggestions, onSearch: handleSearch
        }}
      />
      <CompossedLineBarArea addresses={addresses} history={history} />
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  getAddresses: bindActionCreators(index, dispatch),
  getAddressNames: bindActionCreators(getAddressNames, dispatch),
});

const mapStateToProps = createStructuredSelector({
  addresses: addressesSelector(),
  addressNames: addressNamesSelector(),
});

Dashboard.propTypes = {
  getAddresses: PropTypes.func.isRequired,
  addresses: PropTypes.object.isRequired,
  getAddressNames: PropTypes.func.isRequired,
  addressNames: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Dashboard);
