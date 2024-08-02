import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./index.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import HomePage from "./pages/HomePage";
import MainContent from "./pages/MainContent";
import LoginPage from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import NotFound from "pages/NotFound";
import TrendingMovie from "./pages/TrendingMovie";
import HighRated from "./pages/HighRated";
import MovieDetails from "./pages/MovieDetails";
import GenreMovies from "pages/GenreMovies";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/MainContent" element={<MainContent />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/TrendingMovie" element={<TrendingMovie />} />
            <Route path="/HighRated" element={<HighRated />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/genre/:genreId" element={<GenreMovies />} />
          </Routes>
        </main>
        <ConditionalFooter />
      </div>
    </Router>
  );
}

function ConditionalFooter() {
  const location = useLocation();

  const routesWithoutFooter = [
    "/MainContent",
    "/TrendingMovie",
    "/HighRated",
    "/movie",
    "/genre",
    "*",
  ];

  const shouldHideFooter = routesWithoutFooter.some((route) => {
    if (route === "*") {
      return (
        location.pathname.includes("/movie/") ||
        location.pathname.includes("/genre/")
      );
    }
    return location.pathname.startsWith(route);
  });

  if (shouldHideFooter) {
    return null;
  }

  return <Footer />;
}

export default App;
