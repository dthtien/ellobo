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
import {
  Search,
  ShowChartOutlined,
  FindInPageOutlined,
  Gradient,
  Build,
  Done,
} from '@material-ui/icons';
import styles from './styles';

const FeaturePage = ({ classes }) => (
  <div>
    <Helmet>
      <title>Feature Page</title>
      <meta name="description" content="Ellobo - Todo list" />
    </Helmet>
    <H1> Features </H1>
    <List>
      <ListItem className={classes.listItem}>
        <ListItemIcon className={classes.commpleteText}>
          <ShowChartOutlined />
        </ListItemIcon>
        <ListItemText className={classes.commpleteText}>Chart</ListItemText>
        <ListItemIcon className={classes.commpleteText}>
          <Done />
        </ListItemIcon>
      </ListItem>

      <ListItem className={classes.listItem}>
        <ListItemIcon className={classes.commpleteText}>
          <Search />
        </ListItemIcon>
        <ListItemText className={classes.commpleteText}>Search</ListItemText>
        <ListItemIcon className={classes.commpleteText}>
          <Done />
        </ListItemIcon>
      </ListItem>

      <ListItem className={classes.listItem}>
        <ListItemIcon className={classes.commpleteText}>
          <FindInPageOutlined />
        </ListItemIcon>
        <ListItemText className={classes.commpleteText}>
          Search with mix
        </ListItemText>
        <ListItemIcon className={classes.commpleteText}>
          <Done />
        </ListItemIcon>
      </ListItem>

      <ListItem className={classes.listItem}>
        <ListItemIcon className={classes.commpleteText}>
          <Gradient />
        </ListItemIcon>
        <ListItemText className={classes.commpleteText}>
          Real estate detail page
        </ListItemText>
        <ListItemIcon className={classes.commpleteText}>
          <Done />
        </ListItemIcon>
      </ListItem>

      <ListItem className={classes.listItem}>
        <ListItemIcon className={classes.processingText}>
          <Build />
        </ListItemIcon>
        <ListItemText className={classes.processingText}>
          Prediction
        </ListItemText>
      </ListItem>

      <ListItem className={classes.listItem}>
        <ListItemText>...</ListItemText>
      </ListItem>
    </List>
  </div>
);

FeaturePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FeaturePage);
