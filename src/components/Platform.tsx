import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
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
  Eye,
  Bookmark,
  Clock as ClockIcon
} from 'lucide-react';
import ComingSoonModal from './ComingSoonModal';

const CountdownTimer = ({ targetDate }: { targetDate: Date }) => {
  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents: JSX.Element[] = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval as keyof typeof timeLeft]) {
      return;
    }

    timerComponents.push(
      <span key={interval} className="text-white font-semibold text-lg md:text-xl">
        {timeLeft[interval as keyof typeof timeLeft]} {
          interval === 'days' ? 'jours' :
          interval === 'hours' ? 'heures' :
          interval === 'minutes' ? 'minutes' :
          'secondes'
        }{" "}
      </span>
    );
  });

  return (
    <div className="flex items-center justify-center space-x-2">
      <ClockIcon className="w-5 h-5 text-red-400" />
      {timerComponents.length ? timerComponents : <span className="text-white font-semibold text-lg md:text-xl">Temps écoulé!</span>}
    </div>
  );
};


// Enhanced demo data with more realistic weekly voting
const demoProducts = [
  {
    id: 1,
    name: "TunisiaTech",
    tagline: "Plateforme de networking pour entrepreneurs tunisiens",
    category: "Tech",
    founder: "Ahmed Ben Ali",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=400&fit=crop",
    votes: 342,
    comments: 28,
    views: 1247,
    market: "B2B",
    weeklyGrowth: 15,
    lastWeekRank: 2
  },
  {
    id: 2,
    name: "MediConnect",
    tagline: "Télémedecine pour les zones rurales",
    category: "Santé",
    founder: "Dr. Fatma Mansouri",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop",
    votes: 298,
    comments: 45,
    views: 2156,
    market: "B2C",
    weeklyGrowth: 8,
    lastWeekRank: 1
  },
  {
    id: 3,
    name: "EcoTunisia",
    tagline: "Solutions durables pour entreprises",
    category: "Environnement",
    founder: "Sara Trabelsi",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop",
    votes: 267,
    comments: 32,
    views: 1893,
    market: "B2B",
    weeklyGrowth: 22,
    lastWeekRank: 5
  },
  {
    id: 4,
    name: "EduTunisia",
    tagline: "Formation en ligne pour tous",
    category: "Éducation",
    founder: "Mohamed Karray",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=400&fit=crop",
    votes: 234,
    comments: 19,
    views: 1456,
    market: "B2C",
    weeklyGrowth: 12,
    lastWeekRank: 3
  },
  {
    id: 5,
    name: "FinTech Tunis",
    tagline: "Services financiers innovants",
    category: "Finance",
    founder: "Leila Ben Salem",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=400&fit=crop",
    votes: 198,
    comments: 26,
    views: 1123,
    market: "B2B",
    weeklyGrowth: 5,
    lastWeekRank: 4
  },
  {
    id: 6,
    name: "ArtisanConnect",
    tagline: "Marketplace pour artisans tunisiens",
    category: "E-commerce",
    founder: "Youssef Hammami",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop",
    votes: 176,
    comments: 14,
    views: 987,
    market: "B2C",
    weeklyGrowth: 18,
    lastWeekRank: 8
  }
];

// Top performers by category
const topByCategory = {
  global: demoProducts[0],
  market: demoProducts[1],
  tech: demoProducts[0],
  health: demoProducts[1],
  environment: demoProducts[2],
  education: demoProducts[3],
  finance: demoProducts[4],
  ecommerce: demoProducts[5]
};

// Last week's top 3
const lastWeekTop3 = [
  { ...demoProducts[1], rank: 1, change: -1 },
  { ...demoProducts[0], rank: 2, change: 1 },
  { ...demoProducts[3], rank: 3, change: 0 }
];

// Demo data
const demoUser = {
  name: "Ahmed Ben Ali",
  email: "ahmed@demo.tn",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  votes: 127,
  products: 3
};

// Navigation Component
const Navigation = () => {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
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
          
          {/* Mobile Search */}
          <div className="md:hidden flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher..."
                className="w-full pl-10 pr-4 py-2 glass-pane rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/50 transition-all text-sm"
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
              Découvrir
            </Link>
          </div>
          
          {/* Mobile Navigation Links */}
          <div className="md:hidden flex items-center space-x-3">
            <Link 
              to="/platform" 
              className={`text-gray-300 hover:text-white transition-colors duration-300 px-2 py-1 rounded-lg hover:bg-white/5 text-sm ${
                location.pathname === '/platform' ? 'text-white bg-white/10' : ''
              }`}
            >
              Accueil
            </Link>
            <Link 
              to="/platform/trending" 
              className={`text-gray-300 hover:text-white transition-colors duration-300 px-2 py-1 rounded-lg hover:bg-white/5 text-sm ${
                location.pathname === '/platform/trending' ? 'text-white bg-white/10' : ''
              }`}
            >
              Découvrir
            </Link>
          </div>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105" onClick={() => setIsModalOpen(true)}>
              <Plus className="w-4 h-4" />
              <span>Soumettre un produit</span>
            </button>
            
            {/* Mobile Submit Button */}
            <button className="md:hidden p-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 rounded-full text-white transition-all duration-300" onClick={() => setIsModalOpen(true)}>
              <Plus className="w-4 h-4" />
            </button>
            <button className="p-2 text-gray-400 hover:text-white transition-colors" onClick={() => setIsModalOpen(true)}>
              <Bell className="w-5 h-5" />
            </button>
            <div className="relative group">
              <button className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors" onClick={() => setIsModalOpen(true)}>
                <img 
                  src={demoUser.avatar} 
                  alt={demoUser.name}
                  className="w-8 h-8 rounded-full border-2 border-white/20"
                />
                <span className="hidden md:block text-sm">{demoUser.name}</span>
              </button>
              
              {/* Dropdown Menu */}
              <div className="absolute right-0 mt-2 w-48 glass-pane rounded-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link to="/platform/profile" className="flex items-center px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 transition-colors" onClick={() => setIsModalOpen(true)}>
                  <User className="w-4 h-4 mr-3" />
                  Profil
                </Link>
                <Link to="/platform/settings" className="flex items-center px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 transition-colors" onClick={() => setIsModalOpen(true)}>
                  <Settings className="w-4 h-4 mr-3" />
                  Paramètres
                </Link>
                <div className="h-px bg-white/10 my-2"></div>
                <button className="flex items-center w-full px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 transition-colors" onClick={() => setIsModalOpen(true)}>
                  <LogOut className="w-4 h-4 mr-3" />
                  Déconnexion
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <ComingSoonModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          message="Fonctionnalité bientôt disponible !"
        />
      )}
    </nav>
  );
};

// Product Card Component
const ProductCard = ({ product }: { product: typeof demoProducts[0] }) => {
  return (
    <div className="glass-pane rounded-xl p-6 transition-all duration-300 hover:scale-[1.02] hover:bg-white/10 group">
      {/* Product Image */}
      <div className="relative mb-4">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-gray-800/80 backdrop-blur-sm px-2 py-1 rounded-full text-xs text-white">
            {product.category}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <span className="bg-gray-800/80 backdrop-blur-sm px-2 py-1 rounded-full text-xs text-white">
            {product.market}
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="mb-4">
        <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
        <p className="text-gray-400 text-sm mb-3">{product.tagline}</p>
        <div className="flex items-center justify-between text-xs text-gray-400">
          <span>Par {product.founder}</span>
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1">
              <MessageCircle className="w-3 h-3" />
              <span>{product.comments}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Eye className="w-3 h-3" />
              <span>{product.views}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Vote Button */}
      <div className="flex items-center justify-between">
        <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105">
          <Heart className="w-4 h-4" />
          <span>{product.votes}</span>
        </button>
        <div className="flex items-center space-x-2">
          <button className="p-2 text-gray-400 hover:text-white transition-colors">
            <Share2 className="w-4 h-4" />
          </button>
          <button className="p-2 text-gray-400 hover:text-white transition-colors">
            <Bookmark className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Product Hunt-style Ranked Card Component
const RankedProductCard = ({ product, rank }: { product: typeof demoProducts[0], rank: number }) => {
  const isTopProduct = rank === 1;
  
  return (
    <div className={`glass-pane rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:bg-white/10 group border border-white/10 backdrop-blur-xl ${
      isTopProduct ? 'ring-2 ring-yellow-500/30 bg-gradient-to-br from-yellow-500/5 to-orange-500/5' : ''
    }`}>
      <div className="flex items-start gap-6">
        {/* Rank Number */}
        <div className={`flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-lg backdrop-blur-sm border ${
          isTopProduct 
            ? 'bg-gradient-to-br from-yellow-400/20 to-orange-500/20 text-yellow-300 border-yellow-500/30 shadow-lg' 
            : 'bg-white/10 text-gray-300 border-white/20'
        }`}>
          {rank}
        </div>

        {/* Product Image */}
        <div className="flex-shrink-0 w-24 h-24 rounded-2xl overflow-hidden border border-white/10">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Product Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-bold text-white mb-2 truncate">{product.name}</h3>
              <p className="text-gray-300 text-sm mb-3 leading-relaxed">{product.tagline}</p>
            </div>
            {isTopProduct && (
              <div className="flex-shrink-0 ml-3">
                <span className="px-3 py-1 bg-yellow-500/10 text-yellow-300 text-xs font-semibold rounded-full border border-yellow-500/20 backdrop-blur-sm">
                  PREMIER
                </span>
              </div>
            )}
          </div>

          {/* Product Meta */}
          <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
            <div className="flex items-center space-x-4">
              <span className="bg-gray-800/50 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">{product.category}</span>
              <span>Par {product.founder}</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-4 h-4" />
                <span>{product.comments}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Eye className="w-4 h-4" />
                <span>{product.views}</span>
              </div>
            </div>
          </div>

          {/* Vote Button */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <button className="flex items-center space-x-3 px-5 py-2.5 bg-gradient-to-r from-red-600/20 to-red-700/20 hover:from-red-700/30 hover:to-red-800/30 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 border border-red-500/30 backdrop-blur-sm">
                <Heart className="w-4 h-4" />
                <span>{product.votes}</span>
              </button>
              <button className="p-2.5 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/10">
                <Share2 className="w-4 h-4" />
              </button>
            </div>
            
            {isTopProduct && (
              <div className="text-yellow-400 text-sm font-semibold flex items-center space-x-1">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span>Produit vedette</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Top Product Highlight Component
const TopProductHighlight = ({ product, category, rank }: { product: typeof demoProducts[0], category: string, rank: number }) => {
  return (
    <div className="glass-pane rounded-2xl p-8 border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl shadow-2xl">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 border border-yellow-500/30 rounded-2xl flex items-center justify-center font-bold text-yellow-300 backdrop-blur-sm">
            {rank}
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">{category}</h3>
            <p className="text-yellow-400/80 text-sm font-medium">Top de la semaine</p>
          </div>
        </div>
        <div className="px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-300 text-sm font-semibold backdrop-blur-sm">
          PREMIER
        </div>
      </div>
      
      <div className="flex items-center space-x-6">
        <div className="relative">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-20 h-20 rounded-2xl object-cover border border-white/10"
          />
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </div>
        <div className="flex-1">
          <h4 className="text-xl font-bold text-white mb-2">{product.name}</h4>
          <p className="text-gray-300 text-sm mb-3 leading-relaxed">{product.tagline}</p>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-400">Par {product.founder}</span>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1 text-green-400 font-medium">
                <TrendingUp className="w-4 h-4" />
                <span>+{product.weeklyGrowth}%</span>
              </div>
              <div className="flex items-center space-x-1 text-gray-300">
                <Heart className="w-4 h-4" />
                <span>{product.votes} votes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Last Week's Rankings Component
const LastWeekRankings = () => {
  return (
    <div className="glass-pane rounded-2xl p-6 border border-white/10 backdrop-blur-xl">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-white">Classement de la semaine dernière</h3>
        <span className="text-gray-400 text-sm font-medium">Semaine 2</span>
      </div>
      
      <div className="space-y-4">
        {lastWeekTop3.map((product, index) => (
          <div key={product.id} className="flex items-center space-x-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300 border border-white/5">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm backdrop-blur-sm border ${
              index === 0 ? 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30' :
              index === 1 ? 'bg-gray-500/20 text-gray-300 border-gray-500/30' :
              'bg-orange-500/20 text-orange-300 border-orange-500/30'
            }`}>
              {product.rank}
            </div>
            <img 
              src={product.image} 
              alt={product.name}
              className="w-12 h-12 rounded-xl object-cover border border-white/10"
            />
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-white text-sm truncate">{product.name}</h4>
              <p className="text-gray-400 text-xs">{product.votes} votes</p>
            </div>
            <div className={`text-sm font-semibold px-2 py-1 rounded-lg backdrop-blur-sm ${
              product.change > 0 ? 'text-green-400 bg-green-500/10 border border-green-500/20' :
              product.change < 0 ? 'text-red-400 bg-red-500/10 border border-red-500/20' : 
              'text-gray-400 bg-gray-500/10 border border-gray-500/20'
            }`}>
              {product.change > 0 ? `+${product.change}` : product.change === 0 ? '=' : product.change}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Enhanced Ranked Homepage Component
const RankedHomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('global');
  const rankedProducts = [...demoProducts].sort((a, b) => b.votes - a.votes);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const categories = [
    { id: 'global', name: 'Global' },
    { id: 'market', name: 'Marché' },
    { id: 'tech', name: 'Tech' },
    { id: 'health', name: 'Santé' },
    { id: 'environment', name: 'Environnement' },
    { id: 'education', name: 'Éducation' },
    { id: 'finance', name: 'Finance' },
    { id: 'ecommerce', name: 'E-commerce' }
  ];
  
  return (
    <div className="pt-24 px-6 pb-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 glass-pane rounded-full mb-6 border border-white/10 backdrop-blur-xl">
            <TrendingUp className="w-5 h-5 text-red-400 mr-3" />
            <span className="text-red-400 font-semibold">Classement hebdomadaire</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
            Top produits tunisiens
          </h1>
          <p className="text-gray-300 text-lg">
            Votez cette semaine • Semaine 3
          </p>
          <CountdownTimer targetDate={new Date('2025-07-27T23:59:59')} />
        </div>

        {/* Category Tabs */}
        <div className="sticky top-0 z-10 bg-black py-4 flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 px-4">
          {categories.map(category => (
                          <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 backdrop-blur-sm border ${
                  selectedCategory === category.id
                    ? 'bg-white/20 text-white border-white/30 shadow-lg'
                    : 'text-gray-400 hover:text-white hover:bg-white/10 border-white/10'
                }`}
              >
              {category.name}
            </button>
          ))}
        </div>

        {/* Top Product Highlight */}
        <div className="mb-10">
          <TopProductHighlight 
            product={topByCategory[selectedCategory as keyof typeof topByCategory]} 
            category={categories.find(c => c.id === selectedCategory)?.name || ''}
            rank={1}
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Rankings */}
          <div className="lg:col-span-3">
            <div className="glass-pane rounded-2xl p-8 border border-white/10 backdrop-blur-xl">
              <h3 className="text-xl font-bold text-white mb-6">
                Classement {categories.find(c => c.id === selectedCategory)?.name}
              </h3>
              
              <div className="space-y-6">
                {rankedProducts.slice(1, 6).map((product, index) => (
                  <RankedProductCard 
                    key={product.id} 
                    product={product} 
                    rank={index + 2} 
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Weekly Stats */}
            <div className="glass-pane rounded-2xl p-6 border border-white/10 backdrop-blur-xl">
              <h3 className="text-lg font-bold text-white mb-6">Statistiques de la semaine</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 rounded-xl bg-blue-500/10 border border-blue-500/20">
                  <span className="text-blue-300">Votes totaux</span>
                  <span className="text-white font-semibold">1,247</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-xl bg-purple-500/10 border border-purple-500/20">
                  <span className="text-purple-300">Nouveaux produits</span>
                  <span className="text-white font-semibold">12</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-xl bg-teal-500/10 border border-teal-500/20">
                  <span className="text-teal-300">Visiteurs uniques</span>
                  <span className="text-white font-semibold">8.9K</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-xl bg-green-500/10 border border-green-500/20">
                  <span className="text-green-300">Croissance moyenne</span>
                  <span className="text-white font-semibold">+15%</span>
                </div>
              </div>
            </div>

            {/* Last Week's Rankings */}
            <LastWeekRankings />
          </div>
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="glass-pane px-8 py-4 rounded-full text-white hover:bg-white/10 transition-all duration-300 border border-white/10 backdrop-blur-xl" onClick={() => setIsModalOpen(true)}>
            Voir tous les classements
          </button>
        </div>
      </div>
      {isModalOpen && (
        <ComingSoonModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          message="Fonctionnalité bientôt disponible !"
        />
      )}
    </div>
  );
};

// Grid Discover Page Component (Current View)
const DiscoverPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    { id: 'all', name: 'Toutes les catégories' },
    { id: 'Tech', name: 'Tech' },
    { id: 'Santé', name: 'Santé' },
    { id: 'Environnement', name: 'Environnement' },
    { id: 'Éducation', name: 'Éducation' },
    { id: 'Finance', name: 'Finance' },
    { id: 'E-commerce', name: 'E-commerce' }
  ];

  const filteredProducts = demoProducts
    .filter(product => selectedCategory === 'all' || product.category === selectedCategory)
    .sort((a, b) => b.votes - a.votes); // Default sort by votes

  return (
    <div className="pt-24 px-6 pb-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Découvrez les meilleurs produits
            <span className="block text-2xl sm:text-3xl md:text-4xl text-gray-300 mt-2">
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
            <div className="text-sm text-gray-400">Produits à découvrir</div>
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

        {/* Filters and Sort */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-4">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 backdrop-blur-sm border ${
                  selectedCategory === cat.id
                    ? 'bg-white/30 text-white border-white/50 shadow-xl ring-2 ring-white/40 backdrop-blur-3xl'
                    : 'text-gray-400 hover:text-white hover:bg-white/10 border-white/10'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="glass-pane px-8 py-3 rounded-full text-white hover:bg-white/10 transition-all duration-300" onClick={() => setIsModalOpen(true)}>
            Charger plus de produits
          </button>
        </div>
      </div>
      {isModalOpen && (
        <ComingSoonModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          message="Fonctionnalité bientôt disponible !"
        />
      )}
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
        <Route path="/" element={<RankedHomePage />} />
        <Route path="/trending" element={<DiscoverPage />} />
      </Routes>
    </div>
  );
};

export default Platform; 