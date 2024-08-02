import React from "react";
import { Link } from "react-router-dom";
import bgMovie from "assets/anim.jpg";
import compositeImage from "assets/comt.png";
import phoneImage from "assets/phpic.png";
import { FaGlobe } from "react-icons/fa";
import { FaFilm } from "react-icons/fa";
import { FaFreeCodeCamp } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-gradient-to-b from-cl-6 to-cl-7 rounded-lg shadow-md p-6 mb-4">
    {Icon && <Icon className="text-cl-2 text-4xl mb-4" />}{" "}
    {/* Render the icon */}
    <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
    <p className="text-white">{description}</p>
  </div>
);

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative py-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${bgMovie})`,
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Discover Amazing Content
            </h1>
            <p className="text-xl mb-8">
              Stream your favorite movies and shows for free
            </p>
            <Link to="/MainContent" className="inline-block">
              <button className="bg-transparent border border-cl-4 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-cl-2 hover:bg-opacity-50 transition duration-300">
                Start Watching
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-16 bg-gradient-to-b from-cl-7 to-cl-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
            <FeatureCard
              icon={FaGlobe}
              title="Works Worldwide"
              description="No other free streaming service delivers more content to and from more countries worldwide."
            />
            <FeatureCard
              icon={FaFilm}
              title="Thousands of Titles"
              description="Choose from movies, shows, sports and music documentaries, AMC series, Live TV and more."
            />
            <FeatureCard
              icon={FaFreeCodeCamp}
              title="Always 100% Free"
              description="Welcome to instant gratification at its best. Watch now without any payment or subscription and end the search for free movie websites."
            />
            <FeatureCard
              icon={FaMobileAlt}
              title="Device-Friendly"
              description="Stream the good stuff from your favorite devices including Apple, Android, Smart TVs and more."
            />
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-b from-cl-6 to-cl-3 min-h-screen p-8 flex items-center">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
          {/* Left Section */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-white text-4xl lg:text-5xl font-bold mb-4">
              See what's new on Gmovies
            </h1>
            <p className="text-white mb-6">
              Select your favorite streaming services to discover more, search
              faster, and get curated recommendations—all without ever leaving
              Plex. Connect with friends to see who's watching what, where.
            </p>
            <button className="bg-cl-2 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-cl-4 transition duration-300">
              Discover More Now
            </button>
          </div>

          {/* Right Section - Composite Image */}
          <div className="lg:w-1/2">
            <img
              src={compositeImage}
              alt="Movie recommendations and streaming services"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-cl-3 to-cl-6 flex flex-col md:flex-row items-center justify-between min-h-screen bg-gray-100 px-4 md:px-16">
        {/* Left Section */}
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <img
              src={phoneImage}
              alt="Phone Screen"
              className="relative w-80 md:w-96"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 text-center md:text-left p-4 md:p-8 lg:p-16">
          <h1 className="text-white text-3xl md:text-4xl font-bold mb-4">
            It has never been easier to watch free movies online.
          </h1>
          <p className="text-white mb-6">
            Once you register for a free account with Plex, we’ll keep your
            place from screen to screen as long as you’re signed in. No matter
            what device you choose, your free movies will pick up where you left
            off with ease.
          </p>
          <button className="bg-cl-2 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-cl-4 transition duration-300">
            Watch Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
