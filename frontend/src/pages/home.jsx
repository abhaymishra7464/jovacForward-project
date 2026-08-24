

import Hero from "../Components/hero";
import Stats from "../Components/stats";
import Trusted from "../Components/trusted";
import Features from "../Components/features";
import HowItWorks from "../Components/howitworks";
import Cta from "../Components/cta";
import "../styles/home.css";

const Home = () => {
  return (
    <main className="home">
      <Hero />
      <Stats />
      <Trusted />
      <Features />
      <HowItWorks />
      <Cta />
    </main>
  );
};

export default Home;