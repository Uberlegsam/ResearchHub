import React from 'react';
import Header from './components/organisms/Header';
import Main from './components/organisms/Main';
import Footer from './components/organisms/Footer';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
      <Header />
      <Main />
      <Footer />
      </Router>
    </div>
  );
}

export default App;
