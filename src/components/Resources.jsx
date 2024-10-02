import React from 'react';

const Resources = () => {
  const postmanLink = "https://www.postman.com/security-specialist-55932751/twiddle/collection/7wns20d/twiddle?action=share&creator=37681364";
  const githubLink = "https://github.com/aqibowais/Twiddle";

  return (
    <div className="p-6 rounded-lg shadow-md mb-6 dark:text-gray-200" id='#resources'>
      <h2
        className="text-3xl font-extrabold mb-4 text-gray-800"
        id="resources"
      >
        🔗 Twiddle's Tiny Treasures!
      </h2>
      <p className="text-lg text-gray-800 mb-4">
        Jump into our snappy resources and watch your links shrink in style! ✂️✨
      </p>
      <div className="space-y-3">
        <a
          href={postmanLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block py-3 px-5 text-lg text-white bg-blue-500 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md"
        >
          🚀 Explore Postman Collection
        </a>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block py-3 px-5 text-lg text-white bg-gray-800 rounded-lg hover:bg-gray-800 transition duration-300 shadow-md"
        >
          📦 Check Out GitHub Repository
        </a>
      </div>
      <p className="mt-4 text-lg text-gray-800">
        ⭐️ Love what we're twiddling with? Give us a star on GitHub! Your support is the spark to our shrink magic! ✨🎉
      </p>
    </div>
  );
};

export default Resources;
