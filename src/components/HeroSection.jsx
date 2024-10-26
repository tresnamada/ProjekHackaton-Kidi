import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white h-screen flex items-center ">
      <div className="container mx-auto px-6 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Kreva <br /> <span className="text-yellow-300">Menyuarakan Semangat Pemuda</span>
        </h1>
        <p className="text-lg md:text-xl mb-6">
         Eksresikan karya seni dan berbagi inspirasi di antara seniman muda!
        </p>
        <a
          href="#gallery"
          className="bg-yellow-300 text-blue-900 mt-6 px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition"
        >
          Jelajahi Karya
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
