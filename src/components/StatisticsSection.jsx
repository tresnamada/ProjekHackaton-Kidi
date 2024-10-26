import React, { useState, useEffect } from "react";

const StatisticsSection = () => {
  const [artists, setArtists] = useState(0);
  const [artworks, setArtworks] = useState(0);
  const [community, setCommunity] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setArtists((prev) => (prev < 500 ? prev + 5 : 500));
      setArtworks((prev) => (prev < 1200 ? prev + 10 : 1200));
      setCommunity((prev) => (prev < 300 ? prev + 3 : 300));
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-8">Kami Mencapai</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-4xl font-semibold text-blue-600">{artists}+</h3>
            <p>Seniman Terdaftar</p>
          </div>
          <div>
            <h3 className="text-4xl font-semibold text-blue-600">{artworks}+</h3>
            <p>Karya Seni</p>
          </div>
          <div>
            <h3 className="text-4xl font-semibold text-blue-600">{community}+</h3>
            <p>Komunitas Aktif</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
