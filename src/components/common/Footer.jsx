import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-cl-6 to-cl-1 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <div className="hidden md:flex flex-wrap justify-center space-x-6 mb-4">
          <a href="/" className="hover:underline">
            Home
          </a>
          <a href="explore" className="hover:underline">
            Explore
          </a>
          <a href="about" className="hover:underline">
            About
          </a>
          <a href="faq" className="hover:underline">
            FAQ
          </a>
          <a href="press" className="hover:underline">
            Press
          </a>
          <a href="blog" className="hover:underline">
            Blog
          </a>
          <a href="contact" className="hover:underline">
            Contact
          </a>
          <a href="jobs" className="hover:underline">
            Jobs
          </a>
        </div>

        {/* Separator Line */}
        <hr className="border-gray-600 mb-4" />

        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between text-center">
          <p className="text-sm mb-2 md:mb-0">
            &copy; {new Date().getFullYear()} Gmovies, Inc. All Rights Reserved.
          </p>
          <div className="flex items-center space-x-2 text-sm mt-2 md:mt-0">
            <a href="#privacy" className="hover:underline">
              Privacy
            </a>
            <span>•</span>
            <a href="#terms" className="hover:underline">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
