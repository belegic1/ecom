import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomeScreen from './screens/HomeScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';

const App = () => {
 return (
    <>
      <Router>
        <Switch>
          <Route path="/login" component={SignInScreen} exact />
          <Route path='/register' component={SignUpScreen} exact />
          <Route path='/' component={HomeScreen} exact />
        </Switch>
      </Router>
</>
)
}

export default App;
