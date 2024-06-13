import { motion } from "framer-motion";

function AnimatedSection() {
  return (
    <motion.section
      className="max-w-6xl mx-auto my-0"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="w-2/5 md:py-24 py-24 md:ml-0 ml-12 absolute top-0">
        <h1 className="text-white text-4xl mb-4 tracking-wide">
          Transforming Lives through Digital Excellence
        </h1>
        <p className="text-white mb-7 tracking-wide leading-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
          molestias est quaerat nisi numquam voluptas, deserunt libero, laborum
          repudiandae officia ratione nam totam veniam quos perspiciatis.
          Dolorum qui dolorem quam!
        </p>
        <div className="">
          <button className="text-white mix-blend-lighten bg-orange-500 px-4 py-2 rounded-full text-sm font-semibold">
            Get Started
          </button>
        </div>
      </div>
    </motion.section>
  );
}

export default AnimatedSection;
