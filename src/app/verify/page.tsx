'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function VerifyPage() {
  const [activeTab, setActiveTab] = useState<'upload' | 'hash'>('upload');
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationResult, setVerificationResult] = useState<'original' | 'manipulated' | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [hashInput, setHashInput] = useState('');
  const [fileName, setFileName] = useState('');

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileVerification(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileVerification(e.target.files[0]);
    }
  };

  const handleFileVerification = async (file: File) => {
    setIsVerifying(true);
    setFileName(file.name);
    setVerificationResult(null);
    
    setTimeout(() => {
      setIsVerifying(false);
      setVerificationResult(Math.random() > 0.5 ? 'original' : 'manipulated');
    }, 3000);
  };

  const handleHashVerification = async () => {
    if (!hashInput.trim()) return;
    
    setIsVerifying(true);
    setVerificationResult(null);
    
    setTimeout(() => {
      setIsVerifying(false);
      setVerificationResult(Math.random() > 0.5 ? 'original' : 'manipulated');
    }, 3000);
  };

  const resetVerification = () => {
    setVerificationResult(null);
    setFileName('');
    setHashInput('');
  };

  return (
    <div className="min-h-screen bg-[#030712] text-white overflow-hidden relative">
      {/* Unique Geometric Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-900/20 via-transparent to-orange-900/20"></div>
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
          <div className="flex items-center space-x-8">
            <Link href="/dashboard" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm tracking-wide group relative overflow-hidden">
              <span className="relative z-10 group-hover:translate-y-1 transform transition-transform">DASHBOARD</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link href="/alerts" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm tracking-wide group relative overflow-hidden">
              <span className="relative z-10 group-hover:translate-y-1 transform transition-transform">ALERTS</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>
        </div>
      </nav>

      <div className="relative z-10 max-w-6xl mx-auto px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl mb-8 transform rotate-6">
            <span className="text-4xl">◉</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-light mb-4">
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              BLOCKCHAIN VERIFY
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto tracking-wide">
            Authenticate digital truth through blockchain-powered verification protocols
          </p>
        </div>

        {/* Quantum Tabs */}
        <div className="flex justify-center mb-16">
          <div className="relative bg-[#030712] border border-yellow-500/20 rounded-full p-1 inline-flex">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 rounded-full blur-xl"></div>
            <button
              onClick={() => setActiveTab('upload')}
              className={`relative z-10 px-10 py-4 rounded-full font-light tracking-wider transition-all duration-500 ${
                activeTab === 'upload'
                  ? 'bg-gradient-to-r from-yellow-600 to-orange-600 text-white shadow-lg shadow-orange-600/25'
                  : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              <span className="flex items-center space-x-3">
                <span className="text-xl">⬡</span>
                <span>BLOCKCHAIN FILE</span>
              </span>
            </button>
            <button
              onClick={() => setActiveTab('hash')}
              className={`relative z-10 px-10 py-4 rounded-full font-light tracking-wider transition-all duration-500 ${
                activeTab === 'hash'
                  ? 'bg-gradient-to-r from-yellow-600 to-orange-600 text-white shadow-lg shadow-orange-600/25'
                  : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              <span className="flex items-center space-x-3">
                <span className="text-xl">◈</span>
                <span>BLOCKCHAIN HASH</span>
              </span>
            </button>
          </div>
        </div>

        {/* Upload Tab */}
        {activeTab === 'upload' && !verificationResult && (
          <div className="mb-16">
            <div
              className={`relative group border-2 border-dashed rounded-3xl p-24 text-center transition-all duration-500 ${
                dragActive
                  ? 'border-yellow-500/60 bg-yellow-500/5'
                  : 'border-yellow-500/20 hover:border-yellow-500/40'
              } ${isVerifying ? 'pointer-events-none opacity-60' : ''}`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/10 to-orange-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {!isVerifying ? (
                <div className="relative z-10">
                  <div className="text-9xl mb-8 group-hover:scale-110 transition-transform duration-300">⬡</div>
                  <h3 className="text-3xl font-light mb-4 text-gray-300">
                    INITIATE BLOCKCHAIN SCAN
                  </h3>
                  <p className="text-gray-500 mb-10 tracking-wide">or transfer your blockchain file</p>
                  <label className="inline-block">
                    <input
                      type="file"
                      onChange={handleFileChange}
                      accept="*/*"
                      className="hidden"
                    />
                    <span className="group relative px-12 py-6 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white font-light tracking-wider rounded-full transition-all duration-500 transform hover:scale-105 cursor-pointer inline-flex items-center">
                      <span className="relative z-10">TRANSFER BLOCKCHAIN FILE</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>
                    </span>
                  </label>
                  <p className="text-sm text-gray-600 mt-8 tracking-wide">
                    All blockchain formats supported • Max 100MB
                  </p>
                </div>
              ) : (
                <div className="relative z-10 space-y-8">
                  <div className="text-9xl mb-8 animate-bounce">◉</div>
                  <h3 className="text-3xl font-light mb-4 text-gray-300">
                    ANALYZING {fileName || 'BLOCKCHAIN FILE'}...
                  </h3>
                  <p className="text-gray-500 tracking-wide mb-8">Verifying blockchain authenticity and integrity</p>
                  <div className="flex justify-center">
                    <div className="relative">
                      <div className="w-24 h-24 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
                      <div className="absolute inset-0 w-24 h-24 border-4 border-purple-500 border-b-transparent rounded-full animate-spin animation-delay-150"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Hash Tab */}
        {activeTab === 'hash' && !verificationResult && (
          <div className="mb-16">
            <div className="relative bg-[#030712] border border-purple-500/20 rounded-3xl p-12">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-cyan-600/10 rounded-3xl blur-xl"></div>
              
              <div className="relative z-10">
                <label className="block text-lg font-light mb-6 text-gray-300 tracking-wider">
                  BLOCKCHAIN HASH SIGNATURE
                </label>
                <textarea
                  value={hashInput}
                  onChange={(e) => setHashInput(e.target.value)}
                  placeholder="Enter the blockchain signature here..."
                  className="w-full h-40 px-8 py-6 bg-purple-950/30 border border-purple-500/20 rounded-2xl text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 transition-colors resize-none font-mono text-sm tracking-wide"
                />
                <button
                  onClick={handleHashVerification}
                  disabled={!hashInput.trim() || isVerifying}
                  className="mt-8 group relative px-12 py-6 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 disabled:from-gray-700 disabled:to-gray-800 text-white font-light tracking-wider rounded-full transition-all duration-500 transform hover:scale-105 disabled:scale-100"
                >
                  {isVerifying ? (
                    <div className="flex items-center">
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mr-4"></div>
                      VIEW BLOCKCHAIN EVIDENCE...
                    </div>
                  ) : (
                    <span className="relative z-10">VERIFY BLOCKCHAIN SIGNATURE</span>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Loading State for Hash Verification */}
        {isVerifying && activeTab === 'hash' && (
          <div className="relative bg-[#030712] border border-purple-500/20 rounded-3xl p-20 text-center animate-slideIn">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-cyan-600/10 rounded-3xl blur-xl"></div>
            <div className="relative z-10 space-y-8">
              <div className="text-9xl mb-8 animate-bounce">◉</div>
              <h3 className="text-3xl font-light mb-4 text-gray-300">BLOCKCHAIN AUTHENTICATION...</h3>
              <p className="text-gray-500 tracking-wide">Verifying blockchain signature authenticity</p>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-24 h-24 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
                  <div className="absolute inset-0 w-24 h-24 border-4 border-orange-500 border-b-transparent rounded-full animate-spin animation-delay-150"></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Original Result */}
        {verificationResult === 'original' && (
          <div className="relative group animate-slideIn">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 via-purple-600 to-cyan-600 rounded-3xl blur opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
            <div className="relative bg-[#030712] border border-cyan-500/20 rounded-3xl p-12">
              <div className="flex items-center mb-10">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mr-8 transform rotate-6">
                  <span className="text-4xl">◈</span>
                </div>
                <div>
                  <h3 className="text-4xl font-light text-cyan-400 mb-3">BLOCKCHAIN AUTHENTIC</h3>
                  <p className="text-cyan-300 text-lg tracking-wide">This content is blockchain-verified and unaltered</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-10 mb-10">
                <div className="bg-purple-950/30 rounded-2xl p-8 border border-purple-500/10">
                  <p className="text-gray-500 text-sm mb-3 tracking-wide">BLOCKCHAIN SIGNATURE</p>
                  <p className="text-gray-200 font-light text-xl tracking-wide">Dr. Blockchain Matrix</p>
                </div>
                <div className="bg-purple-950/30 rounded-2xl p-8 border border-purple-500/10">
                  <p className="text-gray-500 text-sm mb-3 tracking-wide">REGISTERED AT</p>
                  <p className="text-gray-200 font-light text-xl tracking-wide">2024-01-15 14:32:18 UTC</p>
                </div>
                <div className="md:col-span-2 bg-purple-950/30 rounded-2xl p-8 border border-purple-500/10">
                  <p className="text-gray-500 text-sm mb-3 tracking-wide">BLOCKCHAIN TRANSACTION HASH</p>
                  <p className="text-gray-200 font-mono text-sm break-all tracking-wide">0x7f9a8b3c4d5e6f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-6">
                <button className="group relative px-10 py-5 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-light tracking-wider rounded-full transition-all duration-500 transform hover:scale-105">
                  <span className="relative z-10">DOWNLOAD BLOCKCHAIN CERTIFICATE</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>
                </button>
                <button 
                  onClick={resetVerification}
                  className="px-10 py-5 border border-purple-500/30 hover:border-cyan-500 text-gray-400 hover:text-cyan-400 font-light tracking-wider rounded-full transition-all duration-300"
                >
                  VERIFY ANOTHER BLOCKCHAIN
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Manipulated Result */}
        {verificationResult === 'manipulated' && (
          <div className="relative group animate-slideIn">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-orange-600 to-pink-600 rounded-3xl blur opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
            <div className="relative bg-[#030712] border border-red-500/20 rounded-3xl p-12">
              <div className="flex items-center mb-10">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl flex items-center justify-center mr-8 transform rotate-6 animate-pulse">
                  <span className="text-4xl">⚠️</span>
                </div>
                <div>
                  <h3 className="text-4xl font-light text-red-400 mb-3">BLOCKCHAIN CORRUPTION</h3>
                  <p className="text-red-300 text-lg tracking-wide">CRITICAL: This content has been blockchain-tampered</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-10 mb-10">
                <div className="bg-purple-950/30 rounded-2xl p-8 border border-red-500/10">
                  <p className="text-gray-500 text-sm mb-3 tracking-wide">BLOCKCHAIN ANOMALY</p>
                  <p className="text-gray-200 font-light text-xl tracking-wide">Content modified in blockchain section 3</p>
                </div>
                <div className="bg-purple-950/30 rounded-2xl p-8 border border-red-500/10">
                  <p className="text-gray-500 text-sm mb-3 tracking-wide">SEVERITY</p>
                  <span className="inline-block px-6 py-3 bg-red-600 text-white font-light tracking-wider rounded-full">
                    BLOCKCHAIN CRITICAL
                  </span>
                </div>
                <div className="bg-purple-950/30 rounded-2xl p-8 border border-red-500/10">
                  <p className="text-gray-500 text-sm mb-3 tracking-wide">DETECTED AT</p>
                  <p className="text-gray-200 font-light text-xl tracking-wide">2024-01-20 09:15:42 UTC</p>
                </div>
                <div className="bg-purple-950/30 rounded-2xl p-8 border border-red-500/10">
                  <p className="text-gray-500 text-sm mb-3 tracking-wide">ORIGINAL BLOCKCHAIN</p>
                  <p className="text-gray-200 font-mono text-sm bg-purple-950/50 px-4 py-3 rounded-lg tracking-wide">0x7f9a8b3c...d3e4f5</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-6">
                <button className="group relative px-10 py-5 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-light tracking-wider rounded-full transition-all duration-500 transform hover:scale-105">
                  <span className="relative z-10">VIEW BLOCKCHAIN EVIDENCE</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>
                </button>
                <button 
                  onClick={resetVerification}
                  className="px-10 py-5 border border-purple-500/30 hover:border-cyan-500 text-gray-400 hover:text-cyan-400 font-light tracking-wider rounded-full transition-all duration-300"
                >
                  VERIFY ANOTHER BLOCKCHAIN
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .animate-slideIn {
          animation: slideIn 0.5s ease-out forwards;
        }
        
        .animation-delay-150 {
          animation-delay: 150ms;
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
