"use client";

const About = () => {
  return (
    <div style={{ background: "#f0f0f0", padding: "20px", marginTop: "20px" }}>
      <h2>About Component (Lazy Loaded)</h2>
      <p>This part of the page is loaded only when needed!</p>
    </div>
  );
};

export default About;
