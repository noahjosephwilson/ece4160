import React from 'react';
import './App.css'; // Optional: Keep if you want to add custom styles.

function App() {
    return (
        <div style={styles.container}>
            <header style={styles.header}>
                <h1 style={styles.title}>Noah Wilson</h1>
                <h2 style={styles.subtitle}>ECE 4160: Fast Robots</h2>
            </header>
            <main style={styles.main}>
                <div style={styles.intro}>
                    <p>
                        Hi! I'm Noah Wilson, an engineering student with a passion for robotics,
                        innovation, and creating fast and efficient systems. Welcome to my project
                        homepage for ECE 4160: Fast Robots!
                    </p>
                </div>
                <div style={styles.photoContainer}>
                    <img
                        src="https://via.placeholder.com/150" // Replace with the URL or path to your photo.
                        alt="Noah Wilson"
                        style={styles.photo}
                    />
                </div>
            </main>
        </div>
    );
}

const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        padding: '20px',
    },
    header: {
        backgroundColor: '#007BFF',
        color: 'white',
        padding: '10px',
        borderRadius: '8px',
        marginBottom: '20px',
    },
    title: {
        margin: '0',
        fontSize: '2.5rem',
    },
    subtitle: {
        margin: '0',
        fontSize: '1.5rem',
    },
    main: {
        maxWidth: '800px',
        margin: '0 auto',
    },
    intro: {
        marginBottom: '20px',
        fontSize: '1.2rem',
    },
    photoContainer: {
        display: 'flex',
        justifyContent: 'center',
    },
    photo: {
        borderRadius: '50%',
        width: '150px',
        height: '150px',
        objectFit: 'cover',
    },
};

export default App;
