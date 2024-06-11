export default function IndexPage() {
  return (
    <div className="">
      <div className="bg-gradient-to-r from-gray-900 to-gray-500 relative h-96 w-full">
        <img
          className="absolute w-full h-full object-top object-cover mix-blend-overlay"
          src="https://images.unsplash.com/photo-1565598621680-94ac0c22b148?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />

        <section className=" z-10 rela">
          <div className="w-3/5 p-24">
            <h1 className="text-white text-4xl mb-4 tracking-wide">
              Transforming Lives through Digital Excellence
            </h1>
            <p className="text-white mb-4 tracking-wide leading-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
              molestias est quaerat nisi numquam voluptas, deserunt libero,
              laborum repudiandae officia ratione nam totam veniam quos
              perspiciatis. Dolorum qui dolorem quam!
            </p>
            <div className="">
              <button className="text-white mix-blend-lighten bg-orange-500 px-4 py-2 rounded-full text-sm font-semibold">
                Get Started
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
