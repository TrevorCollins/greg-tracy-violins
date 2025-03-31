import React from "react";

const Footer = () => {
  return (
    <footer className="w-full text-red h-15 min-h-15 flex flex-col justify-end p-4 text-xs">
      <p className="text-orange text-center">
        &copy; {new Date().getFullYear()} Gregory Beckmann Tracy. All rights
        reserved.
      </p>
      <p className="text-orange text-center">
        Violin making and restoration in Pittsburgh, PA
      </p>
    </footer>
  );
};

export default Footer;
