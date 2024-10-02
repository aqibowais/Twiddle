import React from "react";

const Footer = () => {
  return (
    <footer className=" py-6 text-center">
      <div className="flex flex-col md:flex-row justify-center items-center">
        <span className="mr-2 text-lg md:text-xl font-semibold mb-2 md:mb-0">
          Made with{" "}
          <span
            role="img"
            aria-label="heart"
            className="text-red-500 animate-pulse"
          >
            ❤️
          </span>
        </span>
        <span className="text-lg md:text-xl font-semibold">
          by{" "}
          <a
            href="https://www.linkedin.com/in/aqibowais/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline transition duration-300 transform hover:scale-110"
          >
            Aqib
          </a>{" "}
          and{" "}
          <a
            href="https://www.linkedin.com/in/konain-raza-"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline transition duration-300 transform hover:scale-110"
          >
            Konain
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
