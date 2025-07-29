import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
}

const ComingSoonModal: React.FC<ComingSoonModalProps> = ({ isOpen, onClose, message }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

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
    <div className="fixed top-0 left-0 w-screen h-screen bg-black/70 backdrop-blur-md flex items-center justify-center z-[999] transition-opacity duration-300" onClick={onClose}>
              <div className="glass-pane rounded-2xl p-4 sm:p-8 max-w-sm sm:max-w-lg w-full mx-4 relative" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
        <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">{message}</h3>
            <p className="text-gray-400 mb-6">Soyez le premier informé des nouveautés de TunisiaLaunch.</p>
        </div>
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
              Rejoindre
            </button>
          </form>
        ) : (
          <div className="glass-pane rounded-full px-6 py-3 text-green-400 flex items-center justify-center gap-2">
            <CheckCircle className="w-5 h-5" />
            Merci ! Vous êtes sur la liste.
          </div>
        )}
      </div>
    </div>
  );
};

export default ComingSoonModal;