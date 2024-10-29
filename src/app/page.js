// app/page.js
import Header from '../app/components/Header';
import SolveSection from '../app/components/SolveSection';
import HowSection from '../app/components/HowSection';
import EngagementSection from '../app/components/EngagementSection';
import Footer from '../app/components/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <SolveSection />
      <HowSection />
      <EngagementSection />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
