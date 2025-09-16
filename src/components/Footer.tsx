import React from 'react';
import { Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* Logo */}
          <div className="text-3xl font-bold text-amber-600 mb-6">
            Bianca Moura Lash Designer
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://wa.me/553191028853"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
              aria-label="WhatsApp"
            >
              <MessageCircle size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
          </div>

          {/* Quick Links */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-semibold text-amber-300 mb-3">Serviços</h4>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>Volume Brasileiro</li>
                <li>Volume Europeu</li>
                <li>Efeito Fox</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-amber-300 mb-3">Contato</h4>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>WhatsApp: (31) 9102-8853</li>
                <li>Belo Horizonte - MG</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-amber-300 mb-3">Horários</h4>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>Seg - Sex: 9h às 18h</li>
                <li>Sáb: 9h às 16h</li>
                <li>Dom: Fechado</li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 pt-8">
            <p className="text-sm text-gray-400">
              © 2025 Bianca Moura Lash Designer. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;