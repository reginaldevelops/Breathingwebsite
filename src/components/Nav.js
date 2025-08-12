import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Nav $scrolled={scrolled}>
      <a id="logo" href="/">Guided Breathing</a>
      <ul>
        <li><a href="/links">Links</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </Nav>
  );
};

export default Navigation;

const Nav = styled.nav`
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem clamp(1rem, 4vw, 4rem);

  background: ${({ $scrolled }) =>
    $scrolled ? "rgba(243,229,206,0.85)" : "transparent"};
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? "blur(10px)" : "none")};
  -webkit-backdrop-filter: ${({ $scrolled }) =>
    $scrolled ? "blur(10px)" : "none"};
  border-bottom: ${({ $scrolled }) =>
    $scrolled ? "1px solid rgba(0,0,0,0.06)" : "1px solid transparent"};
  transition: all 0.25s ease;

  a {
    color: ${({ $scrolled }) => ($scrolled ? "#111" : "white")};
    text-decoration: none;
    font-weight: 600;
  }

  ul {
    list-style: none;
    display: flex;
    gap: clamp(1rem, 3vw, 2.5rem);
  }

  #logo {
    font-family: "Lobster", cursive;
    font-size: clamp(1.25rem, 2.3vw, 1.75rem);
    font-weight: lighter;
  }

  li a {
    position: relative;
    padding-bottom: 2px;
  }

  li a::after {
    content: "";
    position: absolute;
    left: 0; right: 0; bottom: -4px;
    height: 2px;
    background: linear-gradient(90deg, #ee1d52, #69c9d0);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.2s ease;
  }

  li a:hover::after {
    transform: scaleX(1);
  }
`;
