import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Button, Grid } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { LoadingIndicator, AddressNamesSelector } from 'app-components';

// eslint-disable-next-line consistent-return
const SearchForm = ({ error, loading, classes, suggestions }) => {
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
      <form onSubmit={e => e.preventDefault()} className={classes.form}>
        <Grid container>
          <Grid item xs={11}>
            <AddressNamesSelector
              options={suggestions}
              customStyles={customStyles}
              defaultValue={[suggestions[0]]}
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
};

SearchForm.propTypes = {
  error: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  suggestions: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
};

export default SearchForm;
