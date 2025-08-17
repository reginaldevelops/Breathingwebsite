 "use client"

import React from "react";
import styled, { keyframes } from "styled-components";
import  Image  from "next/image";
import { motion } from "framer-motion";



// import tiktokLogo from "/tiktoklogo2.png";
// import tiktokmonogram from "../img/tiktokmonogram.png";

const BannerSection = () => {
  return (
    <Banner aria-label="TikTok badge">
      <Accent />
      <Badge
        as={motion.a}
        // variants={fadeUp}
        initial="hidden"
        animate="show"
        href="https://www.tiktok.com/@yourchannel"
        target="_blank"
        rel="noreferrer"
      >
        <motion.img
          src="/tiktoklogo2.png"
          alt=""
          aria-hidden="true"
        //   variants={fadeUp}
          initial="hidden"
          animate="show"
        />
        <span>The #1 TikTok Breathing Channel</span>
      </Badge>
    </Banner>
  );
};

export default BannerSection;

// animation for moving the background left to right
const scrollBg = keyframes`
  0% { background-position: 0px 340px; }
  100% { background-position: 1000px 340px; }
`;

const Banner = styled.div`
  display: block;
  background: url("/tiktokmonogram.png") repeat 0px 340px;
  background-size: 1000px 500px;
  padding-top: 1.25rem;
  padding-bottom: 1.5rem;
  margin-top: -1.25rem;

  animation: ${scrollBg} 40s linear infinite;
`;

const Accent = styled.div`
  display: grid;
  height: 12px;
  margin: 0 auto 0.75rem;
  border-radius: 999px;
  background: linear-gradient(90deg, #ee1d52 0%, #69c9d0 50%, #111 100%);
  opacity: 0.25;
`;

const Badge = styled.a`
  --surface: rgba(255, 255, 255, 0.75);
  --stroke: rgba(0, 0, 0, 0.06);
  --text: #111;
  --shadow: 0 8px 24px rgba(0, 0, 0, 0.12);

  margin: auto;
  display: grid;
  justify-items: center;
  max-width: 400px;
  padding: 0.9rem 1.1rem;
  border-radius: 14px;
  background: var(--surface);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid var(--stroke);
  box-shadow: var(--shadow);
  color: var(--text);
  text-decoration: none;

  position: relative;
  &:before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 1px;
    background: linear-gradient(120deg, #ee1d52, #69c9d0);
    -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }

  img {
    width: 22px;
    height: 22px;
  }
  span {
    font-weight: 700;
    letter-spacing: 0.2px;
  }

  transition: transform 0.15s ease, box-shadow 0.2s ease, background 0.2s ease;
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.16);
    background: rgba(255, 255, 255, 0.85);
  }

  @media (max-width: 768px) {
    padding: 0.75rem 0.9rem;
    border-radius: 12px;
    img {
      width: 20px;
      height: 20px;
    }
    span {
      font-size: 0.95rem;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;