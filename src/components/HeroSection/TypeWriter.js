import React, { useState, useEffect } from 'react';

const Typewriter = ({ strings, typeSpeed, delay }) => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (index >= strings.length) return; // Stop if all strings are typed

    const currentString = strings[index];
    const timer = setInterval(() => {
      setText(prev => prev + currentString[charIndex]);
      setCharIndex(prev => prev + 1);
    }, typeSpeed);

    if (charIndex >= currentString.length) {
      clearInterval(timer);
      setTimeout(() => {
        setCharIndex(0);
        setIndex(prev => prev + 1); // Move to the next string without clearing the text
      }, delay); // Delay before moving to next string
    }

    return () => clearInterval(timer); // Cleanup timer on unmount or update
  }, [charIndex, index, strings, typeSpeed, delay]);

  return <div>{text}</div>;
};

// Usage
const Bio = {
  roles: ["Innovative, personalized tech solutions designed to elevate your business."]
};

const App = () => (
  <Typewriter
    strings={Bio.roles}
    typeSpeed={50}
    delay={1000}
  />
);

export default App;
