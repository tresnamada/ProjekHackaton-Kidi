import React from "react";
import Lukisan from "../asset/Lukisan.jpg";

const GalleryHighlight = () => {
  const sampleArtworks = [
    { id: 1, title: "Karya 1", imageUrl: "/path/to/image1.jpg" },
    { id: 2, title: "Karya 2", imageUrl: "/path/to/image2.jpg" },
    { id: 3, title: "Karya 3", imageUrl: "/path/to/image3.jpg" },
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Highlight Karya Seni</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sampleArtworks.map((art) => (
            <div key={art.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={Lukisan} alt={art.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{art.title}</h3>
              
<div className="mt-4">
  <h4 className="text-lg font-semibold">Komentar dan Rating</h4>
  <div className="mt-2">
    <input
      type="text"
      placeholder="Tambahkan komentar..."
      className="border p-2 rounded-lg w-full mb-2"
    />
    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg mb-4">
      Kirim Komentar
    </button>
  </div>
  <p className="text-sm font-bold">Rating: 🌟🌟🌟🌟🌟</p>
</div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryHighlight;
