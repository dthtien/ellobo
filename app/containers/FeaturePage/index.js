/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';

import H1 from 'components/H1';
import {
  withStyles,
  ListItemIcon,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { Done, Settings, TouchApp } from '@material-ui/icons';
import styles from './styles';

const FeaturePage = ({ classes }) => (
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
        <ListItemIcon className={classes.commpleteText}>
          <Done />
        </ListItemIcon>
        <ListItemText className={classes.commpleteText}>Chart</ListItemText>
      </ListItem>

      <ListItem>
        <ListItemIcon className={classes.commpleteText}>
          <Done />
        </ListItemIcon>
        <ListItemText className={classes.commpleteText}>Search</ListItemText>
      </ListItem>

      <ListItem>
        <ListItemIcon className={classes.processingText}>
          <Settings />
        </ListItemIcon>
        <ListItemText className={classes.processingText}>
          Search with mix
        </ListItemText>
      </ListItem>

      <ListItem>
        <ListItemIcon className={classes.researchingText}>
          <TouchApp />
        </ListItemIcon>
        <ListItemText className={classes.researchingText}>
          Prediction
        </ListItemText>
      </ListItem>

      <ListItem>
        <ListItemText>...</ListItemText>
      </ListItem>
    </List>
  </div>
);

FeaturePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FeaturePage);
