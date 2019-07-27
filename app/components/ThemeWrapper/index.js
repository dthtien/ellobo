import React from 'react';
import PropTypes from 'prop-types';
import { FeaturedPlayList, AccountBalance } from '@material-ui/icons';
import {
  Drawer,
  ListItemIcon,
  List,
  ListItem,
  ListItemText,
  Paper,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const ThemeWrapper = ({ openMenu, onCloseMenu, children, classes }) => (
  <Paper>
    {children}
    <Drawer open={openMenu} onClose={onCloseMenu}>
      <div className={classes.menu}>
        <List>
          <ListItem button component={Link} to="/" key="home">
            <ListItemIcon>
              <AccountBalance />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>

          <ListItem button component={Link} to="/features" key="features">
            <ListItemIcon>
              <FeaturedPlayList />
            </ListItemIcon>
            <ListItemText primary="Feature list" />
          </ListItem>
        </List>
      </div>
    </Drawer>
  </Paper>
);

ThemeWrapper.propTypes = {
  openMenu: PropTypes.bool.isRequired,
  onCloseMenu: PropTypes.func.isRequired,
  children: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
};

export default ThemeWrapper;
