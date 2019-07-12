/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';

import H1 from 'components/H1';
import { Typography } from '@material-ui/core';
import List from './List';
import ListItem from './ListItem';
import ListItemTitle from './ListItemTitle';

export default function FeaturePage() {
  return (
    <div>
      <Helmet>
        <title>Feature Page</title>
        <meta
          name="description"
          content="Feature page of React.js Boilerplate application"
        />
      </Helmet>
      <H1> Features </H1>
      <List>
        <ListItem>
          <ListItemTitle>
            <Typography variant="h6">Chart</Typography>
          </ListItemTitle>
        </ListItem>

        <ListItem>
          <ListItemTitle>
            <Typography variant="h6">Search</Typography>
          </ListItemTitle>
        </ListItem>

        <ListItem>
          <ListItemTitle>
            <Typography variant="h6">Search with mix</Typography>
          </ListItemTitle>
        </ListItem>

        <ListItem>
          <ListItemTitle>
            <Typography variant="h6">Prediction</Typography>
          </ListItemTitle>
        </ListItem>

        <ListItem>
          <ListItemTitle>
            <Typography variant="h6">...</Typography>
          </ListItemTitle>
        </ListItem>
      </List>
    </div>
  );
}
