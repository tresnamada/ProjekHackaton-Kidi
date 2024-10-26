// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6">
            <h3 className="text-lg font-semibold mb-2">Tentang Kami</h3>
            <p className="text-gray-400">
              Kami adalah perusahaan yang menyediakan solusi inovatif untuk kebutuhan Anda.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6">
            <h3 className="text-lg font-semibold mb-2">Kontak Kami</h3>
            <ul className="text-gray-400">
              <li>Email: info@perusahaan.com</li>
              <li>Telepon: +62 123 456 789</li>
              <li>Alamat: SigmaSkibidiHitam 40</li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-6">
            <h3 className="text-lg font-semibold mb-2">Sosial Media</h3>
            <ul className="text-gray-400 space-y-1">
              <li><a href="#" className="hover:text-white">Facebook</a></li>
              <li><a href="#" className="hover:text-white">Twitter</a></li>
              <li><a href="#" className="hover:text-white">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-8">
          &copy; 2024 Perusahaan Erlangga. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
