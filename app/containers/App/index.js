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
import { Button, makeStyles, Container } from '@material-ui/core';
import { Dashboard } from '../pageListAsync';

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
      <Button
        variant="contained"
        color="primary"
        onClick={() => setOpenMenu(true)}
      >
        Open
      </Button>
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
