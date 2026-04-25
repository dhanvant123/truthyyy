'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface RegisteredContent {
  id: string;
  filename: string;
  status: 'verified' | 'pending' | 'failed';
  date: string;
  hash: string;
  size?: string;
  type?: string;
}

export default function DashboardPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadStep, setUploadStep] = useState(0);
  const [certificateUrl, setCertificateUrl] = useState<string | null>(null);
  const [registeredContent, setRegisteredContent] = useState<RegisteredContent[]>([]);
  const [stats, setStats] = useState({
    total: 0,
    verified: 0,
    pending: 0,
    failed: 0
  });

  useEffect(() => {
    const token = localStorage.getItem('jwt_token');
    if (!token) {
      router.push('/login');
    } else {
      setIsAuthenticated(true);
      loadRegisteredContent();
    }
  }, [router]);

  const loadRegisteredContent = () => {
    const mockContent: RegisteredContent[] = [
      {
        id: '1',
        filename: 'quantum_contract_2024.pdf',
        status: 'verified',
        date: '2024-01-15 14:32:18',
        hash: '0x7f9a8b3c4d5e6f1a2b3c4d5e6f7a8b9c0d1e2f3',
        size: '2.4 MB',
        type: 'PDF'
      },
      {
        id: '2',
        filename: 'medical_matrix.jpg',
        status: 'verified',
        date: '2024-01-14 09:15:42',
        hash: '0xa4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b',
        size: '1.8 MB',
        type: 'Image'
      },
      {
        id: '3',
        filename: 'research_quantum.pdf',
        status: 'pending',
        date: '2024-01-13 16:20:35',
        hash: '0xc5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d',
        size: '5.2 MB',
        type: 'PDF'
      },
      {
        id: '4',
        filename: 'identity_quantum.png',
        status: 'verified',
        date: '2024-01-12 11:45:22',
        hash: '0xd8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e',
        size: '3.1 MB',
        type: 'Image'
      }
    ];
    setRegisteredContent(mockContent);
    
    const total = mockContent.length;
    const verified = mockContent.filter(c => c.status === 'verified').length;
    const pending = mockContent.filter(c => c.status === 'pending').length;
    const failed = mockContent.filter(c => c.status === 'failed').length;
    setStats({ total, verified, pending, failed });
  };

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
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileUpload(e.target.files[0]);
    }
  };

  const handleFileUpload = async (file: File) => {
    setIsUploading(true);
    setUploadStep(1);
    setCertificateUrl(null);

    await new Promise(resolve => setTimeout(resolve, 2000));
    setUploadStep(2);

    await new Promise(resolve => setTimeout(resolve, 2000));
    setUploadStep(3);

    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsUploading(false);
    setUploadStep(0);
    
    setCertificateUrl('https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=quantum_certificate_' + Date.now());
    
    const newContent: RegisteredContent = {
      id: Date.now().toString(),
      filename: file.name,
      status: 'verified',
      date: new Date().toISOString().replace('T', ' ').substring(0, 19),
      hash: '0x' + Math.random().toString(16).substring(2, 66),
      size: (file.size / (1024 * 1024)).toFixed(1) + ' MB',
      type: file.type.split('/')[0].charAt(0).toUpperCase() + file.type.split('/')[0].slice(1)
    };
    setRegisteredContent(prev => [newContent, ...prev]);
    
    setStats(prev => ({
      ...prev,
      total: prev.total + 1,
      verified: prev.verified + 1
    }));
  };

  const handleVerify = (hash: string) => {
    router.push(`/verify?hash=${hash}`);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#030712] text-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400 tracking-wide">CALIBRATING BLOCKCHAIN AUTH...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#030712] text-white overflow-hidden relative">
      {/* Advanced Black/Yellow/Orange Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black/40 via-transparent to-orange-900/20"></div>
        
        {/* Morphing Orbs with Yellow/Orange */}
        <div className="absolute top-20 left-32 w-72 h-72 bg-gradient-to-br from-yellow-600/40 to-orange-600/40 transform rotate-12 blur-3xl animate-morph-1"></div>
        <div className="absolute bottom-40 right-20 w-64 h-64 bg-gradient-to-br from-orange-600/40 to-red-600/40 transform -rotate-6 blur-3xl animate-morph-2"></div>
        <div className="absolute top-1/2 left-1/3 w-56 h-56 bg-gradient-to-br from-amber-600/30 to-yellow-600/30 transform rotate-45 blur-2xl animate-morph-3"></div>
        
        {/* Liquid Grid Pattern */}
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
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 transform rotate-3 flex items-center justify-center group-hover:rotate-6 transition-transform duration-500">
              <span className="text-white font-bold text-xl">T</span>
            </div>
            <span className="text-2xl font-light tracking-wider">TRUTHYYY</span>
          </Link>
          <div className="flex items-center space-x-8">
            <Link href="/verify" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm tracking-wide">VERIFY</Link>
            <Link href="/alerts" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm tracking-wide">ALERTS</Link>
            <button 
              onClick={() => {
                localStorage.removeItem('jwt_token');
                router.push('/login');
              }}
              className="px-5 py-2.5 border border-yellow-500/30 hover:border-yellow-500 text-yellow-300 hover:text-white rounded-full transition-all text-sm tracking-wide"
            >
              LOGOUT
            </button>
          </div>
        </div>
      </nav>

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full mb-6">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            <span className="text-yellow-300 text-sm font-medium tracking-wide">BLOCKCHAIN DASHBOARD</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-light mb-4">
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              BLOCKCHAIN REALM
            </span>
          </h1>
          <p className="text-xl text-gray-400 tracking-wide">
            Manage your decentralized truth protocols
          </p>
        </div>

        {/* Black/Yellow/Orange Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="group relative transform hover:rotate-3 transition-transform duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/20 to-orange-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative bg-[#030712] border border-yellow-500/20 rounded-3xl p-8">
              <div className="text-4xl font-light text-yellow-400 mb-2 group-hover:scale-110 transition-transform">{stats.total}</div>
              <div className="text-sm text-gray-500 tracking-wide">BLOCKCHAIN DOCS</div>
            </div>
          </div>
          
          <div className="group relative transform hover:-rotate-3 transition-transform duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-amber-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative bg-[#030712] border border-orange-500/20 rounded-3xl p-8">
              <div className="text-4xl font-light text-orange-400 mb-2 group-hover:scale-110 transition-transform">{stats.verified}</div>
              <div className="text-sm text-gray-500 tracking-wide">VERIFIED</div>
            </div>
          </div>
          
          <div className="group relative transform hover:rotate-6 transition-transform duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-yellow-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative bg-[#030712] border border-amber-500/20 rounded-3xl p-8">
              <div className="text-4xl font-light text-amber-400 mb-2 group-hover:scale-110 transition-transform">{stats.pending}</div>
              <div className="text-sm text-gray-500 tracking-wide">PENDING</div>
            </div>
          </div>
          
          <div className="group relative transform hover:-rotate-6 transition-transform duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-red-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative bg-[#030712] border border-orange-500/20 rounded-3xl p-8">
              <div className="text-4xl font-light text-orange-400 mb-2 group-hover:scale-110 transition-transform">{stats.failed}</div>
              <div className="text-sm text-gray-500 tracking-wide">FAILED</div>
            </div>
          </div>
        </div>

        {/* Black/Yellow/Orange Upload Zone */}
        <div className="mb-16">
          <div
            className={`relative group border-2 border-dashed rounded-3xl p-20 text-center transition-all duration-500 ${
              dragActive
                ? 'border-yellow-500/60 bg-yellow-500/5'
                : 'border-yellow-500/20 hover:border-yellow-500/40'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/10 to-orange-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {!isUploading ? (
              <div className="relative z-10">
                <div className="text-8xl mb-6 group-hover:scale-110 transition-transform duration-300">⬡</div>
                <h3 className="text-2xl font-light mb-4 text-gray-300">
                  BLOCKCHAIN PROCESSING...
                </h3>
                <p className="text-gray-500 mb-8 tracking-wide">or browse your files</p>
                <label className="inline-block">
                  <input
                    type="file"
                    onChange={handleFileChange}
                    accept=".pdf,.png,.jpg,.jpeg"
                    className="hidden"
                  />
                  <span className="group relative px-10 py-5 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white font-light tracking-wider rounded-full transition-all duration-500 transform hover:scale-105 cursor-pointer inline-flex items-center">
                    <span className="relative z-10">BROWSE FILES</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>
                  </span>
                </label>
                <p className="text-sm text-gray-600 mt-6 tracking-wide">
                  All blockchain formats supported • Max 50MB
                </p>
              </div>
            ) : (
              <div className="relative z-10 space-y-8">
                <div className="text-8xl mb-6 animate-spin">⬡</div>
                <h3 className="text-2xl font-light mb-2 text-gray-300">BLOCKCHAIN PROCESSING...</h3>
                
                <div className="space-y-6 max-w-md mx-auto">
                  <div className={`flex items-center space-x-4 transition-all duration-500 ${uploadStep >= 1 ? 'text-yellow-400 translate-x-4' : 'text-gray-600'}`}>
                    <div className={`w-10 h-10 rounded-full border-2 transition-all duration-500 ${uploadStep >= 1 ? 'bg-yellow-600 border-yellow-600 scale-110' : 'border-yellow-500/30'} flex items-center justify-center`}>
                      {uploadStep >= 1 && <span className="text-white">◈</span>}
                    </div>
                    <span className="tracking-wide">BLOCKCHAIN FINGERPRINT...</span>
                  </div>
                  
                  <div className={`flex items-center space-x-4 transition-all duration-500 ${uploadStep >= 2 ? 'text-orange-400 translate-x-4' : 'text-gray-600'}`}>
                    <div className={`w-10 h-10 rounded-full border-2 transition-all duration-500 ${uploadStep >= 2 ? 'bg-orange-600 border-orange-600 scale-110' : 'border-orange-500/30'} flex items-center justify-center`}>
                      {uploadStep >= 2 && <span className="text-white">⚛</span>}
                    </div>
                    <span className="tracking-wide">BLOCKCHAIN STAMP...</span>
                  </div>
                  
                  <div className={`flex items-center space-x-4 transition-all duration-500 ${uploadStep >= 3 ? 'text-amber-400 translate-x-4' : 'text-gray-600'}`}>
                    <div className={`w-10 h-10 rounded-full border-2 transition-all duration-500 ${uploadStep >= 3 ? 'bg-amber-600 border-amber-600 scale-110' : 'border-amber-500/30'} flex items-center justify-center`}>
                      {uploadStep >= 3 && <span className="text-white">✦</span>}
                    </div>
                    <span className="tracking-wide">BLOCKCHAIN CERTIFICATE...</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Black/Yellow/Orange Certificate Card */}
        {certificateUrl && (
          <div className="relative group mb-16 animate-slideIn">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 via-orange-600 to-amber-600 rounded-3xl blur opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
            <div className="relative bg-[#030712] border border-yellow-500/20 rounded-3xl p-10">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mr-6 transform rotate-3">
                  <span className="text-3xl">✦</span>
                </div>
                <div>
                  <h3 className="text-3xl font-light text-orange-400 mb-2">BLOCKCHAIN CERTIFICATE</h3>
                  <p className="text-gray-500 tracking-wide">Your content is now blockchain-secured</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="bg-white p-8 rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-300">
                  <img src={certificateUrl} alt="Certificate" className="w-56 h-56" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-400 mb-8 leading-relaxed tracking-wide">
                    Your content has been successfully registered in the blockchain realm with an immutable timestamp. 
                    Scan the blockchain code to view the certificate or download it for your records.
                  </p>
                  <div className="flex flex-wrap gap-6">
                    <button className="group relative px-8 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white font-light tracking-wider rounded-full transition-all duration-500 transform hover:scale-105">
                      <span className="relative z-10">DOWNLOAD BLOCKCHAIN CERTIFICATE</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>
                    </button>
                    <button className="px-8 py-4 border border-yellow-500/30 hover:border-orange-500 text-gray-400 hover:text-orange-400 font-light tracking-wider rounded-full transition-all duration-300">
                      SHARE BLOCKCHAIN LINK
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Black/Yellow/Orange Content List */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-light text-gray-300">BLOCKCHAIN ARCHIVE</h2>
            <button className="text-yellow-400 hover:text-yellow-300 transition-colors font-light tracking-wide group">
              VIEW ALL <span className="transform group-hover:translate-x-1 transition-transform inline-block">→</span>
            </button>
          </div>
          
          <div className="bg-[#030712] border border-yellow-500/20 rounded-3xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-yellow-950/30">
                  <tr>
                    <th className="px-8 py-4 text-left text-xs font-medium text-yellow-300 tracking-wider uppercase">Content Name</th>
                    <th className="px-8 py-4 text-left text-xs font-medium text-yellow-300 tracking-wider uppercase">Status</th>
                    <th className="px-8 py-4 text-left text-xs font-medium text-yellow-300 tracking-wider uppercase">Date</th>
                    <th className="px-8 py-4 text-left text-xs font-medium text-yellow-300 tracking-wider uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-yellow-500/10">
                  {registeredContent.map((content) => (
                    <tr key={content.id} className="hover:bg-yellow-950/10 transition-colors">
                      <td className="px-8 py-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-orange-500 rounded flex items-center justify-center text-white text-xs font-bold">
                            {content.filename.charAt(0).toUpperCase()}
                          </div>
                          <span className="text-gray-300 font-light">{content.filename}</span>
                        </div>
                      </td>
                      <td className="px-8 py-4">
                        <span className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${
                          content.status === 'verified' 
                            ? 'bg-green-600/20 text-green-400 border border-green-600/30'
                            : content.status === 'pending'
                            ? 'bg-yellow-600/20 text-yellow-400 border border-yellow-600/30'
                            : 'bg-red-600/20 text-red-400 border border-red-600/30'
                        }`}>
                          {content.status.toUpperCase()}
                        </span>
                      </td>
                      <td className="px-8 py-4 text-gray-500 text-sm">
                        {content.date}
                      </td>
                      <td className="px-8 py-4">
                        <div className="flex items-center space-x-3">
                          <button 
                            onClick={() => handleVerify(content.hash)}
                            className="text-yellow-400 hover:text-yellow-300 transition-colors font-light tracking-wide"
                          >
                            Verify
                          </button>
                          <button className="text-gray-400 hover:text-gray-300 transition-colors font-light tracking-wide">
                            Download
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
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
