// src/components/Labs.js
import React from 'react';

function Labs() {
  return (
    <section style={styles.container}>
      <h1 style={styles.title}>Labs</h1>

      {/* Lab 1 */}
      <div style={styles.labItem}>
        <h2>Lab 1</h2>
        <p>
          
        </p>
      </div>

      {/* Lab 2 */}
      <div style={styles.labItem}>
        <h2>Lab 2</h2>
        <p>
          
        </p>
      </div>

      {/* Lab 3 */}
      <div style={styles.labItem}>
        <h2>Lab 3</h2>
        <p>
          
        </p>
      </div>

      {/* Add more labs as necessary */}
    </section>
  );
}

const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto'
  },
  title: {
    fontSize: '2rem',
    marginBottom: '20px',
    textAlign: 'center'
  },
  labItem: {
    border: '1px solid #ccc',
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '5px'
  }
};

export default Labs;
