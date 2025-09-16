import React from 'react';
import { Heart, Star, Clock, Award } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Heart,
      title: 'Atendimento Personalizado',
      description: 'Cada cliente recebe um cuidado único e especial'
    },
    {
      icon: Star,
      title: 'Técnicas Avançadas',
      description: 'Métodos modernos e inovadores para resultados excepcionais'
    },
    {
      icon: Clock,
      title: 'Ambiente Confortável',
      description: 'Espaço acolhedor e relaxante para sua experiência'
    },
    {
      icon: Award,
      title: 'Resultados Duradouros',
      description: 'Qualidade garantida com efeito prolongado'
    }
  ];

  return (
    <section id="why-choose" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Por que escolher o nosso estúdio?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Excelência em cada detalhe para sua satisfação completa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="bg-amber-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce">
                  <IconComponent size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-amber-100">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;