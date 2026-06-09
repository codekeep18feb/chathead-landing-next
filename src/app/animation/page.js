import React from "react";
import styles from "./Animation.module.css";
import BgAnimation from "../components/BgAnimation";
import SectionBgAnimation from "../components/SectionBgAnimation";
import ShapeBgAnimation from "../components/ShapeBgAnimation";
import AutoBgAnimation from "../components/AutoBgAnimation";

const page = () => {
  return (
    <div className={styles.wraper}>
      {/* <BgAnimation /> */}
      {/* <SectionBgAnimation /> */}
      {/* <ShapeBgAnimation/> */}
      <AutoBgAnimation />
    </div>
  );
};

export default page;
