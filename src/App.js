import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Timeline from './pages/TImeline';


class App extends Component {
  render() {
    return (
      <BrowserRouter>

        {/* NOTA_ESTUDO:  O Comportamento do switch é garantir que só uma rota seja chamada pelo endpoint dado */}
        <Switch>

          {/* NOTA_ESTUDO: Geralmente, só precisamos colocar o exact na rota raiz */}
          <Route path="/" exact component={Login} />
          <Route path="/timeline" component={Timeline} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
