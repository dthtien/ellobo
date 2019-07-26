import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Typography, Button, Grid } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { LoadingIndicator, AddressNamesSelector } from 'app-components';

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

  handleSearch = e => {
    const { addresses } = this.state;
    e.preventDefault();
    this.props.onSearch(addresses);
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
            <Grid item xs={11}>
              <AddressNamesSelector
                options={suggestions}
                customStyles={customStyles}
                defaultValue={[suggestions[0]]}
                handleSelectChange={this.handleSelectChange}
              />
            </Grid>
            <Grid xs={1} item className={classes.searchBtn}>
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
