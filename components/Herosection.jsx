"use client";

import styled from "styled-components";
import React from "react";
import { motion } from "framer-motion";
import NextImage from "next/image";

const fade = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const HeroSection = () => {
  return (
    <Hero>
      <HeroImage>
        <NextImage
          src="/bcwbfront.png"
          alt="breathing hero"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 80vw"
          style={{ objectFit: "cover", objectPosition: "50% 40%" }}
        />
      </HeroImage>

      <Description>
        <motion.div className="title" variants={fade} initial="hidden" animate="show">
          <motion.h2 variants={fade}>
            Find Your <span>Calm</span> in the Noise
          </motion.h2>
          <motion.a variants={fade} href="#sessions" className="cta">
            Start a 3-Minute Reset
          </motion.a>
        </motion.div>
      </Description>
    </Hero>
  );
};

export default HeroSection;

/* HERO WRAPPER */
const Hero = styled.div`
  min-height: clamp(70svh, 85vh, 900px);
  position: relative;
  display: grid;
  place-items: center;
  color: white;
  overflow: hidden; /* fallback */
  overflow: clip;
  padding: 12vh 0 4vh;
`;

/* BACKGROUND IMAGE + OVERLAY */
const HeroImage = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 2;
    pointer-events: none;
    background:
      linear-gradient(180deg, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.38) 26%, rgba(0,0,0,0.18) 48%, rgba(255,255,255,0) 82%),
      radial-gradient(80% 60% at 50% 15%, rgba(0,0,0,0.35) 0%, transparent 60%);
  }
`;

/* FOREGROUND CONTENT */
const Description = styled.div`
  position: relative;
  z-index: 3;
  text-align: center;
  max-width: 900px;
  padding: 0 1rem;

  h2 {
    font-weight: lighter;
    font-size: clamp(2.4rem, 5vw, 4rem);
    line-height: 1.1;
    letter-spacing: 0.4px;
    color: #fff;
    text-shadow:
      0 3px 6px rgba(0,0,0,0.65),
      0 0 18px rgba(0,0,0,0.55),
      0 0 2px rgba(255,255,255,0.75);
  }

  h2 span {
    background: linear-gradient(90deg, #23d997 0%, #5ef3b9 50%, #23d997 100%);
    background-size: 200% auto;
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    animation: calmShimmer 4s ease-in-out infinite;
  }
  @keyframes calmShimmer { 0%,100%{background-position:0%} 50%{background-position:100%} }

  .cta {
    display: inline-block;
    margin-top: 2rem;
    padding: 0.9rem 1.15rem;
    border-radius: 12px;
    font-weight: 700;
    color: #0b0d10;
    background: linear-gradient(180deg, #fff, #f7fafc);
    border: 1px solid rgba(0,0,0,0.08);
    box-shadow: 0 10px 30px rgba(0,0,0,0.22);
    text-decoration: none;
    transition: transform .15s ease, box-shadow .2s ease, background .2s ease;
  }
  .cta:hover { transform: translateY(-2px); box-shadow: 0 16px 40px rgba(0,0,0,0.24); }
`;
