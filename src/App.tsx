import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HeaderComponent } from './components/header/header';
import CarouselComponent from './components/carousel/carousel';
import GuesthouseInfoComponent from './components/guesthouse-info/guesthouse-info';

export const App = () => {
  return (
    <div className="main-container">
      <HeaderComponent/>

      <GuesthouseInfoComponent />
      <CarouselComponent/>
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
