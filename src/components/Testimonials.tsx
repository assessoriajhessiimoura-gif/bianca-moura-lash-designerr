import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: 'Maria Silva',
      rating: 5,
      text: 'Serviço excepcional! Meus cílios ficaram perfeitos e o atendimento foi maravilhoso. Super recomendo a Bianca!'
    },
    {
      name: 'Ana Paula',
      rating: 5,
      text: 'Profissional incrível! O resultado superou minhas expectativas. Ambiente acolhedor e técnica impecável.'
    },
    {
      name: 'Juliana Costa',
      rating: 5,
      text: 'Melhor investimento que fiz! Acordar com cílios perfeitos todos os dias não tem preço. Obrigada, Bianca!'
    },
    {
      name: 'Carla Mendes',
      rating: 5,
      text: 'Excelente profissional! Muito cuidadosa e atenciosa. O resultado é natural e lindo. Voltarei sempre!'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-rose-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            O que nossas clientes dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Depoimentos reais de quem confia em nosso trabalho
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                <Star key={i} className="text-amber-400 fill-current w-6 h-6" />
              ))}
            </div>
            
            <blockquote className="text-xl md:text-2xl text-gray-600 text-center mb-8 leading-relaxed">
              "{testimonials[currentSlide].text}"
            </blockquote>
            
            <div className="text-center">
              <p className="text-lg font-semibold text-gray-800">
                {testimonials[currentSlide].name}
              </p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft size={20} className="text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="Próximo depoimento"
          >
            <ChevronRight size={20} className="text-gray-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-amber-600' : 'bg-gray-300'
                }`}
                aria-label={`Ver depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;