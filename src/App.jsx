import React from 'react';
import Home from './pages/Home/Home';
import Slider from './pages/Slider/Slider';
import Table from './pages/Table/Table';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Button from './components/Button/Button';
import './style/App.scss';

function App() {
  return (
    <React.Fragment className='container'>
      <header>
        <Header />
      </header>
      <main>
        <Home />
        <Slider />
        <Table />
      </main>
      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  );
}

export default App;