import React, { useState, useEffect } from "react";
import logo from "assets/g-logo.png";
import SearchBar from "./SearchBar";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import { auth, signOut } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import defaultProfilePic from "assets/person.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown state
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setModalMessage("Sign out successful!");
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
        navigate("/login");
      }, 1000);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  return (
    <>
      <nav className="bg-gradient-to-b from-cl-1 to-cl-6 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
              <span className="font-semibold text-slate-300 text-lg">
                Gmovies
              </span>
            </div>
            <div className="hidden md:flex md:flex-1 md:justify-center">
              <div className="flex items-baseline space-x-4 ml-2 mr-2">
                <Link
                  to="/"
                  className="text-slate-300 hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/MainContent"
                  className="text-slate-300 hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Browse
                </Link>
                <Link
                  to="/Download"
                  className="text-slate-300 hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Download
                </Link>
              </div>
            </div>
            <div className="hidden md:flex items-center">
              <SearchBar />
              {user ? (
                <div className="relative ml-3">
                  <img
                    src={user.photoURL || defaultProfilePic}
                    alt="Profile"
                    className="w-8 h-8 rounded-full cursor-pointer"
                    onClick={toggleDropdown}
                  />
                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      >
                        Your Profile
                      </Link>
                      <Link
                        to="/settings"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      >
                        Settings
                      </Link>
                      <button
                        onClick={handleSignOut}
                        className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                      >
                        Sign Out
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link to="/login">
                  <button className="ml-3 bg-cl-2 text-white px-4 py-2 rounded-lg hover:bg-cl-4 transition duration-300">
                    Login
                  </button>
                </Link>
              )}
            </div>
            <div className="flex md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="bg-transparent inline-flex items-center justify-center p-2 rounded-md text-slate-300 hover:text-gray-400"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/"
                className="text-slate-300 hover:text-gray-400 block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </Link>
              <Link
                to="/MainContent"
                className="text-slate-300 hover:text-gray-400 block px-3 py-2 rounded-md text-base font-medium"
              >
                Browse
              </Link>
              <Link
                to="/Download"
                className="text-slate-300 hover:text-gray-400 block px-3 py-2 rounded-md text-base font-medium"
              >
                Download
              </Link>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-700">
              <Link
                to="/ImageMovie"
                className="text-slate-300 hover:text-gray-400 block px-3 py-2 rounded-md text-base font-medium"
              >
                Trending
              </Link>
              <Link
                to="/HighRated"
                className="text-slate-300 hover:text-gray-400 block px-3 py-2 rounded-md text-base font-medium"
              >
                High Rated
              </Link>
              <hr className="border-gray-700 pt-4 pb-3 border-t" />
              <div className="flex items-center px-5">
                <SearchBar />
              </div>
              <div className="mt-3 px-2">
                {user ? (
                  <button
                    onClick={handleSignOut}
                    className="w-full bg-cl-2 text-white px-4 py-2 rounded-lg hover:bg-cl-4 transition duration-300"
                  >
                    Sign Out
                  </button>
                ) : (
                  <Link to="/login">
                    <button className="w-full bg-cl-2 text-white px-4 py-2 rounded-lg hover:bg-cl-4 transition duration-300">
                      Login
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Modal Notification */}
      {showModal && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50">
          {modalMessage}
        </div>
      )}
    </>
  );
};

export default Header;
