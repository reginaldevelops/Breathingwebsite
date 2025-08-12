import React from "react";
import bcwbfront from "../img/bcwbfront.png";
import { About, Description, Image } from "../styles";
import { motion } from "framer-motion";
import { titleAnim, photoAnim, fadeUp } from "../animation";

const AboutSection = () => {
  return (
    <About className="hero">
      <Image>
        <motion.img
          variants={photoAnim}
          src={bcwbfront}
          alt="breathing hero"
          loading="eager"
          fetchpriority="high"
        />
      </Image>

      <Description>
        <motion.div className="title">
          <motion.h2 
          variants={fadeUp}
          initial="hidden"
          animate="show"
          >
            Find Your <span>Calm</span> in the Noise
          </motion.h2>
          <motion.a
            variants={fadeUp}
            initial="hidden"
            animate="show"
            href="#sessions"
            className="cta"
          >
            Start a 3-Minute Reset
          </motion.a>
        </motion.div>
      </Description>
    </About>
  );
};

export default AboutSection;
