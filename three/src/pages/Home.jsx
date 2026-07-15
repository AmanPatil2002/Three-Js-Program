
import Hero from '../components/Hero';

function Home() {

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-screen max-h-800px min-h-600px overflow-hidden">
        {/* Three.js Background */}
        <div className="absolute inset-0 z-0">
          <Hero />
        </div>
        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col items-left h-full px-4 pt-70">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-left">
            Chill Drinks
            <span className="block text-2xl md:text-3xl text-blue-300 mt-4 font-light">
              For Every Occasion
            </span>
          </h1>
          <p className="text-xl text-blue-100/60 max-w-2xl">
            Experience the art of perfectly chilled beverages in a sophisticated atmosphere
          </p>
        </div>
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-slate-900 z-1"></div>
      </section>
      {/* Features Section */}
      <section className="relative z-10 px-4 py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our <span className="text-blue-400">Specialties</span>
            </h2>
            <p className="text-blue-100/60 max-w-2xl mx-auto">
              Crafted with precision, served with passion
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;