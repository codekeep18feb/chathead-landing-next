import SubscriptionPlans from "./SubscriptionPlans";
import "./pricing.css";

const Pricing = () => {
  return (
    <div>
      <div className="heading_wrapper">
        <h1>Flexiable Plans & Pricing "(_lorem ipsum)"</h1>
        <p>
          Full-featured chat platform at industry-leading prices. True
          usage-based pricing with no hidden fees or surprise overages. "(_lorem
          ipsum)"
        </p>
      </div>

      <SubscriptionPlans />
    </div>
  );
};

export default Pricing;
