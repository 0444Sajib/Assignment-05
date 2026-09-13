import heroImage from "../assets/banner-stack.png";

function Hero() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left Content */}
          <div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Build Your Ideal
              <span className="block bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>

            <p className="mt-6 text-gray-600 text-lg leading-8 max-w-xl">
              Explore modern technologies and build your perfect development
              stack for your next project.
            </p>

            <div className="mt-8 flex gap-4">

              <button className="px-6 py-3 rounded-full text-white font-medium bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600">
                Explore Technologies
              </button>

              <button className="px-6 py-3 rounded-full border border-gray-300 font-medium">
                Learn More
              </button>

            </div>

          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src={heroImage}
              alt="Development technologies"
              className="w-full max-w-lg"
            />
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;
