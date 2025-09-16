import React from 'react';
import { MessageCircle, Award, Users, Clock } from 'lucide-react';

const Courses = () => {
  return (
    <section id="courses" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Course Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/images/WhatsApp Image 2025-09-13 at 18.55.53.jpeg"
                alt="Bianca Moura ensinando técnicas de extensão de cílios"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>

          {/* Course Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Cursos de Extensão de Cílios
            </h2>
            
            <p className="text-xl text-gray-600 mb-8">
              Cursos de Extensão de Cílios com Certificado
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center">
                <Award className="text-amber-600 w-6 h-6 mr-3" />
                <span className="text-gray-700">Certificado Reconhecido</span>
              </div>
              <div className="flex items-center">
                <Users className="text-amber-600 w-6 h-6 mr-3" />
                <span className="text-gray-700">Curso Vip</span>
              </div>
              <div className="flex items-center">
                <Clock className="text-amber-600 w-6 h-6 mr-3" />
                <span className="text-gray-700">Suporte Completo</span>
              </div>
              <div className="flex items-center">
                <Award className="text-amber-600 w-6 h-6 mr-3" />
                <span className="text-gray-700">Suporte Pos curso</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-rose-50 rounded-2xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                O que você vai aprender:
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Técnicas fio a fio e fios tecnologicos</li>
                <li>• alinhamento e Direcionamento</li>
                <li>• Cuidados e manutenção</li>
                <li>• Lista de materiais</li>
              </ul>
            </div>

            <a
              href="https://wa.me/553191028853?text=Olá! Gostaria de saber mais sobre os cursos de extensão de cílios e como me inscrever."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full inline-flex items-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg"
              aria-label="Inscrever-se nos cursos via WhatsApp"
            >
              <MessageCircle size={20} />
              Quero me inscrever
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
