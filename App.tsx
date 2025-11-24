import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BackgroundParticles } from './components/BackgroundParticles';
import { NetworkCore } from './components/NetworkCore';
import { StatsPanel } from './components/StatsPanel';
import { Globe, Activity, Zap, Share2, Hexagon } from 'lucide-react';

export default function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="relative min-h-screen w-full bg-black text-white overflow-hidden selection:bg-red-500/30">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <BackgroundParticles />
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-black pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent opacity-50" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 container mx-auto px-4 py-6 min-h-screen flex flex-col">
        {/* Header */}
        <header className="flex justify-between items-center border-b border-red-900/30 pb-4 mb-8 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <div className="relative">
              <Hexagon className="w-8 h-8 text-red-600 fill-red-600/10 animate-pulse" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-2 h-2 bg-red-500 rounded-full shadow-[0_0_10px_#ef4444]" />
              </div>
            </div>
            <h1 className="text-2xl font-orbitron font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-red-500">
              GLOBAL<span className="text-red-600">FLUX</span>
            </h1>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-rajdhani font-semibold text-gray-400">
            {['NODES', 'ANALYTICS', 'DISTRIBUTION', 'WALLET'].map((item) => (
              <button key={item} className="hover:text-red-500 transition-colors uppercase tracking-widest hover:shadow-[0_0_15px_rgba(239,68,68,0.5)]">
                {item}
              </button>
            ))}
          </nav>
          <button className="px-6 py-2 bg-red-600/10 border border-red-600/50 text-red-500 hover:bg-red-600 hover:text-white transition-all duration-300 font-orbitron text-xs tracking-widest uppercase clip-path-slant">
            Connect Network
          </button>
        </header>

        {/* Main Grid */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-4 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-red-950/30 border border-red-800/30 text-red-400 text-xs font-mono uppercase">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-ping" />
                System Online: v3.0.1
              </div>
              <h2 className="text-5xl md:text-6xl font-orbitron font-black leading-tight mb-4">
                GLOBAL <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-orange-500 filter drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]">
                  IMPACT
                </span> <br />
                PROTOCOL
              </h2>
              <p className="text-lg text-gray-400 font-rajdhani leading-relaxed border-l-2 border-red-600/50 pl-4">
                全球媒体分发渠道建设，提升客户项目的品牌曝光度。
                <span className="block mt-2 text-red-300">
                  North America • East Asia • Europe • SE Asia • Middle East
                </span>
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {[
                { icon: Globe, label: "Global Reach", value: "100%" },
                { icon: Zap, label: "Speed", value: "< 50ms" },
                { icon: Activity, label: "Uptime", value: "99.9%" },
                { icon: Share2, label: "Channels", value: "500+" }
              ].map((stat, i) => (
                <div key={i} className="p-4 bg-zinc-900/50 border border-zinc-800 hover:border-red-600/50 transition-colors group">
                  <stat.icon className="w-6 h-6 text-red-500 mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-2xl font-bold font-orbitron">{stat.value}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-4 bg-gradient-to-r from-red-700 to-red-900 text-white font-orbitron font-bold tracking-widest uppercase border border-red-500 hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] transition-all relative overflow-hidden group"
            >
              <span className="relative z-10">Initiate Distribution</span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </motion.button>
          </div>

          {/* Center/Right Column: Visualization */}
          <div className="lg:col-span-8 relative h-[600px] w-full flex items-center justify-center perspective-1000">
            {/* Network Core Visualization */}
            <NetworkCore />
            
            {/* Floating Stats Panels */}
            <div className="absolute top-0 right-0 md:-right-4 md:top-10 z-20 pointer-events-none">
               <StatsPanel title="Brand Exposure" />
            </div>
            
            <div className="absolute bottom-0 left-0 md:left-10 md:bottom-10 z-20 pointer-events-none">
               <div className="bg-black/80 backdrop-blur-md border border-red-900/50 p-4 w-64 rounded-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-400 font-mono">ACTIVE NODES</span>
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  </div>
                  <div className="space-y-2">
                    {['North America', 'Europe', 'East Asia'].map(region => (
                      <div key={region} className="flex justify-between items-center text-xs font-rajdhani">
                        <span className="text-white">{region}</span>
                        <div className="w-20 h-1 bg-zinc-800 rounded-full overflow-hidden">
                          <motion.div 
                            className="h-full bg-red-500"
                            initial={{ width: "0%" }}
                            animate={{ width: `${Math.random() * 40 + 60}%` }}
                            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
               </div>
            </div>
          </div>

        </div>
      </div>
      
      <footer className="absolute bottom-0 w-full border-t border-red-900/20 bg-black/80 backdrop-blur-sm py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-[10px] text-gray-600 font-mono uppercase">
          <div>Encrypted Connection :: AES-256</div>
          <div className="flex gap-4">
             <span>Latency: 12ms</span>
             <span>Block Height: #192834</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
