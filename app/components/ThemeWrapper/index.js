import React from 'react';
import PropTypes from 'prop-types';
import { MoveToInbox, Mail } from '@material-ui/icons';
import {
  Drawer,
  ListItemIcon,
  List,
  ListItem,
  ListItemText,
  Paper,
} from '@material-ui/core';

const ThemeWrapper = ({ openMenu, onCloseMenu, children, classes }) => (
  <Paper>
    {children}
    <Drawer open={openMenu} onClose={onCloseMenu}>
      <div className={classes.menu}>
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <MoveToInbox /> : <Mail />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  </Paper>
);

ThemeWrapper.propTypes = {
  openMenu: PropTypes.bool.isRequired,
  onCloseMenu: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  classes: PropTypes.object.isRequired,
};

export default ThemeWrapper;
