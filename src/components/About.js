// src/components/About.js
import React from 'react';
import MyPhoto from '../assets/myphoto.jpg';

function About() {
  return (
    <section style={styles.container}>
      <h1 style={styles.title}>Noah Wilson</h1>
      <img 
        src={MyPhoto} 
        alt="Noah Wilson" 
        style={styles.photo}
      />
      <p style={styles.text}>
        I am a senior studying ECE at Cornell University. My passions involve physics, athletics, and reading. I'm looking forward to building cool robotics projects!
      </p>
      <p style={styles.text}>
        <strong>Class Number:</strong> ECE 4160 (Fast Robots)
      </p>
    </section>
  );
}

const styles = {
  container: {
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
    textAlign: 'center'
  },
  title: {
    fontSize: '2rem',
    marginBottom: '10px'
  },
  photo: {
    width: '200px',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '50%',
    margin: '20px 0'
  },
  text: {
    fontSize: '1.1rem',
    margin: '10px 0'
  }
};

export default About;
