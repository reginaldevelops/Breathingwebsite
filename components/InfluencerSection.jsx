"use client";

import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { motion } from "framer-motion";

export default function InfluencerSection() {
  return (
    <MotionSection variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
      <Content>
        <MotionProfileImage variants={fade}>
          <StyledImage
            src="/diederik.jpg"
            alt="Diederik"
            width={400}
            height={250}
            priority
          />
        </MotionProfileImage>

        <TextContent>
          <MotionSmallTitle variants={fade}>MEET YOUR GUIDE</MotionSmallTitle>
          <MotionMainTitle variants={fade}>Diederik, Medical Professional & Breath Coach</MotionMainTitle>
          <MotionDescription variants={fade}>
            With a medical background and a passion for recovery and focus,
            Diederik translates science into simple daily breathing routines.
          </MotionDescription>
          <MotionStats variants={fade}>
            <Stat><strong>2,500+</strong><span>health blog posts</span></Stat>
            <Stat><strong>20.000</strong><span>Followers</span></Stat>
            <Stat><strong>Medical</strong><span>trained background</span></Stat>
          </MotionStats>
          <MotionButtons variants={fade}>
            <button className="primary">Start a free session</button>
            <button className="secondary">Read the blog</button>
          </MotionButtons>
        </TextContent>
      </Content>
    </MotionSection>
  );
}

const fade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { ease: "easeOut", duration: 0.75 },
  },
};

const Section = styled.section`
  && {
    background: #fafafa;
    padding: 5rem 1rem;
  }
`;
const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 3rem;
  max-width: 1100px;
  margin: 0 auto;
  align-items: center;
  @media (max-width: 900px) { 
    grid-template-columns: 1fr; 
    text-align: center; 
  }
`;
const ProfileImage = styled.div``;

const StyledImage = styled(Image)`
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0,0,0,.08);
  object-fit: cover;

  @media (max-width: 600px) {
    width: 300px !important;
    height: 200px !important;
  }

  @media (min-width: 601px) {
    width: 400px !important;
    height: 250px !important;
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
const SmallTitle = styled.span`
  && { font-size: .9rem; font-weight: 600; letter-spacing: 1.2px; color: #666; }
`;
const MainTitle = styled.h2`
  && { font-size: clamp(1.8rem, 3vw, 2.5rem); line-height: 1.2; font-weight: 700; }
`;
const Description = styled.p`
  && { font-size: 1.1rem; color: #555; line-height: 1.6; padding: 1em 0; }
`;
const Stats = styled.div`
  display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1.5rem;
  @media (max-width: 512px) { grid-template-columns: 1fr 1fr; text-align: center; margin: auto 50px; }
`;
const Stat = styled.div`
  background: #fff; border-radius: 10px; padding: .8rem 1.2rem; box-shadow: 0 2px 6px rgba(0,0,0,.05);
  display: flex; flex-direction: column; align-items: flex-start;
  strong { font-size: 1.2rem; color: #4d5a39ff; }
  span { font-size: .85rem; color: #4c4f49ff; }
  @media (max-width: 900px) { align-items: center; }
`;
const Buttons = styled.div`
  display: flex; gap: 1rem; margin-top: 1rem;
  .primary { background:#4d5a39ff; color:#fff; border:none; padding:.8rem 1.4rem; border-radius:8px; font-weight:600; cursor:pointer; transition:background .3s; }
  .primary:hover { background:#272e1dff; }
  .secondary { background:#fff; border:1px solid #ccc; padding:.8rem 1.4rem; color:#000; border-radius:8px; font-weight:600; cursor:pointer; transition:all .3s; }
  .secondary:hover { background:#060606; color:#fff; }
  @media (max-width: 900px) { justify-content:center; flex-wrap:wrap; }
`;

/* motion wrappers */
const MotionSection = motion(Section);
const MotionProfileImage = motion(ProfileImage);
const MotionSmallTitle = motion(SmallTitle);
const MotionMainTitle = motion(MainTitle);
const MotionDescription = motion(Description);
const MotionStats = motion(Stats);
const MotionButtons = motion(Buttons);
