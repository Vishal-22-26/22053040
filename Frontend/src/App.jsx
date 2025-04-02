import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopUsers from "./pages/TopUsers";
import TrendingPosts from "./pages/TrendingPosts";
import Feed from "./pages/Feed";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Navbar />
        <main className="flex-grow p-6 container mx-auto">
          <Routes>
            <Route path="/" element={<TopUsers />} />
            <Route path="/trending" element={<TrendingPosts />} />
            <Route path="/feed" element={<Feed />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
