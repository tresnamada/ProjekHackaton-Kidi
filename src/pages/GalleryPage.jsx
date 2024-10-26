import React, { useState } from "react";
import UploadForm from "../components/Upload";
import Lukisan from "../asset/Lukisan.jpg";
const artworks = [
  {
    id: 1,
    title: "Lukisan Alam",
    category: "Lukisan",
    imageUrl: "/path/to/image1.jpg",
    artist: {
      name: "Zhafran Kurniawan",
      bio: "Seniman digital berbasis di Jakarta.",
      portfolioLink: "https://instagram.com/trsnamada",
    },
  },
  {
    id: 2,
    title: "Fotografi Senja",
    category: "Fotografi",
    imageUrl: "/path/to/image2.jpg",
    artist: {
      name: "Kenta Lino",
      bio: "Fotografer alam dan budaya.",
      portfolioLink: "https://instagram.com/tresnamada",
    },
  },
  {
    id: 3,
    title: "Ilustrasi Digital",
    category: "Ilustrasi Digital",
    imageUrl: "/path/to/image3.jpg",
    artist: {
      name: "Talula Bayu",
      bio: "Ilustrator dengan gaya modern.",
      portfolioLink: "https://instagram.com/tresnamada",
    },
  },
];

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredArtworks = selectedCategory === "All"
    ? artworks
    : artworks.filter((art) => art.category === selectedCategory);

  return (
    <>
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Galeri Karya Seni</h2>

      {/* Filter Kategori */}
      <div className="flex justify-center space-x-4 mb-8">
        {["All", "Lukisan", "Fotografi", "Ilustrasi Digital"].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg ${
              selectedCategory === category
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Tampilan Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredArtworks.map((art) => (
          <div key={art.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={Lukisan} alt={art.title} className="w-full h-40 sm:h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{art.title}</h3>
              <p className="text-sm text-gray-500">{art.category}</p>
              <div className="mt-4">
                <h4 className="text-sm font-bold">Seniman: {art.artist.name}</h4>
                <p className="text-sm text-gray-600">{art.artist.bio}</p>
                <a
                  href={art.artist.portfolioLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Portofolio
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <UploadForm />
    </>
  );
};

export default GalleryPage;
