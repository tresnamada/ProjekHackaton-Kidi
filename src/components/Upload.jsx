import React, { useState } from "react";

const UploadForm = () => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [privacy, setPrivacy] = useState("public");

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log({
      image,
      title,
      description,
      category,
      privacy,
    });
  };

  return (
    <div className="container mx-auto p-4 w-full bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-bold mb-4 text-center">Unggah Karya</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Unggah Gambar:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="border border-gray-300 rounded-md p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Judul Karya:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Deskripsi:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-full"
            rows="4"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Kategori:</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-full"
            required
          >
            <option value="" disabled>Pilih Kategori</option>
            <option value="lukisan">Lukisan</option>
            <option value="ilustrasi-digital">Ilustrasi Digital</option>
            <option value="fotografi">Fotografi</option>
            {/* Tambahkan kategori lainnya sesuai kebutuhan */}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Pengaturan Privasi:</label>
          <div>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="public"
                checked={privacy === "public"}
                onChange={(e) => setPrivacy(e.target.value)}
                className="mr-2"
              />
              Publik
            </label>
            <label className="inline-flex items-center ml-4">
              <input
                type="radio"
                value="community"
                checked={privacy === "community"}
                onChange={(e) => setPrivacy(e.target.value)}
                className="mr-2"
              />
              Komunitas Saja
            </label>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Panduan Karya:</h3>
          <p className="text-sm text-gray-600">
            1. Pastikan karya Anda adalah asli dan bukan hasil plagiarisme.<br />
            2. Karya harus sesuai dengan tema yang ditetapkan.<br />
            3. Gambar harus jelas dan tidak buram.
            {/* Tambahkan panduan lainnya sesuai kebutuhan */}
          </p>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Unggah Karya
        </button>
      </form>
    </div>
  );
};

export default UploadForm;
