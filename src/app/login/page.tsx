'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [focusedField, setFocusedField] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    setTimeout(() => {
      if (email && password) {
        localStorage.setItem('jwt_token', 'mock_jwt_token_' + Date.now());
        if (rememberMe) {
          localStorage.setItem('remember_email', email);
        }
        router.push('/dashboard');
      } else {
        setError('All blockchain fields must be calibrated');
      }
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#030712] text-white overflow-hidden relative">
      {/* Advanced Morphing Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20"></div>
        
        {/* Morphing Orbs with Yellow/Orange */}
        <div className="absolute top-20 left-32 w-72 h-72 bg-gradient-to-br from-yellow-600/40 to-orange-600/40 transform rotate-12 blur-3xl animate-morph-1"></div>
        <div className="absolute bottom-40 right-20 w-64 h-64 bg-gradient-to-br from-orange-600/40 to-red-600/40 transform -rotate-6 blur-3xl animate-morph-2"></div>
        <div className="absolute top-1/2 left-1/3 w-56 h-56 bg-gradient-to-br from-amber-600/30 to-yellow-600/30 transform rotate-45 blur-2xl animate-morph-3"></div>
        
        {/* Liquid Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full animate-grid-flow" style={{
            backgroundImage: `linear-gradient(60deg, #fbbf24 25%, transparent 25%, transparent 75%, #fbbf24 75%, #fbbf24),
                            linear-gradient(-60deg, #f97316 25%, transparent 25%, transparent 75%, #f97316 75%, #f97316)`,
            backgroundSize: '100px 100px, 60px 60px',
            backgroundPosition: '0 0, 30px 30px'
          }}></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-32 left-24 w-3 h-3 bg-yellow-400 rounded-full animate-float-1 opacity-60"></div>
          <div className="absolute top-1/3 right-32 w-2 h-2 bg-orange-400 rounded-full animate-float-2 opacity-50"></div>
          <div className="absolute bottom-28 left-1/2 w-4 h-4 bg-amber-400 rounded-full animate-float-3 opacity-70"></div>
        </div>
      </div>

      {/* Black/Yellow/Orange Navigation */}
      <nav className="relative z-10 px-8 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 transform rotate-3 flex items-center justify-center group-hover:rotate-6 group-hover:scale-110 transition-all duration-500">
              <span className="text-white font-bold text-xl group-hover:text-yellow-300 transition-colors">T</span>
            </div>
            <span className="text-2xl font-light tracking-wider text-gray-400 group-hover:text-yellow-400 group-hover:translate-x-1 transition-all duration-500">TRUTHYYY</span>
          </Link>
          <Link href="/register" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm tracking-wide group relative overflow-hidden">
            <span className="relative z-10 group-hover:translate-y-1 transform transition-transform">NEW TO BLOCKCHAIN? →</span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </div>
      </nav>

      {/* Morphing Login Form */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-8 py-12">
        <div className="w-full max-w-md">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 via-orange-600 to-amber-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition-all duration-1000 group-hover:scale-105"></div>
            <div className="relative bg-[#030712] border border-yellow-500/20 rounded-3xl p-10 backdrop-blur-xl transform hover:rotate-1 transition-all duration-700">
              {/* Liquid Header */}
              <div className="text-center mb-10">
                <div className="relative inline-flex items-center justify-center w-20 h-20 mb-6 group">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-2xl flex items-center justify-center transform -rotate-3 group-hover:rotate-6 transition-transform duration-500">
                    <span className="text-3xl group-hover:scale-110 group-hover:rotate-180 transition-transform duration-1000">⬡</span>
                  </div>
                </div>
                <h1 className="text-3xl font-light mb-2 text-gray-200 group-hover:text-yellow-300 transition-colors duration-500">BLOCKCHAIN ACCESS</h1>
                <p className="text-gray-500 text-sm tracking-wide group-hover:text-gray-400 transition-colors duration-500">Initialize your truth protocol</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {error && (
                  <div className="bg-red-600/10 border border-red-600/30 text-red-400 px-4 py-3 rounded-2xl text-sm backdrop-blur-sm">
                    {error}
                  </div>
                )}

                {/* Email Field */}
                <div className="space-y-3">
                  <label className="text-xs font-medium text-gray-400 tracking-wider">BLOCKCHAIN IDENTITY</label>
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField('')}
                      placeholder="your.blockchain.id@"
                      className={`w-full px-5 py-4 bg-yellow-950/30 border rounded-2xl text-white placeholder-gray-600 focus:outline-none transition-all duration-500 ${
                        focusedField === 'email' 
                          ? 'border-yellow-500 bg-yellow-950/50 shadow-lg shadow-yellow-500/20' 
                          : 'border-yellow-500/20 hover:border-yellow-500/40'
                      }`}
                      required
                    />
                    <div className={`absolute right-4 top-1/2 transform -translate-y-1/2 transition-all duration-300 ${
                      email ? 'opacity-100 scale-110' : 'opacity-0 scale-75'
                    }`}>
                      <span className="text-yellow-400">◈</span>
                    </div>
                  </div>
                </div>

                {/* Password Field */}
                <div className="space-y-3">
                  <label className="text-xs font-medium text-gray-400 tracking-wider">BLOCKCHAIN PERSISTENCE</label>
                  <div className="relative">
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onFocus={() => setFocusedField('password')}
                      onBlur={() => setFocusedField('')}
                      placeholder="••••••••••••"
                      className={`w-full px-5 py-4 bg-yellow-950/30 border rounded-2xl text-white placeholder-gray-600 focus:outline-none transition-all duration-500 ${
                        focusedField === 'password' 
                          ? 'border-yellow-500 bg-yellow-950/50 shadow-lg shadow-yellow-500/20' 
                          : 'border-yellow-500/20 hover:border-yellow-500/40'
                      }`}
                      required
                    />
                    <div className={`absolute right-4 top-1/2 transform -translate-y-1/2 transition-all duration-300 ${
                      password ? 'opacity-100 scale-110' : 'opacity-0 scale-75'
                    }`}>
                      <span className="text-cyan-400">⚛</span>
                    </div>
                  </div>
                </div>

                {/* Remember & Forgot */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="w-5 h-5 bg-purple-950/30 border border-purple-500/20 rounded focus:ring-cyan-500 focus:border-cyan-500 text-cyan-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded opacity-0 group-hover:opacity-20 transition-opacity"></div>
                    </div>
                    <span className="text-sm text-gray-400 tracking-wide">QUANTUM PERSISTENCE</span>
                  </label>
                  
                  <a href="#" className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors tracking-wide">
                    RESET KEY?
                  </a>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="group relative w-full py-4 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 disabled:from-gray-700 disabled:to-gray-800 text-white font-light tracking-wider rounded-full transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-yellow-600/30 disabled:scale-100 overflow-hidden"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                      INITIALIZING...
                    </div>
                  ) : (
                    <span className="relative z-10">ENTER BLOCKCHAIN REALM</span>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>
                </button>
              </form>

              {/* Divider */}
              <div className="relative my-10">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-purple-500/20"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-[#030712] text-gray-500 tracking-wide">BLOCKCHAIN THRESHOLD</span>
                </div>
              </div>

              {/* Sign Up Link */}
              <div className="text-center">
                <Link 
                  href="/register"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-light tracking-wide group"
                >
                  ACCESS EXISTING PROTOCOL
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Blockchain Status */}
          <div className="mt-8 flex items-center justify-center space-x-8 text-xs text-gray-600 tracking-wide">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              <span>BLOCKCHAIN SECURE</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse delay-1000"></div>
              <span>BLOCKCHAIN PROOF</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse delay-2000"></div>
              <span>DECENTRALIZED TRUTH</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .delay-1000 {
          animation-delay: 1s;
        }
        
        .delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}
