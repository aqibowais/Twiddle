// Documentation.jsx
import React from "react";
import Code from "./Code";
import CodeSnippet from "./CodeSnippet";
import Resources from "./Resources";

const Documentation = () => {
  const domain = "https://twiddle-ten.vercel.app";

  return (
    <div className=" w-screen px-10 md:px-20 py-10" id="docs">
      <h1 className="text-4xl font-bold text-left text-gray-800 mb-8">
         API Documentation 🚀✨
      </h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          ⚙️ API Endpoints Overview
        </h2>

        <h3 className="text-xl font-semibold text-gray-600 mb-2">
          🔍 GET Methods: Retrieve Data
        </h3>
        <p className="text-black my-4 text-md">
          Use these endpoints to fetch information from the Twiddle API.
        </p>

        {/* GET /:shortUrl */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-xl text-gray-700">🔍 Retrieve Original URL</h4>
          <p className="text-black my-4 text-md">
            Lost in the maze of URLs? Provide a short URL to redirect back to its original path.
          </p>

          {/* <h4 className="font-semibold text-gray-700">Example:</h4> */}
          <Code req={"GET"} endpoint={`${domain}/:shortUrl`} />

          <h4 className="font-semibold text-gray-700 mt-4">Response:</h4>
          <CodeSnippet code={`Redirects to: https://example.com`} />

          <h4 className="font-semibold text-gray-700 mt-4">
            Example Code (Axios):
          </h4>
          <CodeSnippet
            code={`axios.get('${domain}/abcd1234')\n  .then(response => window.location.replace(response.data.originalUrl))\n  .catch(error => console.error('Couldn’t find that URL:', error));`}
          />
        </div>

        {/* GET /qryptic/:url */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-xl text-gray-700">📱 Generate QR Code</h4>
          <p className="text-black my-4 text-md">
            Convert your URLs into QR codes for easy scanning and sharing.
          </p>

          {/* <h4 className="font-semibold text-gray-700">Example:</h4> */}
          <Code req={"GET"} endpoint={`${domain}/qryptic/:url`} />

          <h4 className="font-semibold text-gray-700 mt-4">Response:</h4>
          <CodeSnippet
            code={JSON.stringify(
              {
                message: "Here’s your shiny new QR code!",
                qrCode: "data:image/png;base64,...",
              },
              null,
              2
            )}
          />

          <h4 className="font-semibold text-gray-700 mt-4">
            Example Code (Axios):
          </h4>
           <CodeSnippet
            code={`axios.get('https://twiddle-ten.vercel.app/qryptic/' + encodeURIComponent(originalUrl))\n  .then(response => console.log('QR Code generated!', response.data.qrCode))\n  .catch(error => console.error('Error generating QR code:', error));`}
          />
        </div>
        <h3 className="text-xl font-semibold text-gray-600 mb-2">

          ✉️ POST Methods: Send Data
        </h3>
        <p className="text-black my-4 text-md">
          Use these endpoints to send data to the Twiddle API.
        </p>

        {/* POST /crunch */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-xl text-gray-700">🔮 Shorten URL</h4>
          <p className="text-black my-4 text-md">
            Transform long URLs into short, shareable links effortlessly.
          </p>

          {/* <h4 className="font-semibold text-gray-700">Example:</h4> */}
          <Code req={"POST"} endpoint={`${domain}/crunch`} />
          <h4 className="font-semibold text-gray-700 my-4">Request Body:</h4>
          <CodeSnippet
            code={JSON.stringify({ url: "https://example.com" }, null, 2)}
          />

          <h4 className="font-semibold text-gray-700 mt-4">Response:</h4>
          <CodeSnippet
            code={JSON.stringify(
              {
                originalUrl: "https://example.com",
                shortUrl: "abcd1234",
                message: "Your short URL is ready!",
              },
              null,
              2
            )}
          />

          <h4 className="font-semibold text-gray-700 mt-4">
            Example Code (Axios):
          </h4>
          <CodeSnippet
            code={`axios.post('${domain}/crunch', { url: 'https://example.com' })\n  .then(response => console.log('Short URL created!', response.data))\n  .catch(error => console.error('Error creating short URL:', error));`}
          />
        </div>
      </section>
      <Resources/>
    </div>
  );
};

export default Documentation;
