'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface Alert {
  id: string;
  severity: 'CRITICAL' | 'HIGH' | 'MEDIUM';
  contentName: string;
  description: string;
  timestamp: string;
  affectedUsers?: number;
  location?: string;
}

export default function AlertsPage() {
  const router = useRouter();
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [globalCount, setGlobalCount] = useState(0);
  const [isConnected, setIsConnected] = useState(false);
  const [ws, setWs] = useState<WebSocket | null>(null);
  const [filterSeverity, setFilterSeverity] = useState<'ALL' | 'CRITICAL' | 'HIGH' | 'MEDIUM'>('ALL');

  useEffect(() => {
    const token = localStorage.getItem('jwt_token');
    if (!token) {
      router.push('/login');
      return;
    }

    loadGlobalAlerts();
    loadInitialAlerts();

    const simulateWebSocket = () => {
      setIsConnected(true);
      
      const interval = setInterval(() => {
        const mockAlert: Alert = {
          id: Date.now().toString(),
          severity: ['CRITICAL', 'HIGH', 'MEDIUM'][Math.floor(Math.random() * 3)] as Alert['severity'],
          contentName: `blockchain_document_${Math.floor(Math.random() * 1000)}.pdf`,
          description: [
            'Blockchain signature corruption detected in critical matrix - temporal integrity breach',
            'Blockchain hash mismatch found during verification - dimensional data compromised',
            'Suspicious blockchain access pattern identified - multiple dimensional intrusion attempts',
            'Blockchain verification failed - critical temporal documents may be compromised',
            'Blockchain signature validation failed - identity verification system breach detected',
            'Multiple unauthorized blockchain access attempts detected',
            'Blockchain dimensional signature validation failed'
          ][Math.floor(Math.random() * 7)],
          timestamp: new Date().toISOString(),
          affectedUsers: Math.floor(Math.random() * 100) + 1,
          location: ['Blockchain Server EU-West', 'Blockchain Server US-East', 'Blockchain Server AP-South', 'Blockchain Cloud Storage'][Math.floor(Math.random() * 4)]
        };
        
        setAlerts(prev => [mockAlert, ...prev].slice(0, 20));
        setGlobalCount(prev => prev + 1);
      }, 8000);

      return () => clearInterval(interval);
    };

    const cleanup = simulateWebSocket();
    
    return () => {
      cleanup();
      if (ws) {
        ws.close();
      }
    };
  }, [router, ws]);

  const loadGlobalAlerts = () => {
    setTimeout(() => {
      setGlobalCount(47);
    }, 1000);
  };

  const loadInitialAlerts = () => {
    const initialAlerts: Alert[] = [
      {
        id: '1',
        severity: 'CRITICAL',
        contentName: 'blockchain_contract_2024.pdf',
        description: 'Blockchain signature corruption detected in critical matrix - temporal integrity breach',
        timestamp: '2024-01-20T09:15:42.000Z',
        affectedUsers: 12,
        location: 'Blockchain Server EU-West'
      },
      {
        id: '2',
        severity: 'HIGH',
        contentName: 'medical_blockchain_matrix.jpg',
        description: 'Blockchain hash mismatch found during verification - dimensional data compromised',
        timestamp: '2024-01-20T08:45:23.000Z',
        affectedUsers: 3,
        location: 'Blockchain Server US-East'
      },
      {
        id: '3',
        severity: 'MEDIUM',
        contentName: 'research_blockchain.pdf',
        description: 'Suspicious blockchain access pattern identified - multiple dimensional intrusion attempts',
        timestamp: '2024-01-20T07:30:15.000Z',
        affectedUsers: 1,
        location: 'Blockchain Cloud Storage'
      },
      {
        id: '4',
        severity: 'CRITICAL',
        contentName: 'financial_blockchain.xlsx',
        description: 'Blockchain verification failed - critical temporal documents may be compromised',
        timestamp: '2024-01-20T06:12:33.000Z',
        affectedUsers: 25,
        location: 'Blockchain Server AP-South'
      },
      {
        id: '5',
        severity: 'HIGH',
        contentName: 'identity_blockchain.png',
        description: 'Blockchain signature validation failed - identity verification system breach detected',
        timestamp: '2024-01-20T05:45:18.000Z',
        affectedUsers: 8,
        location: 'Blockchain Server EU-West'
      }
    ];
    setAlerts(initialAlerts);
  };

  const getSeverityConfig = (severity: Alert['severity']) => {
    switch (severity) {
      case 'CRITICAL':
        return {
          bg: 'bg-red-600/20',
          border: 'border-red-600/50',
          text: 'text-red-400',
          badge: 'bg-red-600 text-white',
          icon: '⚠️',
          glow: 'shadow-red-600/25'
        };
      case 'HIGH':
        return {
          bg: 'bg-orange-600/20',
          border: 'border-orange-600/50',
          text: 'text-orange-400',
          badge: 'bg-orange-600 text-white',
          icon: '⚡',
          glow: 'shadow-orange-600/25'
        };
      case 'MEDIUM':
        return {
          bg: 'bg-yellow-600/20',
          border: 'border-yellow-600/50',
          text: 'text-yellow-400',
          badge: 'bg-yellow-600 text-white',
          icon: '◉',
          glow: 'shadow-yellow-600/25'
        };
      default:
        return {
          bg: 'bg-gray-600/20',
          border: 'border-gray-600/50',
          text: 'text-gray-400',
          badge: 'bg-gray-600 text-white',
          icon: '◈',
          glow: 'shadow-gray-600/25'
        };
    }
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    
    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins} min ago`;
    if (diffMins < 1440) return `${Math.floor(diffMins / 60)} hours ago`;
    return date.toLocaleDateString();
  };

  const filteredAlerts = filterSeverity === 'ALL' 
    ? alerts 
    : alerts.filter(alert => alert.severity === filterSeverity);

  const stats = {
    total: globalCount,
    critical: alerts.filter(a => a.severity === 'CRITICAL').length,
    high: alerts.filter(a => a.severity === 'HIGH').length,
    medium: alerts.filter(a => a.severity === 'MEDIUM').length,
    affectedUsers: alerts.reduce((sum, alert) => sum + (alert.affectedUsers || 0), 0)
  };

  return (
    <div className="min-h-screen bg-[#000] text-white overflow-hidden relative">
      {/* Unique Geometric Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black/20 via-transparent to-black/20"></div>
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
      </div>

      {/* Asymmetric Navigation */}
      <nav className="relative z-10 px-8 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 transform rotate-3 flex items-center justify-center">
              <span className="text-white font-bold text-xl">T</span>
            </div>
            <span className="text-yellow-300 text-sm font-medium tracking-wide">BLOCKCHAIN ALERTS</span>
          </Link>
          <div className="flex items-center space-x-8">
            <Link href="/dashboard" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm tracking-wide">DASHBOARD</Link>
            <Link href="/verify" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm tracking-wide">VERIFY</Link>
          </div>
        </div>
      </nav>

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-16">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mr-6 transform rotate-6">
                <span className="text-4xl">⚠️</span>
              </div>
              <div>
                <h1 className="text-5xl md:text-6xl font-light mb-3">
                  <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                    BLOCKCHAIN ALERTS
                  </span>
                </h1>
                <p className="text-xl text-gray-400 tracking-wide">
                  Real-time blockchain corruption monitoring
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <div className="text-5xl font-light text-red-400 mb-2">{globalCount}</div>
            <div className="text-sm text-gray-500 tracking-wide">blockchain corruptions detected</div>
          </div>
        </div>

        {/* Connection Status */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center">
            <div className={`w-4 h-4 rounded-full mr-3 ${isConnected ? 'bg-cyan-500' : 'bg-red-500'} ${isConnected ? 'animate-pulse' : ''}`}></div>
            <span className="text-gray-400 tracking-wide">
              {isConnected ? 'Connected to blockchain stream' : 'Connecting...'}
            </span>
          </div>
          
          {/* Filter Buttons */}
          <div className="flex items-center space-x-3">
            {(['ALL', 'CRITICAL', 'HIGH', 'MEDIUM'] as const).map((severity) => (
              <button
                key={severity}
                onClick={() => setFilterSeverity(severity)}
                className={`px-6 py-3 rounded-full text-sm font-light tracking-wider transition-all duration-500 ${
                  filterSeverity === severity
                    ? 'bg-[#030712] text-cyan-400 border border-cyan-500/50'
                    : 'bg-purple-950/30 text-gray-500 hover:text-gray-300 border border-purple-500/20 hover:border-purple-500/40'
                }`}
              >
                {severity}
              </button>
            ))}
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="group relative transform hover:rotate-3 transition-transform duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-orange-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative bg-[#030712] border border-red-500/20 rounded-3xl p-8">
              <div className="text-4xl font-light text-red-400 mb-2 group-hover:scale-110 transition-transform">{stats.critical}</div>
              <div className="text-sm text-gray-500 tracking-wide">BLOCKCHAIN CRITICAL</div>
            </div>
          </div>
          
          <div className="group relative transform hover:-rotate-3 transition-transform duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-yellow-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative bg-[#030712] border border-orange-500/20 rounded-3xl p-8">
              <div className="text-4xl font-light text-orange-400 mb-2 group-hover:scale-110 transition-transform">{stats.high}</div>
              <div className="text-sm text-gray-500 tracking-wide">BLOCKCHAIN HIGH</div>
            </div>
          </div>
          
          <div className="group relative transform hover:rotate-6 transition-transform duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/20 to-amber-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative bg-[#030712] border border-yellow-500/20 rounded-3xl p-8">
              <div className="text-4xl font-light text-yellow-400 mb-2 group-hover:scale-110 transition-transform">{stats.medium}</div>
              <div className="text-sm text-gray-500 tracking-wide">BLOCKCHAIN MEDIUM</div>
            </div>
          </div>
          
          <div className="group relative transform hover:-rotate-6 transition-transform duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative bg-[#030712] border border-purple-500/20 rounded-3xl p-8">
              <div className="text-4xl font-light text-purple-400 mb-2 group-hover:scale-110 transition-transform">{stats.affectedUsers}</div>
              <div className="text-sm text-gray-500 tracking-wide">USERS AFFECTED</div>
            </div>
          </div>
        </div>

        {/* Alerts Feed */}
        <div className="space-y-6">
          {filteredAlerts.length === 0 ? (
            <div className="relative bg-[#030712] border border-purple-500/20 rounded-3xl p-20 text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-cyan-600/10 rounded-3xl blur-xl"></div>
              <div className="relative z-10">
                <div className="text-8xl mb-6">◉</div>
                <h3 className="text-2xl font-light mb-3 text-gray-300">No blockchain alerts detected</h3>
                <p className="text-gray-500 tracking-wide">
                  {filterSeverity === 'ALL' 
                    ? 'Blockchain alerts will appear here when corruption is detected'
                    : `No ${filterSeverity.toLowerCase()} blockchain alerts at this time`
                  }
                </p>
              </div>
            </div>
          ) : (
            filteredAlerts.map((alert, index) => {
              const config = getSeverityConfig(alert.severity);
              return (
                <div
                  key={alert.id}
                  className={`group relative bg-[#030712] border ${config.border} rounded-3xl p-8 transform transition-all duration-500 hover:scale-[1.02] hover:${config.glow} shadow-lg animate-slideIn`}
                  style={{animationDelay: `${index * 100}ms`}}
                >
                  <div className={`absolute inset-0 ${config.bg} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center mb-4">
                          <div className="relative mr-4">
                            <div className={`absolute inset-0 ${config.bg} rounded-2xl blur-xl opacity-50 animate-pulse`}></div>
                            <span className="relative text-3xl">{config.icon}</span>
                          </div>
                          <div className="relative mr-4">
                            <div className={`absolute inset-0 ${config.bg} rounded-full blur-lg opacity-50 animate-pulse`}></div>
                            <span className={`relative inline-flex px-6 py-3 text-xs font-bold rounded-full tracking-wider ${config.badge} border-2 border-current shadow-lg transform hover:scale-105 transition-all duration-300`}>
                              <span className="flex items-center space-x-2">
                                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                                <span>{alert.severity}</span>
                              </span>
                            </span>
                          </div>
                          <h3 className="text-xl font-light text-gray-200 tracking-wide">{alert.contentName}</h3>
                        </div>
                        
                        <p className="text-gray-400 mb-4 leading-relaxed tracking-wide">{alert.description}</p>
                        
                        <div className="flex flex-wrap items-center gap-6 text-sm">
                          <div className="flex items-center text-gray-500">
                            <span className="mr-3">⬡</span>
                            <span>{formatTimestamp(alert.timestamp)}</span>
                          </div>
                          
                          {alert.affectedUsers && (
                            <div className="flex items-center text-gray-500">
                              <span className="mr-3">◈</span>
                              <span>{alert.affectedUsers} users affected</span>
                            </div>
                          )}
                          
                          {alert.location && (
                            <div className="flex items-center text-gray-500">
                              <span className="mr-3">⚛</span>
                              <span>{alert.location}</span>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="ml-8 flex flex-col space-y-4">
                        <button className={`group relative px-8 py-4 ${config.bg} ${config.text} border ${config.border} text-sm font-bold tracking-wider rounded-full transition-all duration-500 transform hover:scale-105 hover:shadow-2xl overflow-hidden`}>
                          <span className="relative z-10 flex items-center space-x-2">
                            <span>⬡</span>
                            <span>BLOCKCHAIN DETAILS</span>
                            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                          </span>
                          <div className={`absolute inset-0 ${config.bg} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg`}></div>
                        </button>
                        <button className="group relative px-8 py-4 bg-purple-950/30 hover:bg-purple-950/50 text-gray-500 hover:text-cyan-400 border border-purple-500/30 hover:border-cyan-500/50 text-sm font-bold tracking-wider rounded-full transition-all duration-500 transform hover:scale-105 hover:shadow-lg overflow-hidden">
                          <span className="relative z-10 flex items-center space-x-2">
                            <span>◈</span>
                            <span>DISMISS</span>
                            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                          </span>
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-lg"></div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
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
          opacity: 0;
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
