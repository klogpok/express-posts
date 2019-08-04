import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from './layout/Layout';
import Feed from './components/Feed/Feed';
import Create from './components/Create/Create';
import './App.css';

const App: React.FC = () => {

  let routes = (
    <Switch>
      <Route path="/feed" component={Feed} />
      <Route path="/create-post" component={Create} />
      {/* <Route path="/" exact component={QuizList} /> */}
      <Redirect to="/" />
    </Switch>
  );
  return (
    <Layout>
      <div className="container">
      {routes}
      </div> 
    </Layout>
  );
}

export default App;
