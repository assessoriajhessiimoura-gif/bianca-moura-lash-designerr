import React from 'react';

const Services = () => {
  const serviceImages = [
    {
      src: '/images/WhatsApp Image 2025-09-13 at 18.55.49.jpeg',
      alt: 'Resultado de extensão de cílios - Volume perfeito',
      caption: 'Mega Volume'
    },
     {
      src: '/images/WhatsApp Image 2025-09-13 at 18.55.51.jpeg',
      alt: 'Resultado de extensão de cílios - Volume perfeito',
      caption: '(Volume Brasileiro)'
    },
    {
      src: '/images/WhatsApp Image 2025-09-13 at 18.55.50.jpeg',
      alt: 'Resultado de extensão de cílios - Volume perfeito',
      caption: 'fox'
    },
    {
      src: '/images/WhatsApp Image 2025-09-13 at 18.55.52.jpeg',
      alt: 'Resultado de extensão de cílios - Efeito natural',
      caption: 'Volume Brasileiro'
    },
      {
      src: '/images/WhatsApp Image 2025-09-13 at 18.55.52 (2).jpeg',
      alt: 'Resultado de extensão de cílios - Efeito natural',
      caption: 'Efeito Fox'
    },
    {
      src: '/images/WhatsApp Image 2025-09-13 at 18.55.54 (2).jpeg',
      alt: 'Resultado de extensão de cílios - Efeito natural',
      caption: 'Volume Express'
    },
     {
      src: '/images/WhatsApp Image 2025-09-13 at 18.55.50 (1).jpeg',
      alt: 'Resultado de extensão de cílios - Volume perfeito',
      caption: '(Mega Volume)'
    },
  ];

  const servicesList = [
    'Volume Brasileiro',
    'Volume Europeu',
    'Volume Express',
    'Efeito Fox',
    'Fio a fio',
    'Mega volume'
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Técnicas exclusivas para realçar sua beleza natural
          </p>
        </div>

        {/* Service Images Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {serviceImages.map((image, index) => (
            <div key={index} className="relative group overflow-hidden rounded-2xl shadow-lg">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  {image.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Services List */}
        <div className="bg-gradient-to-r from-amber-50 to-rose-50 rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Especialidades
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesList.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-amber-600 rounded-full mr-4"></div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    {service}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
