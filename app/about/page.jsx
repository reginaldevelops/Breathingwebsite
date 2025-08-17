"use client";

import styled from "styled-components";
import React from "react";
import { motion } from "framer-motion";
import NextImage from "next/image";
import HeroSection from "@/components/Herosection";

const fade = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const AboutSection = () => {
  return (
    <HeroSection />
  );
};

export default AboutSection;