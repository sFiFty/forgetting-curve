import React, { Component } from 'react';

import Layout from './components/Layout';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router basename="/">
          <Route path="/" component={Layout} />
        </Router>
      </div>
    );
  }
}

export default App;
