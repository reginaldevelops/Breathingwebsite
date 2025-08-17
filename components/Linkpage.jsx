"use client"

import React from "react";
import styled from "styled-components";

// Data you can extend easily
const tools = [
  {
    title: "Muse Meditation Headband",
    href: "https://choosemuse.com/",
    description:
      "Real-time EEG feedback helps you notice mind-wandering, settle faster, and build a consistent practice. Ideal for beginners who want guidance and pros who love data.",
    bullets: [
      "Live audio cues for calm/focus",
      "Session summaries & streaks in app",
      "Heart rate, breath & stillness metrics"
    ],
    image: "/muse-headband.jpg",
    tag: "Neurofeedback"
  },
  // Add more:
  {
    title: "Box Breathing Timer (Free)",
    href: "https://yourtimer.com",
    description: "Simple 4-4-4-4 timer with haptics and gentle audio.",
    bullets: ["Custom lengths", "Dark mode", "No account"],
    image: "/muse-headband.jpg",
    tag: "Breath Tool"
  }
];

const LinksPage = () => {
  return (
    <Wrap>
      <Header>
        <Eyebrow>Tools I trust</Eyebrow>
        <h1>Recommended Tools</h1>
        <p>
          Curated gear and apps that make breathing and meditation simpler. No fluff—just
          what actually helps you build a daily rhythm.
        </p>
      </Header>

      <Grid>
        {tools.map((t) => (
          <Card key={t.title}>
            {t.image && (
              <Thumb>
                <img src={t.image} alt={`${t.title}`} />
              </Thumb>
            )}
            <Body>
              {t.tag && <Tag>{t.tag}</Tag>}
              <h2>{t.title}</h2>
              <p>{t.description}</p>
              {t.bullets && (
                <List>
                  {t.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </List>
              )}
              <PrimaryLink href={t.href} target="_blank" rel="noreferrer">
                Visit Website
              </PrimaryLink>
            </Body>
          </Card>
        ))}
      </Grid>
    </Wrap>
  );
};

export default LinksPage;

/* --------- styles --------- */

const CREAM = "#f3e5ce";

const Wrap = styled.main`
  min-height: 100svh;
  background: linear-gradient(180deg, ${CREAM} 0%, #fff 100%);
  padding: 6rem 1rem 4rem;
  color: #111;
`;

const Header = styled.header`
  max-width: 900px;
  margin: 0 auto 2rem;
  text-align: center;

  h1 {
    font-size: clamp(2rem, 4.5vw, 3rem);
    line-height: 1.1;
    margin: 0.25rem 0 0.5rem;
  }
  p {
    margin: 1.5em auto;
    max-width: 720px;
    color: #686561;
    font-size: 1.5rem;
  }
`;

const Eyebrow = styled.div`
  display: inline-block;
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #6b7280;
`;

const Grid = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  gap: 1.2rem;
  grid-template-columns: 1fr;
`;

const Card = styled.article`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 1rem;
  padding: 1rem;
  border-radius: 16px;
  background: rgba(255,255,255,0.75);
  border: 1px solid rgba(17,19,24,0.06);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.06);

  @media (max-width: 540px) {
    grid-template-columns: 1fr;
  }

  transition: transform .15s ease, box-shadow .2s ease, background .2s ease;
  &:hover {
    transform: translateY(-2px);
    background: rgba(255,255,255,0.9);
    box-shadow: 0 16px 40px rgba(0,0,0,0.08);
  }
`;

const Thumb = styled.div`
  align-self: stretch;
  border-radius: 12px;
  overflow: hidden;
  background: #f5f5f5;
  width:250px;
  height:250px;
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Body = styled.div`
  h2 {
    font-size: clamp(1.2rem, 2.4vw, 1.6rem);
    margin: 0 0 .25rem;
    padding: 5px 0px;
  }
  p {
    font-size:20px;
    margin: .25rem 0 .5rem;
    padding: 5px 0px;
    line-height:1.3em;
    color: #374151;
  }
`;

const Tag = styled.span`
  display: inline-block;
  font-size: 0.75rem;
  color: #0b0d10;
  background: linear-gradient(120deg, #ee1d52, #69c9d0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding-bottom: 0.1rem;
  margin-bottom: 0.4rem;
  font-weight: 800;
  letter-spacing: 0.02em;
`;

const List = styled.ul`
  margin: 0 0 .6rem 1rem;
  color: #76716d;
  li { margin: 0.1rem 0; }
  font-size:1.2rem;
`;

const PrimaryLink = styled.a`
  align-self: start;
  display: inline-block;
  padding: 1.1rem 1.3rem;
  border-radius: 12px;
  font-weight: 700;
  color: #0b0d10;
  text-decoration: underline;
`;
