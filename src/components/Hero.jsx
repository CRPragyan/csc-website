import AnimatedSection from "./AnimatedSection";
import Crousel from "./Crousel";
import TypingAnimation from "./TypingAnimation";

function Hero() {
  return (
    <div>
      <div className="bg-gradient-to-r from-gray-900 to-gray-600   w-100% md:h-[680px] h-[480px]  relative">
        {/* <img
          className="absolute w-full h-full object-top object-cover mix-blend-overlay"
          src="https://images.unsplash.com/photo-1565598621680-94ac0c22b148?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        /> */}
        <Crousel />
        <section className="max-w-6xl mx-auto my-0">
          <div className="md:w-2/5 w-4/5 md:py-24  md:ml-0 ml-12 absolute md:top-[20%] top-[10%]">
            <h1 className="text-white md:text-5xl text-3xl mb-4 tracking-wide leading-12">
              Transforming Lives through Digital Excellence
            </h1>

            <p className="text-white text-sm mb-7 tracking-wide leading-7">
              The mission of Common Service Center, Basugaon is to make the
              entire community of this locality digitally literate and providing
              computer training to the students and unemployed youth with
              dedicated, talented, experienced teachers who motivate and
              energies the students to achieve the best.
            </p>
            <div className="">
              <button className="text-white mix-blend-lighten bg-orange-500 px-4 py-2 rounded-full text-lg hover:bg-orange-600 transition-all font-semibold">
                Get Started
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Hero;
