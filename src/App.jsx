import { Route, Routes } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import Layout from "./components/Layout";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<IndexPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Route>
    </Routes>
  );
}

export default App;
