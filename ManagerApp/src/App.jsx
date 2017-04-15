import React from 'react';
import ReactDOM from 'react-dom';
import {Navigator} from 'react-onsenui';

import MainPage from './MainPage'
import Login from './Login';
import test from './test';
import './style.css';

export default class App extends React.Component {
  renderPage(route, navigator) {
    const props = route.props || {};
    props.navigator = navigator;

    return React.createElement(route.component, props);
  }

  render() {
    return (
      <Navigator initialRoute={{component: test}} renderPage={this.renderPage} />
    );
  }
}