import React, { Component } from 'react'
import NavBar from '../NavBar';
import { Route } from 'react-router-dom';

import Auth from '../../screens/Auth';
import '../../App.scss';


export default class Layout extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Route exact path="/login" component={Auth} />
      </div>
    )
  }
}
