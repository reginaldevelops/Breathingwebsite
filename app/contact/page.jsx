"use client";

import styled from "styled-components";
import React from "react";
import ContactSection from "@/components/ContactSection";
import Nav from "@/components/Nav";

const ContactPage = () => {
  return (
    <>
      <Nav alwaysScrolled />
      <ContactSection />
    </>
  );
};

export default ContactPage;
