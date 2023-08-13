import React from 'react';
import { HeaderComponent } from './components/header/header';
import CarouselComponent from './components/carousel/carousel';
import GuesthouseInfoComponent from './components/guesthouse-info/guesthouse-info';
import HouseRulesComponent from './components/house-rules/house-rules';
import ContactDetailsComponent from './components/contact-details/contact-details';
import './App.css';

export const App = () => {
  return (
    <div className="main-container">
      <HeaderComponent/>
      <GuesthouseInfoComponent />
      <CarouselComponent/>
      <HouseRulesComponent/>
      <ContactDetailsComponent/>
    </div>
  );
}

export default App;
