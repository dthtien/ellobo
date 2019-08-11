/* eslint-disable consistent-return */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { LoadingIndicator } from 'components';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import {
  Typography,
  Table,
  TableBody,
  TablePagination,
  TableRow,
} from '@material-ui/core';
import reducer, { landsSelector, saga, getLands } from './duck';
import { ListHeader } from './components';
import ItemDetail from './components/ItemDetail';

class Lands extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 0,
    };
  }

  componentDidMount() {
    const {
      // eslint-disable-next-line no-shadow
      getLands,
      match: { params },
    } = this.props;

    getLands(params);
  }

  handleChangePage = (_, page) => {
    this.setState({ page });
    const {
      // eslint-disable-next-line no-shadow
      getLands,
      match: { params },
    } = this.props;

    getLands({ ...params, page });
  };

  renderLandList = () => {
    const {
      lands: { data, error, loading },
    } = this.props;

    if (error) {
      return (
        <Typography variant="h5" color="error">
          Server Error!
        </Typography>
      );
    }

    if (loading) return <LoadingIndicator />;

    if (data) {
      const { total_count: count, lands } = data;
      const { page } = this.state;

      return (
        <Table>
          <ListHeader />
          <TableBody>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={false}
                count={count}
                rowsPerPage={25}
                page={page}
                onChangePage={this.handleChangePage}
              />
            </TableRow>
            {lands.data.map(({ attributes }, index) => (
              <ItemDetail
                key={attributes.id}
                attributes={attributes}
                index={index}
              />
            ))}
          </TableBody>
        </Table>
      );
    }
  };

  render() {
    return (
      <div>
        <Helmet>
          <title>Lands</title>
          <meta name="description" content="Lands" />
        </Helmet>
        <div>{this.renderLandList()}</div>
      </div>
    );
  }
}

Lands.propTypes = {
  lands: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  getLands: PropTypes.func.isRequired,
};

const key = 'landsReducer';

const mapStateToProps = createStructuredSelector({
  lands: landsSelector(),
});

function mapDispatchToProps(dispatch) {
  return {
    getLands: bindActionCreators(getLands, dispatch),
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
)(Lands);
