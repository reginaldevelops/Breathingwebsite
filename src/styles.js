// src/styles.js
import styled from "styled-components";

/* HERO WRAPPER */
export const About = styled.div`
  min-height: clamp(70svh, 85vh, 900px);
  position: relative;
  display: grid;
  place-items: center;
  color: white;
  overflow: clip;

  /* add this class on your hero: <About className="hero"> */
  &.hero {
    padding-top: 12vh; /* room for transparent nav */
    padding-bottom: 4vh;
  }
`;

/* BACKGROUND IMAGE + OVERLAY */
export const Image = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 40%; /* nudge focus down a bit */
    transform: scale(1.02);
    filter: saturate(1.05) contrast(1.05);
  }

  /* Cinematic overlay for nav/text readability */
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 2;
    pointer-events: none;
    background:
      /* top-to-bottom gradient (stronger at top for nav contrast) */
      linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.62) 0%,
        rgba(0, 0, 0, 0.38) 26%,
        rgba(0, 0, 0, 0.18) 48%,
        rgba(255, 255, 255, 0) 82%
      ),
      /* soft radial burn near top center */
      radial-gradient(
        80% 60% at 50% 15%,
        rgba(0, 0, 0, 0.35) 0%,
        transparent 60%
      );
  }

  /* On very wide screens, adjust crop pressure */
  @media (min-aspect-ratio: 16/9) {
    img { object-position: 50% 45%; }
  }
`;

/* FOREGROUND CONTENT */
export const Description = styled.div`
  position: relative;
  z-index: 3;               /* above overlays */
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
    0 3px 6px rgba(0, 0, 0, 0.65),   /* dark drop shadow */
    0 0 18px rgba(0, 0, 0, 0.55),    /* soft glow */
    0 0 2px rgba(255, 255, 255, 0.75); /* faint white outline */
}

h2 span {
  background: linear-gradient(
    90deg,
    #23d997 0%,
    #5ef3b9 50%,
    #23d997 100%
  );
  background-size: 200% auto;
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  animation: calmShimmer 4s ease-in-out infinite;
}

@keyframes calmShimmer {
  0%, 100% { background-position: 0% center; }
  50% { background-position: 100% center; }
}




  p {
    margin-top: 0.75rem;
    color: #f1f5f9;
    opacity: 0.9;
    font-size: clamp(1rem, 1.6vw, 1.2rem);
    line-height: 1.5;
    text-shadow: 0 3px 16px rgba(0, 0, 0, 0.4);
  }

  .cta {
    display: inline-block;
    margin-top: 2rem;
    padding: 0.9rem 1.15rem;
    border-radius: 12px;
    font-weight: 700;
    color: #0b0d10;
    background: linear-gradient(180deg, #fff, #f7fafc);
    border: 1px solid rgba(0, 0, 0, 0.08);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.22);
    text-decoration: none;
    transition: transform 0.15s ease, box-shadow 0.2s ease, background 0.2s ease;
  }
  .cta:hover {
    transform: translateY(-2px);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.24);
  }

  @media (max-width: 768px) {
    h2 { font-size: clamp(1.9rem, 7vw, 3rem); }
    .cta { padding: 0.8rem 1rem; }
  }
`;
