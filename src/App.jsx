import { Route, Routes } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import Layout from "./components/Layout";
import AboutPage from "./pages/AboutPage";
import Footer from "./components/Footer";
import ContactPage from "./pages/ContactPage";
import CoursePage from "./pages/CoursePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<IndexPage />} />
        <Route path="/courses" element={<CoursePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}

export default App;
