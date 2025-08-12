import React from 'react';
import styled from 'styled-components';
import profilePic from '../img/diederik.jpg';
import { motion } from "framer-motion";
import { fade, titleAnim, photoAnim } from "../animation";

const InfluencerSection = () => {
  return (
    <Section
      as={motion.section}
      variants={fade}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <Content>
        <ProfileImage
          as={motion.div}
          variants={fade}
        >
          <img src={profilePic} alt="Diederik" />
        </ProfileImage>

        <TextContent>
          <SmallTitle
            as={motion.h3}
            variants={fade}
          >
            MEET YOUR GUIDE
          </SmallTitle>

          <MainTitle
            as={motion.h2}
            variants={fade}
          >
            Diederik, Medical Professional & Breath Coach
          </MainTitle>

          <Description
            as={motion.p}
            variants={fade}
          >
            With a medical background and a passion for recovery and focus, 
            Diederik translates science into simple daily breathing routines.
          </Description>

          <Stats
            as={motion.div}
            variants={fade}
          >
            <Stat>
              <strong>2,500+</strong>
              <span>health blog posts</span>
            </Stat>
            <Stat>
              <strong>20.000</strong>
              <span>Followers</span>
            </Stat>
            <Stat>
              <strong>Medical</strong>
              <span>trained background</span>
            </Stat>
          </Stats>

          <Buttons
            as={motion.div}
            variants={fade}
          >
            <button className="primary">Start a free session</button>
            <button className="secondary">Read the blog</button>
          </Buttons>
        </TextContent>
      </Content>
    </Section>
  );
};


export default InfluencerSection;

// Styled Components
const Section = styled.section`
  background: #fafafa; /* very subtle grey for separation */
  padding: 5rem 1rem; /* more breathing space */
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


const ProfileImage = styled.div`
  img {
    width: 100%;
    max-width: 500px;
    border-radius: 20px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const SmallTitle = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 1.2px;
  color: #666;
`;

const MainTitle = styled.h2`
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  line-height: 1.2;
  font-weight: 700;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: #555;
  line-height: 1.6;
  padding: 1em 0;
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.5rem;

  @media (max-width: 512px) {
  grid-template-columns: 1fr 1fr;
  text-align: center;
  margin: auto 50px
  }
`;

const Stat = styled.div`
  background: white;
  border-radius: 10px;
  padding: 0.8rem 1.2rem;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  strong {
    font-size: 1.2rem;
    color: #4d5a39ff;
  }
  span {
    font-size: 0.85rem;
    color: #4c4f49ff;
  }

  @media (max-width: 900px) {
    align-items: center;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  .primary {
    background: #4d5a39ff;
    color: white;
    border: none;
    padding: 0.8rem 1.4rem;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    transition: background 0.3s ease;
    &:hover {
      background: #272e1dff;
    }
  }

  .secondary {
    background: white;
    border: 1px solid #ccc;
    padding: 0.8rem 1.4rem;
    color:black;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s ease;
    &:hover {
      background:rgb(6, 6, 6);
      color:white;
    }
  }

  @media (max-width: 900px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;
