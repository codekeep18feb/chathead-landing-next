import React from "react";
import styles from "./PricingPlans.module.css";
import FinalValue from "./FinalValue";

const PricingPlans = () => {
  return (
    <div>
    <div>
      magicchat.io is a saas based chat tool. you can use in your websites.
    </div>

    <div>
      <div>
        <h2>Detailed Feature Comparison</h2>
        <p>
          Compare all features across our plans to choose what's best for your business
        </p>

        <div>
          <table>
            <thead>
              <tr>
                <th>Features</th>
                <th>
                  <div>Launch 🚀</div>
                </th>
                <th>
                  <div>Starter 🌟</div>
                </th>
                <th>
                  <div>
                    Growth 🌱
                    <div>Most Popular</div>
                  </div>
                </th>
                <th>
                  <div>Scale ⚡</div>
                </th>
                <th>
                  <div>Enterprise 🏢</div>
                </th>
              </tr>
            </thead>

            <tbody>
              {/* Core Features Section */}
              <tr>
                <td colSpan={6}>
                  <div>
                    <strong>Core Features</strong>
                    <span>▼</span>
                  </div>
                </td>
              </tr>

              <tr>
                <td>
                  <div>
                    Monthly Active Users
                    <button aria-label="More info about Monthly Active Users">ℹ️</button>
                  </div>
                </td>
                <td>100 (Live Chat & Auth)</td>
                <td>1,000 (Live Chat & Auth)</td>
                <td>5,000 (Live Chat & Auth)</td>
                <td>25,000 (Live Chat & Auth)</td>
                <td>Custom</td>
              </tr>

              {/* AI Chat Features Section */}
              <tr>
                <td colSpan={6}>
                  <div>
                    <strong>AI Chat Features</strong>
                    <span>▼</span>
                  </div>
                </td>
              </tr>

              <tr>
                <td>
                  <div>
                    AI Messages / month
                    <button aria-label="More info about AI Messages / month">ℹ️</button>
                  </div>
                </td>
                <td>100</td>
                <td>5,000</td>
                <td>10,000+ (scalable)</td>
                <td>20,000+ (scalable)</td>
                <td>Unlimited</td>
              </tr>

              <tr>
                <td>
                  <div>
                    Multi-language Support
                    <button aria-label="More info about Multi-language Support">ℹ️</button>
                  </div>
                </td>
                <td>✘</td>
                <td>✘</td>
                <td>✔</td>
                <td>✔</td>
                <td>✔</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  );
};

export default PricingPlans;
