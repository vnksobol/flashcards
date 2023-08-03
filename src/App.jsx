import React from 'react';
import Home from '.pages/Home/Home';
import Slider from '.pages/Slider/Slider';
import Table from '.pages/Table/Table';
import Header from '.components/Header/Header';
import Footer from '.components/Footer/Footer';
import './style/App.scss';

function App() {
  return (
    <div className='container'>
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
    </div>
  );
}

export default App;