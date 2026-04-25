'use client';

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#030712] text-white overflow-hidden relative">
      {/* Advanced Geometric Background with Morphing */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20"></div>
        
        {/* Morphing Orb Elements with Yellow/Orange */}
        <div className="absolute top-32 left-40 w-80 h-80 bg-gradient-to-br from-yellow-600/40 to-orange-600/40 transform rotate-45 blur-3xl animate-morph-1"></div>
        <div className="absolute bottom-40 right-32 w-72 h-72 bg-gradient-to-br from-orange-600/40 to-red-600/40 transform -rotate-12 blur-3xl animate-morph-2"></div>
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-br from-amber-600/30 to-yellow-600/30 transform rotate-12 blur-2xl animate-morph-3"></div>
        <div className="absolute top-1/2 left-1/4 w-56 h-56 bg-gradient-to-br from-yellow-600/30 to-orange-600/30 transform rotate-45 blur-2xl animate-morph-4"></div>
        
        {/* Liquid Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full animate-grid-flow" style={{
            backgroundImage: `linear-gradient(45deg, #fbbf24 25%, transparent 25%, transparent 75%, #fbbf24 75%, #fbbf24),
                            linear-gradient(-45deg, #f97316 25%, transparent 25%, transparent 75%, #f97316 75%, #f97316),
                            linear-gradient(135deg, #f59e0b 25%, transparent 25%, transparent 75%, #f59e0b 75%, #f59e0b)`,
            backgroundSize: '120px 120px, 80px 80px, 160px 160px',
            backgroundPosition: '0 0, 40px 40px, 80px 80px'
          }}></div>
        </div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-2 h-2 bg-yellow-400 rounded-full animate-float-1 opacity-60"></div>
          <div className="absolute top-40 right-40 w-3 h-3 bg-orange-400 rounded-full animate-float-2 opacity-50"></div>
          <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-amber-400 rounded-full animate-float-3 opacity-70"></div>
          <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-yellow-400 rounded-full animate-float-4 opacity-40"></div>
          <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-orange-400 rounded-full animate-float-5 opacity-60"></div>
        </div>
      </div>

      {/* Diagonal Navigation with Black/Yellow/Orange Effects */}
      <nav className="relative z-10 px-8 py-6 transform skew-y-1">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 transform rotate-3 flex items-center justify-center group-hover:rotate-6 transition-transform duration-500 group-hover:scale-110">
              <span className="text-white font-bold text-xl group-hover:text-yellow-300 transition-colors">T</span>
            </div>
            <span className="text-2xl font-light tracking-wider text-gray-400 group-hover:text-yellow-400 transition-colors group-hover:translate-x-1 transform">TRUTHYYY</span>
          </Link>
          <div className="flex items-center space-x-8 transform -skew-y-1">
            <Link href="/verify" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm tracking-wide group relative overflow-hidden">
              <span className="relative z-10 group-hover:translate-y-1 transform transition-transform">VERIFY</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link href="/dashboard" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm tracking-wide group relative overflow-hidden">
              <span className="relative z-10 group-hover:translate-y-1 transform transition-transform">DASHBOARD</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link href="/register" className="px-5 py-2.5 border border-yellow-500/30 hover:border-yellow-500 text-yellow-300 hover:text-white rounded-full transition-all text-sm tracking-wide group relative overflow-hidden">
              <span className="relative z-10 group-hover:scale-110 transform transition-transform">SIGN UP</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
            </Link>
            <Link href="/login" className="px-5 py-2.5 border border-yellow-500/30 hover:border-yellow-500 text-yellow-300 hover:text-white rounded-full transition-all text-sm tracking-wide group relative overflow-hidden">
              <span className="relative z-10 group-hover:scale-110 transform transition-transform">SIGN IN</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
            </Link>
          </div>
        </div>
      </nav>

      {/* Liquid Hero Layout with Parallax */}
      <div className="relative z-10 min-h-screen flex items-center px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Floating Left Content */}
          <div className="space-y-8 transform hover:scale-105 transition-transform duration-700">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full group hover:bg-yellow-500/20 transition-all duration-500">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse group-hover:scale-150 transition-transform"></div>
              <span className="text-yellow-300 text-sm font-medium tracking-wide group-hover:text-orange-300 transition-colors">BLOCKCHAIN-SECURED VERIFICATION</span>
            </div>
            
            <div className="space-y-4 transform hover:translate-x-2 transition-transform duration-500">
              <h1 className="text-6xl lg:text-7xl font-light leading-tight">
                <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent group-hover:from-orange-400 group-hover:to-yellow-400 transition-all duration-1000">
                  MAKING
                </span>
                <span className="block bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent group-hover:from-yellow-400 group-hover:to-orange-400 transition-all duration-1000">
                  TRUTH
                </span>
                <span className="block bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent group-hover:from-orange-400 group-hover:to-amber-400 transition-all duration-1000">
                  PROVABLE
                </span>
              </h1>
            </div>
            
            <p className="text-xl text-gray-400 leading-relaxed max-w-lg group-hover:text-gray-300 transition-colors duration-500">
              Every document secured with <span className="text-yellow-400 font-medium group-hover:text-orange-400 transition-colors">blockchain cryptography</span>. 
              Instant verification through <span className="text-orange-400 font-medium group-hover:text-yellow-400 transition-colors">decentralized truth protocols</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                href="/dashboard"
                className="group relative px-8 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 text-white font-medium rounded-full transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-600/30 overflow-hidden hover:rotate-1"
              >
                <span className="relative z-10 flex items-center">
                  REGISTER CONTENT
                  <span className="ml-2 transform group-hover:translate-x-2 group-hover:rotate-12 transition-transform">⬡</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>
              </Link>
              <Link 
                href="/verify"
                className="group relative px-8 py-4 border border-yellow-500/30 text-yellow-300 hover:text-white rounded-full transition-all duration-500 transform hover:scale-105 hover:border-orange-500 hover:-rotate-1 overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  VERIFY NOW
                  <span className="ml-2 transform group-hover:translate-x-2 group-hover:-rotate-12 transition-transform">◈</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-lg"></div>
              </Link>
            </div>
          </div>
          
          {/* Morphing Right Content */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700 group-hover:scale-110"></div>
            <div className="relative bg-[#030712] border border-yellow-500/20 rounded-3xl p-8 transform hover:rotate-3 transition-all duration-700">
              <div className="text-center space-y-6">
                <div className="text-8xl group-hover:scale-110 group-hover:rotate-180 transition-transform duration-1000">⬡</div>
                <h3 className="text-2xl font-light text-yellow-300 group-hover:text-orange-300 transition-colors">BLOCKCHAIN MATRIX</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">Advanced cryptographic algorithms protecting digital truth</p>
                <div className="flex justify-center space-x-4">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse delay-1000"></div>
                  <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse delay-2000"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Unique Stats Section
      <div className="relative z-10 px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="text-5xl font-light text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors">
                <span className="inline-block transform group-hover:scale-110 transition-transform">∞</span>
              </div>
              <div className="text-gray-500 text-sm tracking-wide">INTEGRITY SCORE</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl font-light text-purple-400 mb-2 group-hover:text-purple-300 transition-colors">
                <span className="inline-block transform group-hover:rotate-180 transition-transform duration-1000"></span>
              </div>
              <div className="text-gray-500 text-sm tracking-wide">BLOCKCHAIN SECURE</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl font-light text-pink-400 mb-2 group-hover:text-pink-300 transition-colors">
                <span className="inline-block transform group-hover:scale-125 transition-transform">◈</span>
              </div>
              <div className="text-gray-500 text-sm tracking-wide">BLOCKCHAIN PROOF</div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Asymmetric Feature Section */}
      <div className="relative z-10 px-8 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Offset First Card */}
            <div className="lg:translate-y-8">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative bg-[#030712] border border-purple-500/20 rounded-3xl p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mb-6 transform rotate-3">
                    <span className="text-2xl">⬡</span>
                  </div>
                  <h3 className="text-2xl font-light mb-4 text-purple-300">BLOCKCHAIN REGISTER</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Documents secured with blockchain cryptographic algorithms and distributed ledger technology.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Center Card */}
            <div>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative bg-[#030712] border border-cyan-500/20 rounded-3xl p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-2xl flex items-center justify-center mb-6 transform -rotate-3">
                    <span className="text-2xl">◉</span>
                  </div>
                  <h3 className="text-2xl font-light mb-4 text-cyan-300">REALITY MONITOR</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Continuous monitoring across multiple platforms detecting any anomalies in the fabric of digital truth.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Offset Third Card */}
            <div className="lg:translate-y-8">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative bg-[#030712] border border-pink-500/20 rounded-3xl p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-700 rounded-2xl flex items-center justify-center mb-6 transform rotate-6">
                    <span className="text-2xl">✦</span>
                  </div>
                  <h3 className="text-2xl font-light mb-4 text-pink-300">TRUTH VERIFY</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Multi-layered verification process cross-referencing blockchain signatures with decentralized truth protocols.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Unique SDG Section */}
      <div className="relative z-10 px-8 py-32 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-light mb-4 text-gray-300">GLOBAL IMPACT MATRIX</h2>
          <p className="text-gray-500 mb-16 max-w-2xl mx-auto">Aligned with United Nations Sustainable Development Goals through blockchain truth protocols</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="relative group transform hover:rotate-3 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/30 to-orange-600/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative bg-gradient-to-br from-yellow-600 to-orange-700 rounded-2xl p-6 border border-yellow-500/30">
                <div className="text-4xl font-light text-white mb-2">3</div>
                <div className="text-xs text-yellow-200 font-medium">HEALTH</div>
              </div>
            </div>
            
            <div className="relative group transform hover:-rotate-3 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/30 to-pink-600/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative bg-gradient-to-br from-red-600 to-pink-700 rounded-2xl p-6 border border-red-500/30">
                <div className="text-4xl font-light text-white mb-2">4</div>
                <div className="text-xs text-red-200 font-medium">EDUCATION</div>
              </div>
            </div>
            
            <div className="relative group transform hover:rotate-6 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-indigo-600/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl p-6 border border-purple-500/30">
                <div className="text-4xl font-light text-white mb-2">10</div>
                <div className="text-xs text-purple-200 font-medium">EQUALITY</div>
              </div>
            </div>
            
            <div className="relative group transform hover:-rotate-6 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-blue-600/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative bg-gradient-to-br from-cyan-600 to-blue-700 rounded-2xl p-6 border border-cyan-500/30">
                <div className="text-4xl font-light text-white mb-2">16</div>
                <div className="text-xs text-cyan-200 font-medium">JUSTICE</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Unique Footer */}
      <footer className="relative z-10 border-t border-gray-800 py-12 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-500 transform rotate-6 flex items-center justify-center group hover:rotate-12 hover:scale-110 transition-all duration-500">
              <span className="text-white font-bold group-hover:text-yellow-200 transition-colors">T</span>
            </div>
            <span className="text-lg font-light tracking-wider text-gray-400 group-hover:text-yellow-300 transition-colors">TRUTHYYY</span>
          </div>
          <p className="text-gray-600 text-sm tracking-wide">
            BLOCKCHAIN-SECURED TRUTH PROTOCOLS • ESTABLISHED 2024
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes mouseUp {
          0% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-10px) scale(1.05); }
          100% { transform: translateY(0) scale(1); }
        }
        
        .mouse-up-animation {
          animation: mouseUp 0.3s ease-out;
        }
        
        @keyframes morph-1 {
          0%, 100% { 
            transform: rotate(45deg) scale(1); 
            border-radius: 50%;
          }
          25% { 
            transform: rotate(60deg) scale(1.1); 
            border-radius: 40%;
          }
          50% { 
            transform: rotate(30deg) scale(0.9); 
            border-radius: 60%;
          }
          75% { 
            transform: rotate(75deg) scale(1.05); 
            border-radius: 45%;
          }
        }
        
        @keyframes morph-2 {
          0%, 100% { 
            transform: rotate(-12deg) scale(1) translateX(0); 
            border-radius: 40%;
          }
          33% { 
            transform: rotate(-30deg) scale(1.2) translateX(20px); 
            border-radius: 60%;
          }
          66% { 
            transform: rotate(15deg) scale(0.8) translateX(-10px); 
            border-radius: 30%;
          }
        }
        
        @keyframes morph-3 {
          0%, 100% { 
            transform: rotate(12deg) scale(1) translateY(0); 
            border-radius: 50%;
          }
          50% { 
            transform: rotate(-20deg) scale(1.3) translateY(-30px); 
            border-radius: 35%;
          }
        }
        
        @keyframes morph-4 {
          0%, 100% { 
            transform: rotate(45deg) scale(1); 
            border-radius: 45%;
          }
          25% { 
            transform: rotate(90deg) scale(0.7); 
            border-radius: 55%;
          }
          50% { 
            transform: rotate(135deg) scale(1.1); 
            border-radius: 35%;
          }
          75% { 
            transform: rotate(180deg) scale(0.9); 
            border-radius: 50%;
          }
        }
        
        @keyframes grid-flow {
          0% { 
            background-position: 0% 0%, 40px 40px, 80px 80px;
            transform: translateX(0);
          }
          50% { 
            background-position: 100% 0%, 140px 40px, 180px 80px;
            transform: translateX(-20px);
          }
          100% { 
            background-position: 0% 0%, 40px 40px, 80px 80px;
            transform: translateX(0);
          }
        }
        
        @keyframes float-1 {
          0%, 100% { 
            transform: translate(0, 0) scale(1); 
            opacity: 0.6;
          }
          25% { 
            transform: translate(30px, -40px) scale(1.2); 
            opacity: 0.8;
          }
          50% { 
            transform: translate(-20px, -80px) scale(0.8); 
            opacity: 0.4;
          }
          75% { 
            transform: translate(40px, -120px) scale(1.1); 
            opacity: 0.7;
          }
        }
        
        @keyframes float-2 {
          0%, 100% { 
            transform: translate(0, 0) scale(1); 
            opacity: 0.5;
          }
          33% { 
            transform: translate(-40px, 60px) scale(0.7); 
            opacity: 0.3;
          }
          66% { 
            transform: translate(30px, 120px) scale(1.3); 
            opacity: 0.6;
          }
        }
        
        @keyframes float-3 {
          0%, 100% { 
            transform: translate(0, 0) scale(1); 
            opacity: 0.7;
          }
          20% { 
            transform: translate(50px, -30px) scale(1.1); 
            opacity: 0.9;
          }
          40% { 
            transform: translate(-30px, -60px) scale(0.9); 
            opacity: 0.5;
          }
          60% { 
            transform: translate(20px, -90px) scale(1.2); 
            opacity: 0.8;
          }
          80% { 
            transform: translate(-10px, -120px) scale(0.8); 
            opacity: 0.6;
          }
        }
        
        @keyframes float-4 {
          0%, 100% { 
            transform: translate(0, 0) scale(1); 
            opacity: 0.4;
          }
          50% { 
            transform: translate(-60px, 80px) scale(1.5); 
            opacity: 0.2;
          }
        }
        
        @keyframes float-5 {
          0%, 100% { 
            transform: translate(0, 0) scale(1); 
            opacity: 0.6;
          }
          25% { 
            transform: translate(-30px, 40px) scale(0.8); 
            opacity: 0.4;
          }
          50% { 
            transform: translate(40px, 80px) scale(1.2); 
            opacity: 0.8;
          }
          75% { 
            transform: translate(-20px, 120px) scale(0.9); 
            opacity: 0.5;
          }
        }
        
        .animate-morph-1 {
          animation: morph-1 15s ease-in-out infinite;
        }
        
        .animate-morph-2 {
          animation: morph-2 12s ease-in-out infinite;
        }
        
        .animate-morph-3 {
          animation: morph-3 18s ease-in-out infinite;
        }
        
        .animate-morph-4 {
          animation: morph-4 20s ease-in-out infinite;
        }
        
        .animate-grid-flow {
          animation: grid-flow 25s linear infinite;
        }
        
        .animate-float-1 {
          animation: float-1 8s ease-in-out infinite;
        }
        
        .animate-float-2 {
          animation: float-2 10s ease-in-out infinite;
        }
        
        .animate-float-3 {
          animation: float-3 7s ease-in-out infinite;
        }
        
        .animate-float-4 {
          animation: float-4 12s ease-in-out infinite;
        }
        
        .animate-float-5 {
          animation: float-5 9s ease-in-out infinite;
        }
        
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
