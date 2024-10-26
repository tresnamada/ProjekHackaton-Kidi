import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send email)
    console.log({ name, email, message });
    // Reset form
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className=" mx-auto p-6 bg-white shadow-lg rounded-lg mb-32 w-full">
      <h2 className="text-2xl font-bold text-center mb-6">Formulir Kontak</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-2xl font-medium text-gray-700 mb-1">Nama:</label>
          <input
            type="text"
            placeholder="Masukkan Nama Anda"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-150 ease-in-out"
            required
          />
        </div>
        <div>
          <label className="block text-2xl font-medium text-gray-700 mb-1">Email:</label>
          <input
            type="email"
            placeholder="Masukkan Email Anda"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-150 ease-in-out"
            required
          />
        </div>
        <div>
          <label className="block text-xl font-medium text-gray-700 mb-1">Pesan:</label>
          <textarea
            value={message}
            placeholder="Masukkan Pesan Anda"
            onChange={(e) => setMessage(e.target.value)}
            className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-150 ease-in-out"
            rows="4"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-150 ease-in-out"
        >
          Kirim Pesan
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
