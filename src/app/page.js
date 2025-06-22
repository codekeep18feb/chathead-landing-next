// app/page.js
import Header from '../app/components/Header';
import SolveSection from '../app/components/SolveSection';
import HowSection from '../app/components/HowSection';
import EngagementSection from '../app/components/EngagementSection';
import Footer from '../app/components/Footer';
import Tabs from './components/Tabs';
import Sliders from './components/P2ASliders';


// import Pricing from './components/Pricing';


const Home = () => {

  const slides = [
    {
      image: "/images/slide1.jpg",
      sections: [
        {
          heading: "Introduction",
          subheading: "Getting Started",
          paragraph: "This is the beginning of Slide 1.",
          list: ["Step 1", "Step 2"]
        },
        {
          heading: "Details",
          subheading: "In-depth Look",
          paragraph: "Now we dive deeper into the subject.",
          list: ["Detail A", "Detail B", "Detail C"]
        },
        {
          heading: "Conclusion",
          paragraph: "That's all for this slide."
        }
      ]
    },
    {
      image: "/images/slide2.jpg",
      sections: [
        {
          heading: "Overview",
          paragraph: "Slide 2 starts with this content."
        },
        {
          heading: "Key Points",
          list: ["Fast", "Reliable", "Scalable"]
        }
      ]
    }
  ];
  
  

  const tabData = [
    { label: "P2A", content: <Sliders slides={slides} /> },
    { label: "P2P", content: <Sliders slides={slides} /> },
  ];
  

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
