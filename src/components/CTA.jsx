import React from "react";

const CTA = () => {
  return (
    <section className="bg-blue-600 text-white py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Ingin Bergabung dengan Komunitas Kami?</h2>
        <p className="mb-6">Bergabunglah untuk berbagi karya dan inspirasi bersama pemuda lainnya.</p>
        <a
          href="#join"
          className="bg-yellow-300 text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition"
        >
          Bergabung Sekarang
        </a>
      </div>
    </section>
  );
};

export default CTA;
