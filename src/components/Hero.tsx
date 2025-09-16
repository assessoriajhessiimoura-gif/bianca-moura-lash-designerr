import React from 'react';
import { MessageCircle, Calendar } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-100 to-amber-50">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              BIANCA MOURA
              <span className="block text-3xl md:text-4xl text-amber-600 font-light">
                LASH DESIGNER
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light">
             Realce sua beleza, sinta-se confiante. Agende agora e transforme o seu olhar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://wa.me/553191028853?text=Olá! Gostaria de saber mais sobre os serviços de extensão de cílios."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg"
                aria-label="Contato via WhatsApp"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>
              
              <a
                href="https://wa.me/553191028853?text=Olá! Gostaria de agendar um horário para procedimento de cílios."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg"
                aria-label="Agendar horário"
              >
                <Calendar size={20} />
                Agende Agora
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/images/WhatsApp Image 2025-09-13 at 18.55.54.jpeg"
                alt="Bianca Moura - Lash Designer profissional"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-amber-200 rounded-full opacity-70 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-rose-200 rounded-full opacity-70 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
