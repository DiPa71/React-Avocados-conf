import React from 'react';
import Badgenew from '../pag/badgenew'
import Badges from '../pag/badges'
import Layout from './Layout'
import notfound from './notfound'
import index from './index'
import Badgeedit from '../pag/badgeedit'
import Badgeview from '../pag/badgeview'


import { BrowserRouter, Route, Switch } from 'react-router-dom';
function App(){
  return(
  <BrowserRouter>
  <Layout>
    <Switch>
      <Route exact path="/badges" component={Badges} />
      <Route exact path="/badge/new" component={Badgenew} />
      <Route exact path="/badge/:badgeId/edit" component={Badgeedit} />
      <Route exact path="/badge/:badgeId" component={Badgeview} />
      <Route exact path="/" component={index} />
      <Route component={notfound} />
    </Switch>
  </Layout>
  </BrowserRouter>
  );
}

export default App;