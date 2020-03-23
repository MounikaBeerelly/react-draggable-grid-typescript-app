import * as React from 'react';
import { Router, Route } from 'react-router';
import Home from './Components/Home';
import Layout from './Components/Layout';
import './App.css';
import { initializeIcons } from '@uifabric/icons';
initializeIcons();

class App extends React.Component {
  
  render() {
    return(
      <Layout>
        <Route exact path='/' component={Home} />
      </Layout>
    );
  }
}

export default App;
