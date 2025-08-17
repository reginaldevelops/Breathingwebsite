"use client"

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import NameForm from "@/components/NameForm";
import HeroSection from "@/components/Herosection";
import BannerSection from "@/components/Banner";
import styled from "styled-components";
import InfluencerSection from "@/components/InfluencerSection";

export default function Home() {
  return (
    <HomePageContainer>
      <HeroSection />
      <BannerSection />
      <InfluencerSection />
    </HomePageContainer>
  );
}

const HomePageContainer = styled.div`
`;