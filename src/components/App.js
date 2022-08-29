import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../layouts/Header';
import Dashboard from '../layouts/Dashboard';
import Menu from '../layouts/Menu';
import Footer from '../layouts/Footer';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Menu/>
          <Dashboard/>
          <Footer/>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
