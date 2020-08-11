import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SignForm from './layouts/SignForm';
import Welcome from './layouts/Welcome';

// Redux
import { Provider } from 'react-redux';
import store from './store';

import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {   //useEffect is for functional components what componentDidMount is for class-based components  
    store.dispatch(loadUser());      // we have access to the store directly in this file
  }, []);   // add the [] param so that useEffect only runs once instead of looping forever

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/signin" component={SignForm} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
