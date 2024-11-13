import React from 'react';
import { Navbar } from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FeatureSection from './components/FeatureSection';
import FeatureSectionBreakFast from './components/FeatureSectionBreakFast';
import Banner from './components/Banner';
import BlogSection from './components/BlogSection';
import NewsLetter from './components/NewsLetter';

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Categories />
      <FeatureSection />
      <FeatureSectionBreakFast />
      <Banner />
      <BlogSection />
      <NewsLetter />
    </main>
  );
};

export default App;
