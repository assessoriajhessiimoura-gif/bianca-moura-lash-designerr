import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-rose-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Sobre mim
            </h2>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                Olá, eu sou a Bianca Moura, apaixonada pela arte de realçar a beleza natural através da extensão de cílios. 
                Há mais de 5 anos dedico minha vida a essa profissão que amo tanto.
              </p>
              
              <p className="text-lg">
                Minha jornada começou com o desejo de fazer outras mulheres se sentirem mais confiantes e bonitas. 
                Desde então, venho me especializando nas técnicas mais modernas e seguras do mercado.
              </p>
              
              <p className="text-lg">
                Acredito que cada olhar é único, por isso desenvolvo um trabalho personalizado para cada cliente, 
                respeitando o formato natural dos olhos e o estilo de vida de cada pessoa.
              </p>
              
              <p className="text-lg">
                Além de atender minhas clientes, também ensino outras profissionais através dos meus cursos, 
                compartilhando conhecimento e técnicas que aprendi ao longo da minha carreira.
              </p>
            </div>

            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-2xl font-bold text-amber-600 mb-2">500+</h3>
                <p className="text-gray-600">Clientes satisfeitas</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-2xl font-bold text-amber-600 mb-2">5+</h3>
                <p className="text-gray-600">Anos de experiência</p>
              </div>
            </div>
          </div>

          {/* About Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/images/WhatsApp Image 2025-09-11 at 00.55.57 (3).jpeg"
                alt="Bianca Moura - Especialista em extensão de cílios"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-amber-200 rounded-full opacity-70 animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-rose-200 rounded-full opacity-70 animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;