"use client";

import styled from "styled-components";
import React from "react";

const ContactSection = () => {
  return (
    <Section>
      <Content>
        <h2>Contact</h2>
        <Form
          action="https://formspree.io/f/yourFormId" // <-- vervang met jouw ID
          method="POST"
        >
          <label>
            Name
            <input type="text" name="name" required />
          </label>
          <label>
            Email
            <input type="email" name="email" required />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" required />
          </label>
          <button type="submit">Send Message</button>
        </Form>
      </Content>
    </Section>
  );
};

export default ContactSection;

/* styled-components */
const Section = styled.section`
  background: #f3e5ce;
  padding: 6rem 1rem;
  min-height:100vh;
`;

const Content = styled.div`
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
  
  h2 {
    font-size: clamp(1.8rem, 3vw, 2.5rem);
    margin-bottom: 2rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  text-align: left;

  label {
    display: flex;
    flex-direction: column;
    font-size: 0.95rem;
    font-weight: 600;
    color: #333;
  }

  input,
  textarea {
    margin-top: 0.5rem;
    padding: 0.8rem 1rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 1rem;
    resize: vertical;
  }

  button {
    align-self: flex-start;
    background: #4d5a39;
    color: #fff;
    border: none;
    padding: 0.9rem 1.6rem;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.3s;
  }
  button:hover {
    background: #272e1d;
  }
`;
