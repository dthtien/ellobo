import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Typography, Button, Grid } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { LoadingIndicator, AddressNamesSelector } from 'app-components';
import { isEmpty } from 'lodash';

// eslint-disable-next-line consistent-return
class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = { addresses: [] };
  }

  handleSelectChange = addresses => {
    this.setState({ addresses });
    return addresses;
  };

  defaultSuggestion = () => {
    const { suggestions } = this.props;
    return [suggestions.find(distr => distr.value === 'quan 1')];
  };

  handleSearch = e => {
    const { addresses } = this.state;
    const districtOne = this.defaultSuggestion();
    e.preventDefault();
    const searchingAddress = isEmpty(addresses) ? districtOne : addresses;
    this.props.onSearch(searchingAddress);
  };

  render() {
    const { error, loading, classes, suggestions } = this.props;

    if (loading) return <LoadingIndicator />;
    if (error) return <Typography variant="inherit">Server error</Typography>;
    if (suggestions) {
      const customStyles = {
        control: currentStyles => ({
          ...currentStyles,
          backgroundColor: 'white',
          border: 'none',
          ':focus': {
            border: 'none',
          },
        }),
      };

      return (
        <form onSubmit={this.handleSearch} className={classes.form}>
          <Grid container>
            <Grid item xs={10} md={11}>
              <AddressNamesSelector
                options={suggestions}
                customStyles={customStyles}
                defaultValue={this.defaultSuggestion()}
                handleSelectChange={this.handleSelectChange}
              />
            </Grid>
            <Grid xs={2} md={1} item className={classes.searchBtn}>
              <Button type="submit">
                <Search />
              </Button>
            </Grid>
          </Grid>
        </form>
      );
    }

    return null;
  }
}

SearchForm.propTypes = {
  error: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  suggestions: PropTypes.array,
  classes: PropTypes.object.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default SearchForm;
