export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen max-h-[768px] w-full overflow-hidden"
    >
      {/* Hero background */}
      <div className="absolute inset-0 bg-cover bg-center bg-[url('/hero.jpg')]"></div>

      {/* Overlay  */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center px-4 max-w-xl mx-auto">
          <h2
            className="font-bold text-gold-accent text-shadow-lg text-shadow-dark-base
            text-2xl xs:text-3xl sm:text-4xl md:text-5xl leading-tight md:leading-tight lg:leading-tight
            "
          >
            Welcome to Typeout
          </h2>
          <p className="mt-3 sm:mt-4 text-base xs:text-lg md:text-xl lg:text-2xl text-light-gray">
            Dive into stories, insights, and inspiration from the world of
            technology, coding, and creativity.
          </p>
          <button className="cursor-pointer mt-5 sm:mt-6 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base bg-gold-accent text-dark-base font-semibold rounded-lg hover:bg-gold-accent/90 transition-colors">
            Explore Articles
          </button>
        </div>
      </div>
    </section>
  );
}
