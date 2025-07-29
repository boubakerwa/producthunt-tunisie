import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'flag-icons/css/flag-icons.min.css';
import { 
  TrendingUp as TrendingUpIcon, 
  Star, 
  Users, 
  Smartphone, 
  Zap,
  CheckCircle,
  ChevronUp,
  Eye,
  MessageCircle,
  Award,
  Layers,
  Compass,
  Github,
  Linkedin,
  Play,
  Home
} from 'lucide-react';
import Platform from './components/Platform';
import HackerHouse from './components/HackerHouse';
import ComingSoonModal from './components/ComingSoonModal';

function LandingPage() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [githubStats, setGithubStats] = useState<{stars: number, forks: number} | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch('https://api.github.com/repos/boubakerwa/producthunt-tunisie')
      .then(res => res.json())
      .then(data => {
        setGithubStats({ stars: data.stargazers_count, forks: data.forks_count });
      });

    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--aurora-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--aurora-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    // Submit to Netlify using AJAX
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as unknown as Record<string, string>).toString()
    })
      .then(() => {
        console.log("Form successfully submitted");
        setIsSubmitted(true);
        setEmail('');
      })
      .catch(error => {
        console.error("Form submission error:", error);
        alert("Erreur lors de l'envoi. Veuillez réessayer.");
      });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background Aurora */}
      <div className="aurora-background"></div>
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-20 glass-pane">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
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
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300" onClick={() => setIsModalOpen(true)}>À propos</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300" onClick={() => setIsModalOpen(true)}>Contact</a>
            <Link to="/hacker-house" className="text-gray-300 hover:text-white transition-colors duration-300">Hacker House</Link>
            <Link
              to="/platform"
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              <Play className="w-4 h-4" />
              Voir la plateforme
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
            onClick={() => setIsModalOpen(true)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 px-6 pt-32 pb-24">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Coming Soon Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8">
            <Zap className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-sm text-gray-300 tracking-wider uppercase">Bientôt disponible</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold leading-tight mb-8">
            <span className="block">Découvrez &</span>
            <span className="block bg-gradient-to-r from-red-500 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              Lancez
            </span>
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-gray-200 mt-4">
              les meilleurs produits
            </span>
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-gray-300 mt-2 italic">
              à la Tunisienne
            </span>
          </h1>
          <div className="flex justify-center mb-4">
            <span className="fi fi-tn rounded-md shadow-lg" style={{ width: 40, height: 28, display: 'inline-block' }} />
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            La première plateforme open source dédiée à l'écosystème entrepreneurial tunisien. 
            Découvrez, votez et soutenez les innovations qui façonnent l'avenir de la Tunisie.
          </p>

          {/* Hacker Houses Preview */}
          <div className="inline-flex items-center px-6 py-3 bg-white/5 border border-white/10 rounded-full mb-8">
            <Home className="w-5 h-5 text-orange-400 mr-2" />
            <span className="text-orange-400 font-semibold mr-2">Hacker Houses</span>
            <span className="text-gray-400">• Résidences créatives tous les 6 mois</span>
          </div>

          {/* Open Source Mission */}
          <div className="inline-flex items-center px-6 py-3 bg-white/5 border border-white/10 rounded-full mb-8">
            <Github className="w-5 h-5 text-green-400 mr-3" />
            <span className="text-green-400 font-semibold mr-2">100% Open Source</span>
            <span className="text-gray-400">• Construit par et pour la communauté tunisienne</span>
          </div>

          

          {/* Waitlist Email Signup - Netlify Form */}
          <div className="max-w-lg mx-auto mb-8">
            {!isSubmitted ? (
              <form 
                name="waitlist" 
                method="POST" 
                data-netlify="true"
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3"
              >
                <input type="hidden" name="form-name" value="waitlist" />
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre@email.com"
                  className="flex-1 px-6 py-3 bg-white/5 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/50 transition-all"
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
              <div className="glass-pane rounded-full px-6 py-3 text-green-400 flex items-center justify-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Vous êtes sur la liste d'attente ! Nous vous préviendrons lors du lancement.
              </div>
            )}
          </div>

          {/* Social Proof */}
          <div className="flex items-center justify-center gap-2 text-gray-400 mb-8">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-lg">
              <span className="text-white font-semibold">247</span> entrepreneurs tunisiens en attente
            </span>
          </div>
        </div>
      </main>

      {/* Product Hunt Features Section */}
      <section className="relative z-10 px-6 py-24">
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
                <div className="w-1/3 h-px bg-gradient-to-r from-transparent via-red-500/50 to-red-500/70"></div>
                <div className="w-1/3 h-px bg-gradient-to-r from-red-500/70 via-red-500/50 to-transparent"></div>
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
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-red-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm z-10 shadow-lg">
                    {step.step}
                  </div>
                  
                  <div className="glass-pane rounded-2xl p-8 pt-12 transition-all duration-300 group-hover:scale-105 group-hover:bg-white/10 h-full flex flex-col">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
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
            <div className="inline-flex items-center px-6 py-3 glass-pane rounded-full mb-6">
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

      {/* The Challenge Section */}
      <section className="relative z-10 px-6 py-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Le Défi de l'Écosystème Tunisien
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Les entrepreneurs tunisiens sont talentueux et ambitieux, mais font face à des défis uniques.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-pane rounded-xl p-6 text-center">
              <h3 className="text-lg font-bold mb-2">Manque de Visibilité</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Difficile de se faire connaître localement et à l'international.</p>
            </div>
            <div className="glass-pane rounded-xl p-6 text-center">
              <h3 className="text-lg font-bold mb-2">Accès aux Ressources</h3>
              <p className="text-gray-400 text-sm leading-relaxed">L'accès au financement et au mentorat est un parcours du combattant.</p>
            </div>
            <div className="glass-pane rounded-xl p-6 text-center">
              <h3 className="text-lg font-bold mb-2">Défis Régionaux</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Les complexités du marché local peuvent freiner la croissance.</p>
            </div>
            <div className="glass-pane rounded-xl p-6 text-center">
              <h3 className="text-lg font-bold mb-2">Fuite des Cerveaux</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Les meilleurs talents sont souvent attirés par des opportunités à l'étranger.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative z-10 px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Une Plateforme, Deux Audiences
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Que vous soyez un créateur ou un membre de la communauté, TunisiaLaunch est fait pour vous.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-pane rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Pour les Créateurs</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1" />
                  <span><b>Visibilité Instantanée :</b> Touchez des milliers d'utilisateurs, investisseurs et journalistes tunisiens.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1" />
                  <span><b>Feedback Authentique :</b> Recevez des retours constructifs de la part d'une communauté passionnée.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1" />
                  <span><b>Accès à l'Écosystème :</b> Connectez-vous avec des mentors, des investisseurs et des partenaires potentiels.</span>
                </li>
              </ul>
            </div>
            <div className="glass-pane rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Pour la Communauté</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-3 mt-1" />
                  <span><b>Découvrez l'Innovation :</b> Soyez le premier à découvrir les produits qui façonnent l'avenir de la Tunisie.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-3 mt-1" />
                  <span><b>Soutenez les Talents Locaux :</b> Votre vote et votre feedback peuvent aider un projet à décoller.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-3 mt-1" />
                  <span><b>Influencez l'Avenir :</b> Participez à l'émergence des prochains grands succès tunisiens.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="relative z-10 px-6 py-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Notre Feuille de Route
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Nous construisons TunisiaLaunch pas à pas, avec la communauté.
            </p>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-white/10"></div>

            <div className="space-y-16">
              <div className="flex items-center justify-center relative">
                <div className="w-1/2 pr-8 text-right">
                  <h3 className="text-2xl font-bold text-green-400 mb-2">Phase 1: Lancement de la Plateforme</h3>
                  <p className="text-gray-400">Lancement de la plateforme de découverte de produits, avec un focus sur le vote et le feedback.</p>
                </div>
                <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center z-10">
                  <CheckCircle className="w-6 h-6 text-black" />
                </div>
                <div className="w-1/2 pl-8">
                  <p className="text-gray-500">Q4 2025</p>
                </div>
              </div>

              <div className="flex items-center justify-center relative">
                <div className="w-1/2 pr-8 text-right">
                  <p className="text-gray-500">Q1 2026</p>
                </div>
                <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center z-10">
                  <Users className="w-6 h-6 text-black" />
                </div>
                <div className="w-1/2 pl-8">
                  <h3 className="text-2xl font-bold text-blue-400 mb-2">Phase 2: Croissance de la Communauté</h3>
                  <p className="text-gray-400">Organisation d'événements en ligne et hors ligne pour renforcer la communauté.</p>
                </div>
              </div>

              <div className="flex items-center justify-center relative">
                <div className="w-1/2 pr-8 text-right">
                  <h3 className="text-2xl font-bold text-orange-400 mb-2">Phase 3: Hacker Houses</h3>
                  <p className="text-gray-400">Lancement de la première Hacker House pour accélérer les projets les plus prometteurs.</p>
                </div>
                <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center z-10">
                  <Home className="w-6 h-6 text-black" />
                </div>
                <div className="w-1/2 pl-8">
                  <p className="text-gray-500">Q2 2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 px-6 py-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Par et Pour les Entrepreneurs Tunisiens
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Notre mission est de catalyser l'innovation en Tunisie. Voici ce que les fondateurs en pensent.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-pane rounded-2xl p-8">
              <p className="text-lg text-gray-300 mb-6">"TunisiaLaunch est la plateforme que nous attendions tous. Elle nous donne la visibilité et le soutien dont nous avons besoin pour réussir ici, en Tunisie."</p>
              <div className="flex items-center">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Founder" className="w-12 h-12 rounded-full mr-4"/>
                <div>
                  <p className="font-bold text-white">Karim Bettaieb</p>
                  <p className="text-gray-400">Fondateur de "ForsaTN"</p>
                </div>
              </div>
            </div>
            <div className="glass-pane rounded-2xl p-8">
              <p className="text-lg text-gray-300 mb-6">"Grâce à TunisiaLaunch, nous avons pu tester notre idée, recevoir des feedbacks précieux et nous connecter avec notre première communauté d'utilisateurs."</p>
              <div className="flex items-center">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Founder" className="w-12 h-12 rounded-full mr-4"/>
                <div>
                  <p className="font-bold text-white">Myriam Bouaziz</p>
                  <p className="text-gray-400">Fondatrice de "Ahkili"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Simplified Features Section with Animation */}
      <section className="relative z-10 px-6 py-24 border-t border-white/10">
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
                className="glass-pane rounded-xl p-6 text-center transition-all duration-500 hover:scale-105 hover:bg-white/10 group"
                style={{
                  animationDelay: `${index * 200}ms`
                }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="relative z-10 px-6 py-16 text-center border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <p className="text-gray-400">
              Suivez-nous sur{' '}
              <a href="https://x.com/wessyolo" className="text-red-400 hover:text-red-300 transition-colors">Twitter</a>
              {' '}et{' '}
              <a href="https://www.linkedin.com/in/wbkr/" className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              {' '}pour toute demande
            </p>
          </div>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <svg viewBox="0 0 94 155" className="text-red-500 w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="m 71.616,112.159 c 0,16.098 -13.049,29.146 -29.146,29.146 -16.096,0 -29.147,-13.049 -29.147,-29.146 0,-16.097 13.051,-29.146 29.147,-29.146 16.097,0 29.146,13.049 29.146,29.146 z" />
              <path d="m 92.847,51.875 c -0.368,-1.116 -1.177,-2.031 -2.235,-2.537 -7.32,-3.482 -13.54,-3.66 -18.482,-0.527 -0.176,0.112 -0.327,0.247 -0.498,0.364 V 25.893 c 0,-8.745 -6.587,-13.463 -12.783,-13.463 -1.315,0 -2.633,0.222 -3.896,0.632 v -2.02 C 54.952,4.746 49.895,0 43.189,0 37.878,0 33.722,2.858 32.166,7.171 31.02,6.793 29.802,6.586 28.54,6.586 c -5.926,0 -12.054,4.566 -12.054,12.206 V 32.994 C 15.269,32.531 13.991,32.247 12.685,32.205 9.527,32.103 6.319,33.394 3.887,35.75 1.418,38.14 0,41.411 0,44.724 v 67.435 c 0,23.418 19.053,42.47 42.47,42.47 23.419,0 42.471,-19.052 42.471,-42.47 l 1.538,-38.642 c 0.003,-5.625 4.394,-15.086 6.085,-18.273 0.548,-1.035 0.653,-2.254 0.283,-3.369 z m -14.974,21.473 -1.539,38.64 C 76.331,130.83 61.142,146.021 42.47,146.021 23.799,146.021 8.609,130.83 8.609,112.16 V 44.724 c 0,-0.993 0.461,-2.012 1.267,-2.789 0.755,-0.733 1.703,-1.153 2.533,-1.126 1.83,0.059 4.078,2.22 4.078,3.916 v 30.292 c 0,2.378 1.926,4.306 4.305,4.306 2.377,0 4.303,-1.928 4.303,-4.306 V 18.792 c 0,-2.639 2.063,-3.597 3.446,-3.597 0.537,0 1.304,0.131 1.899,0.754 0.689,0.719 1.054,1.963 1.054,3.596 v 52.082 c 0,2.378 1.929,4.306 4.306,4.306 2.377,0 4.303,-1.928 4.303,-4.306 V 11.043 c 0,-2.198 2.159,-2.435 3.088,-2.435 0.739,0 3.154,0.177 3.154,2.435 v 60.045 c 0,2.379 1.927,4.305 4.304,4.305 2.378,0 4.305,-1.926 4.305,-4.305 V 25.893 c 0,-4.504 2.981,-4.854 3.896,-4.854 1.926,0 4.175,1.271 4.175,4.854 v 54.235 c 0,2.378 1.927,4.304 4.305,4.304 2.378,0 4.304,-1.926 4.304,-4.304 V 69.902 c 0.006,-2.754 0.954,-11.203 5.117,-13.827 1.517,-0.956 3.571,-1.072 6.071,-0.447 -2.105,4.65 -4.949,11.968 -4.949,17.72 z" />
            </svg>
            <span className="text-gray-400">Conçu avec amour pour l'écosystème entrepreneurial tunisien</span>
          </div>

          <div className="mb-4">
            <span className="text-sm text-gray-400 font-semibold">Made in Tunisia <span role="img" aria-label="Tunisian flag">🇹🇳</span></span>
          </div>
         <div className="mb-4 flex items-center justify-center gap-4">
           <a href="https://github.com/boubakerwa/producthunt-tunisie" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
             <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>
             <span>GitHub</span>
           </a>
           {githubStats && (
             <span className="text-xs text-gray-400">★ {githubStats.stars} | Forks: {githubStats.forks}</span>
           )}
         </div>

          <div className="text-sm text-gray-500 space-x-6">
            <a href="#" className="hover:text-gray-300 transition-colors" onClick={() => setIsModalOpen(true)}>Politique de confidentialité</a>
            <span>•</span>
            <a href="#" className="hover:text-gray-300 transition-colors" onClick={() => setIsModalOpen(true)}>Conditions d'utilisation</a>
            <span>•</span>
            <a href="#" className="hover:text-gray-300 transition-colors" onClick={() => setIsModalOpen(true)}>Paramètres des cookies</a>
          </div>
          <div className="text-xs text-gray-600 mt-4">
            Khamsa icon licensed under <a href="https://creativecommons.org/licenses/by-sa/3.0/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors" onClick={() => setIsModalOpen(true)}>CC BY-SA 3.0</a>.
          </div>
        </div>
      </footer>

      {isModalOpen && (
        <ComingSoonModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          message="Fonctionnalité bientôt disponible !"
        />
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/platform/*" element={<Platform />} />
        <Route path="/hacker-house" element={<HackerHouse />} />
      </Routes>
    </Router>
  );
}

export default App;