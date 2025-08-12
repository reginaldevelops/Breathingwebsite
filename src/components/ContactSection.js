import React from "react";
import bcwbfront from "../img/bcwbfront.png";
import { About, Description, Image } from "../styles";
import { motion } from "framer-motion";
import { titleAnim, photoAnim } from "../animation";

const ContactSection = () => {
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
          <motion.h2 variants={titleAnim}>
            Looking for <span>Help?</span>
          </motion.h2>
          <motion.a
            variants={titleAnim}
            href="#sessions"
            className="cta"
          >
            Contact me
          </motion.a>
        </motion.div>
      </Description>
    </About>
  );
};

export default ContactSection;
