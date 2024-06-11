import Courses from "../components/Courses";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

export default function IndexPage() {
  return (
    <div className="bg-blue-100">
      <Hero />
      <Courses />
      <Footer />
    </div>
  );
}
