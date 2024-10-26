// App.jsx
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PageTransition from "./components/PageTransition";
import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";
import ForumPage from "./pages/ForumPage";
import CommunityFeed from "./components/CommunityFeed";
import Navbar from "./components/Navbar";

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <HomePage />
              </PageTransition>
            }
          />
          <Route
            path="/gallery"
            element={
              <PageTransition>
                <GalleryPage />
              </PageTransition>
            }
          />
          <Route
            path="/forum"
            element={
              <PageTransition>
                <ForumPage />
              </PageTransition>
            }
          />
          <Route
            path="/community-feed"
            element={
              <PageTransition>
                <CommunityFeed />
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
