import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserList from './components/UserList';
import UserForm from './components/UserForm';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={UserList} />
        <Route path="/user-form" component={UserForm} />
      </Switch>
    </Router>
  );
}

export default App;
