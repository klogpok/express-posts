import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from './layout/Layout';
import Feed from './components/Feed/Feed';
import CreateForm from './components/CreateForm/CreateForm';
import EditForm from './components/EditForm/EditForm';
import './App.css';

const App: React.FC = () => {
  let routes = (
    <Switch>
      <Route path="/feed" component={Feed} />
      <Route path="/create-post" component={CreateForm} />
      <Route path="/edit/:id" exact component={EditForm} />
      <Redirect to="/" />
    </Switch>
  );
  return (
    <Layout>
      <div className="container">{routes}</div>
    </Layout>
  );
};

export default App;
