// import Hero from "../components/hero";
// import Stats from "../components/stats";
// import Trusted from "../components/trusted";
// import Features from "../components/features";
// import HowItWorks from "../components/howitworks";
// import Cta from "../components/cta";

// const Home = () => {
//   return (
//     <>
//       <Hero />
//       <Stats />
//       <Trusted />
//       <Features />
//       <HowItWorks />
//       <Cta />
//     </>
//   );
// };

// export default Home;

import Hero from "../components/hero";
import Stats from "../components/stats";
import Trusted from "../components/trusted";
import Features from "../components/features";
import HowItWorks from "../components/howitworks";
import Cta from "../Components/Cta";
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