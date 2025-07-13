import React, { useState } from 'react';
import { 
  TrendingUp as TrendingUpIcon, 
  Star, 
  TrendingUp, 
  Users, 
  Mail, 
  ArrowRight, 
  Globe, 
  Smartphone, 
  Code, 
  Briefcase,
  Heart,
  Coffee,
  Zap,
  Target,
  CheckCircle,
  ChevronUp,
  Eye,
  MessageCircle,
  Share2,
  Award,
  Layers,
  Compass,
  Github,
  Linkedin,
  Calendar,
  Gift
} from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    // Let Netlify handle the form submission
    setIsSubmitted(true);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #ffffff 1px, transparent 1px), 
                           radial-gradient(circle at 75% 75%, #ffffff 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      {/* Header */}
      <header className="relative z-10 px-6 py-8">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-yellow-500 rounded-lg flex items-center justify-center relative">
              <Compass className="w-6 h-6 text-white" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full flex items-center justify-center">
                <Star className="w-2 h-2 text-red-600" />
              </div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              TunisiaLaunch
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">À propos</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105">
              Rejoindre la liste d'attente
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 px-6 pt-16 pb-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* Coming Soon Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700/50 mb-8">
            <Zap className="w-4 h-4 text-yellow-400 mr-2" />
            <span className="text-sm text-gray-300 tracking-wider uppercase">Bientôt disponible</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-bold leading-none mb-8">
            <span className="block">Découvrez &</span>
            <span className="block bg-gradient-to-r from-red-500 via-yellow-500 to-red-600 bg-clip-text text-transparent">
              Lancez
            </span>
            <span className="block text-5xl md:text-7xl text-gray-200 mt-4">
              les meilleurs produits
            </span>
            <span className="block text-4xl md:text-6xl text-gray-300 mt-2 italic">
              à la Tunisienne
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed">
            La première plateforme open source dédiée à l'écosystème entrepreneurial tunisien. 
            Découvrez, votez et soutenez les innovations qui façonnent l'avenir de la Tunisie.
          </p>

          {/* Open Source Mission */}
          <div className="inline-flex items-center px-6 py-3 bg-gray-800/30 border border-gray-700/30 rounded-full mb-12">
            <Github className="w-5 h-5 text-green-400 mr-3" />
            <span className="text-green-400 font-semibold mr-2">100% Open Source</span>
            <span className="text-gray-400">• Construit par et pour la communauté tunisienne</span>
          </div>

          {/* Waitlist Email Signup - Netlify Form */}
          <div className="max-w-lg mx-auto mb-12">
            {!isSubmitted ? (
              <form 
                name="waitlist" 
                method="POST" 
                data-netlify="true"
                onSubmit={handleSubmit}
                className="flex gap-3"
              >
                <input type="hidden" name="form-name" value="waitlist" />
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre@email.com"
                  className="flex-1 px-6 py-3 bg-gray-800/50 border border-gray-700/50 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/25 whitespace-nowrap"
                >
                  Rejoindre la liste d'attente
                </button>
              </form>
            ) : (
              <div className="bg-green-600/20 border border-green-500/30 rounded-full px-6 py-3 text-green-400 flex items-center justify-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Vous êtes sur la liste d'attente ! Nous vous préviendrons lors du lancement.
              </div>
            )}
          </div>

          {/* Social Proof */}
          <div className="flex items-center justify-center gap-2 text-gray-400 mb-16">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-lg">
              <span className="text-white font-semibold">247</span> entrepreneurs tunisiens en attente
            </span>
          </div>
        </div>
      </main>

      {/* Product Hunt Features Section */}
      <section className="relative z-10 px-6 py-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Comment ça marche ?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Découvrez, votez et partagez les meilleurs produits tunisiens chaque jour, à la Tunisienne
            </p>
          </div>

          {/* Enhanced Process Flow */}
          <div className="relative max-w-5xl mx-auto">
            {/* Process Connection Lines */}
            <div className="hidden md:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-3xl">
              <div className="flex justify-between items-center">
                <div className="w-1/3 h-0.5 bg-gradient-to-r from-transparent via-red-500/30 to-red-500/50"></div>
                <div className="w-1/3 h-0.5 bg-gradient-to-r from-red-500/50 via-red-500/30 to-transparent"></div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 relative">
              {[
                {
                  icon: Layers,
                  title: 'Soumettez votre produit',
                  description: 'Présentez votre startup, application ou service innovant à la communauté tunisienne.',
                  step: '01',
                  demo: (
                    <div className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-4 mt-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                          <Smartphone className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white">TunisPay</h4>
                          <p className="text-xs text-gray-400">Nouveau produit</p>
                        </div>
                      </div>
                    </div>
                  )
                },
                {
                  icon: ChevronUp,
                  title: 'Recevez des votes',
                  description: 'La communauté vote pour les produits qu\'elle trouve les plus intéressants et utiles.',
                  step: '02',
                  demo: (
                    <div className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-4 mt-4">
                      <div className="flex items-center justify-center">
                        <div className="flex flex-col items-center bg-gray-700/50 rounded-lg p-3">
                          <ChevronUp className="w-5 h-5 text-red-400" />
                          <span className="text-sm font-bold text-white">127</span>
                        </div>
                      </div>
                    </div>
                  )
                },
                {
                  icon: Award,
                  title: 'Gagnez en visibilité',
                  description: 'Les produits les plus votés sont mis en avant et gagnent en exposition.',
                  step: '03',
                  demo: (
                    <div className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-4 mt-4">
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <Eye className="w-3 h-3" />
                        <span>2.3k vues</span>
                        <MessageCircle className="w-3 h-3 ml-2" />
                        <span>24</span>
                      </div>
                    </div>
                  )
                }
              ].map((step, index) => (
                <div
                  key={index}
                  className="relative text-center group"
                >
                  {/* Step Number Circle */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
                    {step.step}
                  </div>
                  
                  <div className="bg-gray-800/30 border border-gray-700/30 rounded-2xl p-8 pt-12 hover:bg-gray-800/50 transition-all duration-300 group-hover:scale-105 h-full flex flex-col">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed mb-4 flex-grow">{step.description}</p>
                    {step.demo}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Daily Rankings Teaser */}
          <div className="mt-20 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-600/20 to-yellow-600/20 border border-red-500/30 rounded-full mb-6">
              <TrendingUpIcon className="w-5 h-5 text-red-400 mr-2" />
              <span className="text-red-400 font-semibold">Classement quotidien</span>
            </div>
            <h3 className="text-3xl font-bold mb-4">
              Découvrez les produits tendance chaque jour, à la Tunisienne
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Chaque jour à 9h (heure de Tunis), découvrez le classement des produits les plus votés, 
              avec des prix communautaires et des événements exclusifs.
            </p>
          </div>
        </div>
      </section>

      {/* Tunisian Community Features */}
      <section className="relative z-10 px-6 py-20 border-t border-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Plus qu'une plateforme, une communauté à la Tunisienne
            </h2>
            <p className="text-xl text-gray-400">
              Événements, prix communautaires et soutien à l'écosystème entrepreneurial tunisien
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-6 hover:bg-gray-800/50 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Événements mensuels</h3>
              <p className="text-gray-400 leading-relaxed">
                Meetups, pitch sessions et ateliers pour connecter les entrepreneurs tunisiens et célébrer l'innovation locale.
              </p>
            </div>

            <div className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-6 hover:bg-gray-800/50 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center mb-4">
                <Gift className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Prix communautaires</h3>
              <p className="text-gray-400 leading-relaxed">
                Récompenses crowdsourcées pour les produits les plus innovants, financées par la communauté tunisienne.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Simplified Features Section with Animation */}
      <section className="relative z-10 px-6 py-20 border-t border-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Prêt à présenter l'innovation tunisienne ?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: TrendingUpIcon,
                title: 'Lancer des produits',
                description: 'Présentez vos innovations à la communauté tech tunisienne.'
              },
              {
                icon: Users,
                title: 'Connecter',
                description: 'Réseautez avec des entrepreneurs et innovateurs.'
              },
              {
                icon: Star,
                title: 'Découvrir',
                description: 'Trouvez les meilleurs produits émergents quotidiennement.'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-6 text-center hover:bg-gray-800/50 transition-all duration-500 hover:scale-105 group"
                style={{
                  animationDelay: `${index * 200}ms`
                }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-yellow-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 px-6 py-32 border-t border-gray-800/50">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Restons en contact
            </h2>
            <p className="text-gray-400">
              Une question ? Une suggestion ? Nous aimerions avoir de vos nouvelles.
            </p>
          </div>

          <form 
            name="contact" 
            method="POST" 
            data-netlify="true"
            className="space-y-6"
          >
            <input type="hidden" name="form-name" value="contact" />
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
                  placeholder="Votre nom"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
                  placeholder="votre@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-300 mb-2">
                Vous êtes
              </label>
              <select
                name="role"
                id="role"
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
              >
                <option value="">Sélectionnez votre rôle</option>
                <option value="entrepreneur">Entrepreneur</option>
                <option value="developer">Développeur</option>
                <option value="designer">Designer</option>
                <option value="investor">Investisseur</option>
                <option value="student">Étudiant</option>
                <option value="other">Autre</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={5}
                required
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all resize-none"
                placeholder="Parlez-nous de votre projet ou posez votre question..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/25"
            >
              <Mail className="w-5 h-5" />
              Envoyer le message
            </button>
          </form>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="relative z-10 px-6 py-16 text-center border-t border-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <p className="text-gray-400">
              Suivez-nous sur{' '}
              <a href="#" className="text-red-400 hover:text-red-300 transition-colors">Twitter</a>
              {' '}et{' '}
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              {' '}pour toute demande
            </p>
          </div>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <Heart className="w-5 h-5 text-red-500" />
            <span className="text-gray-400">Conçu avec amour pour l'écosystème entrepreneurial tunisien</span>
          </div>

          <div className="text-sm text-gray-500 space-x-6">
            <a href="#" className="hover:text-gray-300 transition-colors">Politique de confidentialité</a>
            <span>•</span>
            <a href="#" className="hover:text-gray-300 transition-colors">Conditions d'utilisation</a>
            <span>•</span>
            <a href="#" className="hover:text-gray-300 transition-colors">Paramètres des cookies</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;