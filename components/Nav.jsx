"use client";

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import { Lexend } from "next/font/google";

const lexend = Lexend({ subsets: ["latin"], weight: "400" });

const Navigation = ({ alwaysScrolled = false }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (alwaysScrolled) return; // als altijd true, geen scroll-listener
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [alwaysScrolled]);

  return (
    <Nav $scrolled={scrolled || alwaysScrolled} role="navigation" aria-label="Primary">
      <Link href="/" className={`${lexend.className} logo`} aria-label="Guided Breathing – Home">
        Guided Breathing
      </Link>
      <ul>
        <li><Link href="/links">Links</Link></li>
        <li><Link href="/contact">Contact</Link></li>
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
  padding: calc(1rem + env(safe-area-inset-top)) clamp(1rem, 4vw, 4rem) 1rem;

  background: ${({ $scrolled }) =>
    $scrolled ? "rgba(237, 235, 229, 0.85)" : "transparent"};
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? "blur(10px)" : "none")};
  -webkit-backdrop-filter: ${({ $scrolled }) =>
    $scrolled ? "blur(10px)" : "none"};
  border-bottom: ${({ $scrolled }) =>
    $scrolled ? "1px solid rgba(0,0,0,0.06)" : "1px solid transparent"};
  transition: background .25s ease, border-color .25s ease, color .25s ease, backdrop-filter .25s ease;

  a {
    color: ${({ $scrolled }) => ($scrolled ? "#111" : "white")};
    text-decoration: none;
    font-weight: 600;
    outline: none;
  }

  .logo {
    font-size: clamp(1.25rem, 2.3vw, 1.75rem);
    font-weight: 400; /* Lobster is 400 */
    line-height: 1;
    letter-spacing: .2px;
  }

  ul {
    list-style: none;
    display: flex;
    gap: clamp(1rem, 3vw, 2.5rem);
    margin: 0; padding: 0;
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
    transition: transform .2s ease;
  }
  li a:hover::after,
  li a:focus-visible::after {
    transform: scaleX(1);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    li a::after { transition: none; }
  }
`;