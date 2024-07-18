import { Route, Routes } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import Layout from "./components/Layout";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CoursePage from "./pages/CoursePage";
import CourseSingle from "./pages/CourseSingle";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<IndexPage />} />
        <Route path="/courses" element={<CoursePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/course/:id/:name" element={<CourseSingle />} />
        <SpeedInsights />
      </Route>
    </Routes>
  );
}

export default App;
