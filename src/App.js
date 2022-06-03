import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Layout from "./components/layout/Layout";
import Blocks from "./components/blocks/Blocks";
import Pages from "./components/pages/Pages";
import "./assets/sass/style.scss";

// Initialize AOS animation
AOS.init({
  duration: 1500,
  offset: 100,
});

function App() {
  return (
    // Use Routes to switch to the new component
    <>
      <Layout.Header />

      <Blocks.ScrollToTop />

      <Routes>
        <Route path="/" element={<Pages.Home />} />
        <Route path="/quran" element={<Pages.Quran />} />
      </Routes>

      <Layout.Footer />
    </>
  );
}

export default App;
