import React from 'react';

const Footer = () => {
  return (
    <footer className="py-4 text-center" style={{ backgroundColor: 'purple', color: 'white', marginTop: '10px' }}>
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Travel Buddy
      </p>
      <p className="text-sm mt-1">Unlock Adventure, One Trip at a Time</p>
    </footer>
  );
};

export default Footer;