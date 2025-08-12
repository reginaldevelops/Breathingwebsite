import React from "react";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import bg2 from "../img/BG2.png";
import styled from "styled-components";
import { About, Description, Image } from "../styles";

const ServicesSection = () => {
  return (
    <Services>
      <Description>
        <h2>
          Why <span>Breathing</span> Works
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="Stress Reduction" />
              <h3>Stress Reduction</h3>
            </div>
            <p>Lowers cortisol, calming the body.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="Better Oxygen Use" />
              <h3>Better Oxygen Use</h3>
            </div>
            <p>Improves efficiency of oxygen delivery.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphragm} alt="Heart Rate Control" />
              <h3>Heart Rate Control</h3>
            </div>
            <p>Syncs breath with heartbeat for stability.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="Mental Clarity" />
              <h3>Mental Clarity</h3>
            </div>
            <p>Steadies the mind, boosting focus.</p>
          </Card>
        </Cards>
      </Description>

      {/* Background image (no overlay in this section) */}
      <Image className="no-overlay">
        <img src={bg2} alt="breathing background" />
      </Image>
    </Services>
  );
};

export default ServicesSection;

/* ---------- styles ---------- */

const Services = styled.div`
  min-height: clamp(30svh, 85vh, 700px);
  position: relative;
  display: grid;
  place-items: center;
  color: #111;               /* was white — use dark text here */
  overflow: clip;

  /* Clean heading specifically for Services */
  h2 {
    color: #111;
    font-weight: 700;
    font-size: clamp(2rem, 4.5vw, 3.2rem);
    line-height: 1.1;
    letter-spacing: 0.2px;
    text-shadow: none;       /* remove hero glow */
    filter: none;
    -webkit-text-fill-color: currentColor;
    background: none;
    -webkit-background-clip: initial;
    padding-bottom: 1.25rem;
    text-align: center;
  }

  h2 span {
    color: #020502ff;          /* solid accent green */
    font-weight: 800;        /* give the keyword extra punch */
    text-shadow: none;
    background: none;
    -webkit-background-clip: initial;
    -webkit-text-fill-color: currentColor;
  }

  p {
    width: 70%;
    max-width: 34rem;
    padding: 0.25rem 0 1rem;
    color: rgb(41, 45, 43);
  }

  & ${Image}::after { display: none; } /* keep hero overlay off */

  &::before {
    content: "";
    position: absolute;
    left: 0; right: 0; top: -36px; height: 36px;
    background: linear-gradient(180deg, #f3e5ce 0%, rgba(243,229,206,0) 100%);
    pointer-events: none;
    z-index: 2;
  }
`;


const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.25rem 1.5rem;
  justify-items: center;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  text-align: center;
  padding: 1rem 0;

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.6rem;

    img {
      width: 36px;
      height: 36px;
    }
  }

  h3 {
    margin-bottom: 0.4rem;
    margin-left:0.7rem;
    font-size: 1.2rem;
    font-weight: bold;
    color: black;
  }

  p {
    margin: 0 auto;
    max-width: 230px;
    font-size: 1rem;
    line-height: 1.4;
  }

  @media (max-width: 768px) {
    h3 { font-size: 1rem; }
    p  { width: 100%; }
  }
`;
