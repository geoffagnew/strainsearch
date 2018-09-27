import React, { Component } from 'react';
import AppRouter from './../../routers/AppRouter';
import Navigation from '../Navigation/Navigation';
import './../../styles/global/bootstrap.min.css';
import './../../styles/global/App.scss';


class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <AppRouter />
      </div>
    );
  }
}

export default App;
