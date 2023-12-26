import AbouDetails from "@/components/About/AbouDetails";
import AboutBcakground from "@/components/About/AboutBcakground";
import HomeAbout from "@/components/HomeAbout/HomeAbout";
import Newsletter from "@/components/Newsletter/Newsletter";
import React from "react";

const About = () => {
  return <section>
    <AboutBcakground/>
    <AbouDetails/>
    <div className="mb-20">
      <HomeAbout/>
    </div>
    <Newsletter/>
  </section>
};

export default About;
