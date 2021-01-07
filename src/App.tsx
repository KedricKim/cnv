import React from 'react';
import { Route,Switch } from 'react-router-dom';
import { Main } from './pages/PageIndex';

class App extends React.Component{
  render(){ 
    return (
      <Switch>
          <Route path="/" exact component={Main} />
      </Switch>
    );
  }
}

export default App;
