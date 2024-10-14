import React from "react";
import Header from "./components/Header";
import HeroSlider from "./components/HeroSlider";
import InfoCards from "./components/InfoCards ";
import Statistics from "./components/Statistics";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Subscribe from "./components/Subscribe";
import UpcomingExaminations from "./components/UpcomingExaminations";

function App() {
  return (
    <div>
      <Header />
      <HeroSlider />
      <UpcomingExaminations />
      <InfoCards />
      <Statistics />
      <FAQ />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
