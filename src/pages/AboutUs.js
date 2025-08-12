import React from 'react';
import AboutSection from "../components/AboutSection";
import ServicesSection from '../components/ServicesSection';
import BannerSection from '../components/Banner';
//animations
import {motion} from 'framer-motion';
import {pageAnimation} from '../animation';
import InfluencerIntro from '../components/InfluencerIntro';

const AboutUs = () => {
    return(
    <motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show">
        <AboutSection />
        <BannerSection />
        <InfluencerIntro />
        <ServicesSection />

    </motion.div>
    );
};

export default AboutUs;