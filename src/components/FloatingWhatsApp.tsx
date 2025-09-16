import React, { useState } from 'react';
import { MessageCircle, X, Calendar, GraduationCap, Info } from 'lucide-react';

const FloatingWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    {
      icon: Calendar,
      label: 'Agendar',
      message: 'Olá! Gostaria de agendar um horário para procedimento de cílios.',
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      icon: GraduationCap,
      label: 'Cursos',
      message: 'Olá! Gostaria de saber mais sobre os cursos de extensão de cílios.',
      color: 'bg-purple-500 hover:bg-purple-600'
    },
    {
      icon: Info,
      label: 'Informações',
      message: 'Olá! Gostaria de saber mais sobre os serviços oferecidos.',
      color: 'bg-amber-500 hover:bg-amber-600'
    }
  ];

  const handleOptionClick = (message: string) => {
    const whatsappUrl = `https://wa.me/553191028853?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Options Menu */}
      {isOpen && (
        <div className="mb-4 space-y-2">
          {options.map((option, index) => {
            const IconComponent = option.icon;
            return (
              <button
                key={index}
                onClick={() => handleOptionClick(option.message)}
                className={`flex items-center gap-3 ${option.color} text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 animate-slide-up`}
                style={{ animationDelay: `${index * 100}ms` }}
                aria-label={`WhatsApp - ${option.label}`}
              >
                <IconComponent size={20} />
                <span className="font-medium">{option.label}</span>
              </button>
            );
          })}
        </div>
      )}

      {/* Main Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110"
        aria-label="Menu do WhatsApp"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default FloatingWhatsApp;