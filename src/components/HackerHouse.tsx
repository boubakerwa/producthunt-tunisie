import React from 'react';
import { Home, Wifi, Users, Clock, Calendar } from 'lucide-react';

const HackerHouse = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="aurora-background"></div>
      <main className="relative z-10 px-6 pt-32 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 glass-pane rounded-full mb-6">
              <Home className="w-5 h-5 text-orange-400 mr-2" />
              <span className="text-orange-400 font-semibold">Hacker Houses</span>
            </div>
                      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Accelérateur de Startups en Résidence
          </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Nos Hacker Houses sont des programmes d'accélération immersifs de deux semaines pour les projets les plus prometteurs de la plateforme. Postulez pour transformer votre idée en réalité.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: Home,
                title: 'Espaces dédiés',
                description: 'Maisons entièrement équipées dans les plus belles régions de Tunisie'
              },
              {
                icon: Wifi,
                title: 'Connexion haut débit',
                description: 'Internet ultra-rapide et infrastructure tech pour coder sans limites'
              },
              {
                icon: Users,
                title: 'Communauté',
                description: 'Rencontrez et collaborez avec les meilleurs entrepreneurs tunisiens'
              },
              {
                icon: Clock,
                title: '6 mois',
                description: 'Résidences de 2 semaines tous les 6 mois pour maintenir l\'élan'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="glass-pane rounded-xl p-6 text-center transition-all duration-300 hover:scale-105 hover:bg-white/10 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="glass-pane rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Prochaine Hacker House</h3>
            <p className="text-gray-300 mb-6">
              <span className="text-orange-400 font-semibold">Printemps 2026</span> • Sidi Bou Said, Tunis
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>2 semaines intensives</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>20 entrepreneurs max</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HackerHouse;