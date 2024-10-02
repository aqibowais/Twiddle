import axios from "axios";
import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import "remixicon/fonts/remixicon.css";
import { ToastContainer, toast } from "react-toastify";
import CopyButton from "./CopyButton";

const Hero = () => {
  const [twiddle, setTwiddle] = useState({
    originalUrl: "",
    shortenedUrl: "",
    qr: "",
  });
  const [loading, setLoading] = useState(false);
  const domain = "https://twiddle-ten.vercel.app";

  const validateUrl = (url) => {
    const regex = /^(ftp|http|https):\/\/[^ "]+$/;
    return regex.test(url);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData(e.target);
    const url = data.get("link");

    if (!validateUrl(url)) {
      toast.error("Please enter a valid URL.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(`${domain}/crunch`, { url }); //store url
      const qrCodeResponse = await axios.get(
        `${domain}/qryptic/${encodeURIComponent(url)}`
      ); //get qr code

      setTwiddle((prev) => ({
        ...prev,
        originalUrl: response.data.originalUrl,
        shortenedUrl: `${response.data.shortUrl}`,
        qr: qrCodeResponse.data.qrCode,
      }));
      toast.success("URL shortened successfully!");
    } catch (error) {
      toast.error("Error processing your request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="bg-white flex flex-col lg:flex-row lg:px-5 w-screen"
      id="#home"
    >
      <div className="grid w-full items-center h-max px-5 md:px-20 py-8 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <a
            href="#"
            className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-blue-50 rounded-full dark:text-white hover:bg-gray-200"
            role="alert"
          >
            <span className="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 mr-3">
              New
            </span>
            <span className="text-sm font-medium text-blue-800">
              Twiddle API is here! Discover the magic ✨
            </span>
            <i className="text-black ri-arrow-right-s-line"></i>
          </a>

          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
            🔗 Twiddle: Snap Your Links into Bite-Sized Brilliance ⚡
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
            🌍 Tired of URLs stretching longer than a scroll through your
            socials? With Twiddle, every link is transformed into a tiny,
            shareable work of art. ✨ It's quick, it's clean, and yes—it even
            fits in a fortune cookie. 🍪 Let's make those links short, sweet,
            and effortlessly chic! 🚀
          </p>

          <div className="flex flex-col sm:flex-row">
            <a
              href="#docs"
              className="overflow-hidden w-max p-5 bg-black text-white border-none rounded-full text-xl font-bold cursor-pointer relative z-10 group"
            >
              Explore API 🔮
              <span className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
              <span className="absolute w-36 h-32 -top-8 -left-2 bg-blue-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
              <span className="absolute w-44 h-48 -top-8 -left-2 bg-blue-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
              <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-5 left-14 z-10">
                Explore!
              </span>
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 lg:flex mt-10 lg:mt-0">
          <form
            onSubmit={handleSubmit}
            className="border-gray-300 border h-max p-4 md:p-6 rounded-2xl w-full space-y-4"
          >
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              🔗 Shorten Your Link
            </h2>
            <input
              type="text"
              name="link"
              placeholder="Enter your long URL here..."
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              defaultValue="https://"
              required
            />
            <button
              type="submit"
              className={`w-full px-4 md:px-5 py-3 text-white rounded-lg focus:outline-none transition duration-300 ${
                loading
                  ? "bg-gray-500"
                  : "bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-500"
              }`}
              disabled={loading}
            >
              {loading ? "🔪 Snipping it..." : "✂️ Twiddle it!"}
            </button>

            {twiddle.originalUrl && (
              <div className="flex flex-col md:flex-row justify-around mt-6 gap-4 space-y-6 md:space-y-0">
                <div className="flex flex-col items-center">
                  {twiddle.qr && (
                    <img
                      src={twiddle.qr}
                      alt="QR Code"
                      className="my-2 rounded shadow-md w-48 h-48 md:w-36 md:h-36"
                    />
                  )}
                  <a
                    href={twiddle.qr}
                    download="twiddle-qr.png"
                    className="bg-gray-200 text-center w-40 rounded-2xl h-14 relative text-black text-xl font-semibold group"
                  >
                    <div className="bg-blue-600 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[150px] z-10 duration-500">
                      <i className="text-white ri-arrow-right-line"></i>
                    </div>
                    <p className="translate-x-2 translate-y-3">Download</p>
                  </a>
                </div>

                <div className="w-full md:w-[70%] p-6 md:p-0 flex flex-col justify-center space-y-4">
                  <div>
                    <p className="text-lg font-semibold text-gray-800">
                      Your Original URL:
                    </p>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-5">
                      <a
                        href={twiddle.originalUrl}
                        className="text-gray-700 underline break-all mt-1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {twiddle.originalUrl.length > 50
                          ? `${twiddle.originalUrl.substring(0, 50)}...`
                          : twiddle.originalUrl}
                      </a>
                      <div>
                        <CopyButton code={twiddle.originalUrl} />
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-lg font-semibold text-gray-800">
                      Your Shortened URL:
                    </p>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full">
                      <a
                        href={twiddle.shortenedUrl}
                        className="text-blue-600 underline break-all mt-1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {twiddle.shortenedUrl}
                      </a>
                     <div>
                      <CopyButton code={twiddle.shortenedUrl} />
                     </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </section>
  );
};

export default Hero;
