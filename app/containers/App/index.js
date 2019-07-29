/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Footer from 'components/Footer';
import { Button, makeStyles, Container, Typography } from '@material-ui/core';
import { Dashboard } from '../pageListAsync';
import icon from '../../images/icon-512x512.png';

import GlobalStyle from '../../global-styles';
import ThemeWrapper from '../../components/ThemeWrapper';

const useStyles = makeStyles({
  root: {
    margin: '0 auto',
    display: 'flex',
    minHeight: '100%',
    padding: '0 16px',
    flexDirection: 'column',
  },
  menu: {
    width: 250,
  },
  iconImage: {
    width: 30,
    height: 30,
  },
  pageHeader: {
    textAlign: 'left',
    marginBottom: 7,
    marginLeft: 7,
    marginTop: 7,
    '& h5': {
      textTransform: 'capitalize',
      color: '#2296f3',
    },
  },
  homeButton: {
    '-webkit-transition': '-webkit-transform .4s ease-in-out',
    transition: 'transform .4s ease-in-out',
    '&:hover': {
      '-webkit-transform': 'rotate(360deg)',
      transform: 'rotate(360deg)',
    },
  },
});

export default function App() {
  const classes = useStyles();
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <ThemeWrapper
      openMenu={openMenu}
      onCloseMenu={() => setOpenMenu(false)}
      classes={classes}
    >
      <Helmet
        titleTemplate="Ellobo - Real estate market researcher"
        defaultTitle="Ellobo - Real estate market researcher"
      >
        <meta
          name="description"
          content="Ellobo - Real estate market researcher"
        />
      </Helmet>
      <div className={classes.pageHeader}>
        <Button
          color="primary"
          onClick={() => setOpenMenu(true)}
          className={classes.homeButton}
        >
          <img src={icon} alt="icon" className={classes.iconImage} />
          <Typography variant="h5">Ellobo</Typography>
        </Button>
      </div>
      <Container>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/features" component={FeaturePage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
      </Container>
      <Footer />
      <GlobalStyle />
    </ThemeWrapper>
  );
}
