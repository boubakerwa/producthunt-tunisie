import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  TrendingUp, 
  Plus, 
  Search, 
  Bell, 
  User,
  LogOut,
  Settings,
  Heart,
  MessageCircle,
  Share2,
  Eye
} from 'lucide-react';

// Demo data
const demoUser = {
  name: "Ahmed Ben Ali",
  email: "ahmed@demo.tn",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  votes: 127,
  products: 3
};

const demoProducts = [
  {
    id: 1,
    name: "TunisPay",
    tagline: "Paiement mobile sécurisé pour la Tunisie",
    description: "Solution de paiement mobile qui révolutionne les transactions en Tunisie avec une sécurité de niveau bancaire.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
    votes: 247,
    comments: 23,
    views: 1247,
    category: "Fintech",
    founder: "Sara Mezni",
    launchDate: "2024-01-15",
    status: "trending"
  },
  {
    id: 2,
    name: "EduTech Tunisie",
    tagline: "Plateforme d'apprentissage personnalisé",
    description: "IA qui adapte le contenu éducatif aux besoins spécifiques de chaque étudiant tunisien.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
    votes: 189,
    comments: 15,
    views: 892,
    category: "Education",
    founder: "Mohamed Karray",
    launchDate: "2024-01-10",
    status: "new"
  },
  {
    id: 3,
    name: "GreenTunis",
    tagline: "Solutions écologiques pour entreprises",
    description: "Plateforme qui aide les entreprises tunisiennes à réduire leur empreinte carbone.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
    votes: 156,
    comments: 8,
    views: 634,
    category: "Environnement",
    founder: "Leila Mansouri",
    launchDate: "2024-01-08",
    status: "rising"
  },
  {
    id: 4,
    name: "MediConnect",
    tagline: "Télémedecine pour tous",
    description: "Connecte patients et médecins pour des consultations en ligne sécurisées.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
    votes: 203,
    comments: 31,
    views: 1567,
    category: "Santé",
    founder: "Dr. Youssef Ben Salem",
    launchDate: "2024-01-12",
    status: "trending"
  },
  {
    id: 5,
    name: "ArtisanHub",
    tagline: "Marché en ligne pour artisans",
    description: "Plateforme qui connecte artisans tunisiens avec des clients du monde entier.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
    votes: 134,
    comments: 12,
    views: 789,
    category: "E-commerce",
    founder: "Fatma Ben Youssef",
    launchDate: "2024-01-05",
    status: "new"
  },
  {
    id: 6,
    name: "SmartFarm",
    tagline: "Agriculture intelligente",
    description: "IoT et IA pour optimiser la production agricole en Tunisie.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop",
    votes: 98,
    comments: 6,
    views: 445,
    category: "AgTech",
    founder: "Hassan Trabelsi",
    launchDate: "2024-01-03",
    status: "rising"
  }
];

// Navigation Component
const Navigation = () => {
  const location = useLocation();
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-20 glass-pane">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/platform" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-yellow-500 rounded-lg flex items-center justify-center relative">
              <TrendingUp className="w-6 h-6 text-white" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
              </div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              TunisiaLaunch
            </span>
          </Link>

          {/* Search */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher des produits..."
                className="w-full pl-10 pr-4 py-2 glass-pane rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/50 transition-all"
              />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              to="/platform" 
              className={`text-gray-300 hover:text-white transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-white/5 ${
                location.pathname === '/platform' ? 'text-white bg-white/10' : ''
              }`}
            >
              Accueil
            </Link>
            <Link 
              to="/platform/trending" 
              className={`text-gray-300 hover:text-white transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-white/5 ${
                location.pathname === '/platform/trending' ? 'text-white bg-white/10' : ''
              }`}
            >
              Tendances
            </Link>
            <Link 
              to="/platform/new" 
              className={`text-gray-300 hover:text-white transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-white/5 ${
                location.pathname === '/platform/new' ? 'text-white bg-white/10' : ''
              }`}
            >
              Nouveaux
            </Link>
          </div>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-white transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <div className="relative group">
              <button className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                <img 
                  src={demoUser.avatar} 
                  alt={demoUser.name}
                  className="w-8 h-8 rounded-full border-2 border-white/20"
                />
                <span className="hidden md:block text-sm">{demoUser.name}</span>
              </button>
              
              {/* Dropdown Menu */}
              <div className="absolute right-0 mt-2 w-48 glass-pane rounded-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link to="/platform/profile" className="flex items-center px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 transition-colors">
                  <User className="w-4 h-4 mr-3" />
                  Profil
                </Link>
                <Link to="/platform/settings" className="flex items-center px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 transition-colors">
                  <Settings className="w-4 h-4 mr-3" />
                  Paramètres
                </Link>
                <div className="h-px bg-white/10 my-2"></div>
                <button className="flex items-center w-full px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 transition-colors">
                  <LogOut className="w-4 h-4 mr-3" />
                  Déconnexion
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Product Card Component
const ProductCard = ({ product }: { product: typeof demoProducts[0] }) => {
  return (
    <div className="glass-pane rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:bg-white/10 group">
      {/* Product Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            product.status === 'trending' ? 'bg-red-500/20 text-red-300 border border-red-500/30' :
            product.status === 'new' ? 'bg-green-500/20 text-green-300 border border-green-500/30' :
            'bg-blue-500/20 text-blue-300 border border-blue-500/30'
          }`}>
            {product.status === 'trending' ? '🔥 Tendance' :
             product.status === 'new' ? '🆕 Nouveau' : '📈 En hausse'}
          </span>
        </div>
      </div>

      {/* Product Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">{product.name}</h3>
            <p className="text-gray-400 text-sm mb-2">{product.tagline}</p>
          </div>
        </div>

        <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Product Meta */}
        <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
          <span className="bg-gray-800/50 px-2 py-1 rounded-full">{product.category}</span>
          <span>Par {product.founder}</span>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 text-sm text-gray-400">
            <div className="flex items-center space-x-1">
              <Heart className="w-4 h-4" />
              <span>{product.votes}</span>
            </div>
            <div className="flex items-center space-x-1">
              <MessageCircle className="w-4 h-4" />
              <span>{product.comments}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Eye className="w-4 h-4" />
              <span>{product.views}</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-400 hover:text-white transition-colors">
              <Share2 className="w-4 h-4" />
            </button>
            <button className="px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105">
              Voter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Home Page Component
const HomePage = () => {
  return (
    <div className="pt-24 px-6 pb-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Découvrez les meilleurs produits
            <span className="block text-3xl md:text-4xl text-gray-300 mt-2">
              de l'écosystème tunisien
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Votez, commentez et partagez les innovations qui façonnent l'avenir de la Tunisie
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="glass-pane rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-red-400 mb-2">1,247</div>
            <div className="text-sm text-gray-400">Produits lancés</div>
          </div>
          <div className="glass-pane rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">89.2K</div>
            <div className="text-sm text-gray-400">Votes totaux</div>
          </div>
          <div className="glass-pane rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">2,456</div>
            <div className="text-sm text-gray-400">Entrepreneurs</div>
          </div>
          <div className="glass-pane rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">156</div>
            <div className="text-sm text-gray-400">Pays atteints</div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {demoProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="glass-pane px-8 py-3 rounded-full text-white hover:bg-white/10 transition-all duration-300">
            Charger plus de produits
          </button>
        </div>
      </div>
    </div>
  );
};

// Main Platform Component
const Platform = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background Aurora */}
      <div className="aurora-background"></div>
      
      <Navigation />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/trending" element={<HomePage />} />
        <Route path="/new" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default Platform; 