import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

// ---- CHANGE THIS ----
// If you use Formspree, replace with your form endpoint like:
// const FORMSPREE = "https://formspree.io/f/abcdwxyz";
const FORMSPREE = "";

const ContactPage = () => {
  const [status, setStatus] = useState("idle");

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // If you haven't set FORMSPREE yet, just open mail client:
    if (!FORMSPREE) {
      window.location.href = `mailto:you@yourdomain.com?subject=${encodeURIComponent(
        "Guided Breathing — Contact"
      )}&body=${encodeURIComponent(
        `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`
      )}`;
      return;
    }

    try {
      setStatus("loading");
      const res = await fetch(FORMSPREE, { method: "POST", body: data, headers: { Accept: "application/json" } });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <Wrap>
      <Header>
        <Eyebrow>Get in touch</Eyebrow>
        <h1>Contact</h1>
        <p>Questions, collaborations, or coaching inquiries—send a message and I’ll reply within 24 hours.</p>
      </Header>

      <Card aria-labelledby="contact-heading">
        <Aura />
        <form onSubmit={onSubmit}>
          <h2 id="contact-heading">Send a message</h2>

          <Field>
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" autoComplete="name" required />
          </Field>

          <Field>
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" autoComplete="email" required />
          </Field>

          <Field>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="6" required />
          </Field>

          <Actions>
            <Button type="submit" disabled={status === "loading"}>
              {status === "loading" ? "Sending…" : "Send message"}
            </Button>
            {status === "success" && <Note role="status">Thanks! I’ll get back to you shortly.</Note>}
            {status === "error" && <Note $error role="alert">Something went wrong. Please try again.</Note>}
          </Actions>
        </form>
      </Card>

      <SmallPrint>
        Prefer email? <a href="mailto:diederikbervoets@gmail.com">diederikbervoets@gmail.com</a>
      </SmallPrint>
    </Wrap>
  );
};

export default ContactPage;

/* ---------------- styles ---------------- */

const CREAM = "#f3e5ce";

const Wrap = styled.main`
  min-height: 100svh;
  background: linear-gradient(180deg, ${CREAM} 0%, #ffffff 100%);
  padding: clamp(4rem, 8vw, 6rem) 1rem 4rem;
  color: #0b0d10;
`;

const Header = styled.header`
  max-width: 840px;
  margin: 0 auto 1.5rem;
  text-align: center;

  h1 {
    font-size: clamp(2rem, 4.5vw, 3rem);
    line-height: 1.1;
    margin: .25rem 0 .5rem;
  }
  p {
    margin: 0 auto;
    max-width: 640px;
    color: #374151;
  }
`;

const Eyebrow = styled.span`
  display: inline-block;
  font-size: .8rem;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: #6b7280;
`;

const shimmer = keyframes`
  from { background-position: 0% 0%; }
  to   { background-position: 200% 0%; }
`;

const Card = styled.section`
  position: relative;
  max-width: 860px;
  margin: 0 auto;
  padding: clamp(1rem, 2.5vw, 1.5rem);
  border-radius: 18px;
  background: rgba(255,255,255,0.75);
  border: 1px solid rgba(17,19,24,0.06);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 20px 50px rgba(0,0,0,0.08);
  overflow: hidden;

  form { display: grid; gap: 1rem; }
  h2 { font-size: clamp(1.25rem, 2.5vw, 1.6rem); margin: .25rem 0 .25rem; }
`;

const Aura = styled.div`
  pointer-events: none;
  position: absolute; inset: -40%;
  background: radial-gradient(50% 40% at 15% 10%, rgba(238,29,82,.12) 0%, transparent 60%),
              radial-gradient(60% 45% at 90% 20%, rgba(105,201,208,.14) 0%, transparent 60%),
              radial-gradient(40% 30% at 50% 90%, rgba(35,217,151,.10) 0%, transparent 60%);
  filter: blur(30px);
  animation: ${shimmer} 16s linear infinite;
  background-size: 200% 100%;
  z-index: 0;
`;

const Field = styled.div`
  display: grid;
  gap: .4rem;
  position: relative;
  z-index: 1;

  label { font-weight: 600; font-size: .95rem; color: #111; }
  input, textarea {
    width: 100%;
    padding: .85rem 1rem;
    border-radius: 12px;
    border: 1px solid rgba(17,19,24,0.12);
    background: rgba(255,255,255,0.9);
    outline: none;
    font-size: 1rem;
    color: #0b0d10;
    transition: border-color .15s ease, box-shadow .15s ease, background .2s ease;
  }
  textarea { resize: vertical; }

  input:focus, textarea:focus {
    border-color: rgba(35,217,151,.8);
    box-shadow: 0 0 0 4px rgba(35,217,151,.15);
    background: #fff;
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: .75rem;
  flex-wrap: wrap;
  margin-top: .25rem;
`;

const Button = styled.button`
  cursor: pointer;
  border: 1px solid rgba(0,0,0,.08);
  border-radius: 12px;
  padding: .85rem 1.15rem;
  font-weight: 800;
  color: #0b0d10;
  background: linear-gradient(180deg, #fff, #f7fafc);
  box-shadow: 0 10px 26px rgba(0,0,0,.12);
  transition: transform .15s ease, box-shadow .2s ease, background .2s ease, opacity .2s ease;

  &:hover { transform: translateY(-1px); box-shadow: 0 14px 34px rgba(0,0,0,.16); }
  &:disabled { opacity: .6; cursor: default; transform: none; box-shadow: 0 10px 26px rgba(0,0,0,.12); }
`;

const Note = styled.div`
  font-size: .95rem;
  color: ${({ $error }) => ($error ? "#b91c1c" : "#065f46")};
`;
const SmallPrint = styled.p`
  text-align: center; margin-top: 1rem; color: #6b7280;
  a { color: #0b0d10; font-weight: 700; text-decoration: underline; }
`;
