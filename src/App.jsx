import React from 'react';
import { Navbar } from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FeatureSection from './components/FeatureSection';

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Categories />
      <FeatureSection />
    </main>
  );
};

export default App;
