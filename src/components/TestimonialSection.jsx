import React from "react";

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Zakaria",
      role: "Seniman Digital",
      message: "Situs ini telah memberikan saya kesempatan untuk menunjukkan karya saya ke audiens yang lebih luas.",
    },
    {
      name: "Zakaria",
      role: "Fotografer",
      message: "Situs ini telah memberikan saya kesempatan untuk menunjukkan karya saya ke audiens yang lebih luas.",
    },
    {
      name: "Zakaria",
      role: "Pelukis",
      message: "Situs ini telah memberikan saya kesempatan untuk menunjukkan karya saya ke audiens yang lebih luas.",
    },
    {
      name: "Zakaria",
      role: "Pelukis",
      message: "Situs ini telah memberikan saya kesempatan untuk menunjukkan karya saya ke audiens yang lebih luas.",
    },
    {
      name: "Zakaria",
      role: "Pelukis",
      message: "Situs ini telah memberikan saya kesempatan untuk menunjukkan karya saya ke audiens yang lebih luas.",
    },
    {
      name: "Zakaria",
      role: "Pelukis",
      message: "Situs ini telah memberikan saya kesempatan untuk menunjukkan karya saya ke audiens yang lebih luas.",
    },
  ];

  return (
    <section className="py-16 bg-whit mb-12 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Apa Kata Pengguna Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
              <p className="text-lg font-semibold mb-2">"{testimonial.message}"</p>
              <p className="text-sm font-medium text-blue-600">{testimonial.name} - {testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
