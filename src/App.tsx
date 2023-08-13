import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HeaderComponent } from './components/header/header';
import CarouselComponent from './components/carousel/carousel';
import GuesthouseInfoComponent from './components/guesthouse-info/guesthouse-info';
import HouseRulesComponent from './components/house-rules/house-rules';
import ContactDetailsComponent from './components/contact-details/contact-details';

export const App = () => {
  return (
    <div className="main-container">
      <HeaderComponent/>

      <GuesthouseInfoComponent />
      <CarouselComponent/>

      <HouseRulesComponent/>

      <ContactDetailsComponent/>
      
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
