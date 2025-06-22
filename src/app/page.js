// app/page.js
import Header from '../app/components/Header';
import SolveSection from '../app/components/SolveSection';
import HowSection from '../app/components/HowSection';
import EngagementSection from '../app/components/EngagementSection';
import Footer from '../app/components/Footer';
import Tabs from './components/Tabs';


// import Pricing from './components/Pricing';


const Home = () => {
  return (
    <div>
      {/* <Header /> */}
      <SolveSection />
      <HowSection />
      <EngagementSection />

      {/* <Pricing/> */}
      {/* <Footer /> */}

      {/* <Tabs tabs={tabData}/> */}
    </div>
  );
};

export default Home;
