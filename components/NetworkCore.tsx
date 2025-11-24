import React from 'react';
import { motion } from 'framer-motion';

const regions = [
  { name: 'NORTH AMERICA', x: 0, y: -160 },
  { name: 'EUROPE', x: 140, y: -80 },
  { name: 'MIDDLE EAST', x: 140, y: 80 },
  { name: 'SE ASIA', x: 0, y: 160 },
  { name: 'EAST ASIA', x: -140, y: 0 },
];

export const NetworkCore: React.FC = () => {
  return (
    <div className="relative w-[600px] h-[600px] flex items-center justify-center scale-75 md:scale-100">
      {/* Central Radar Rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div 
          className="w-[400px] h-[400px] rounded-full border border-red-900/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute w-[300px] h-[300px] rounded-full border border-dashed border-red-800/40"
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute w-[500px] h-[500px] rounded-full border border-red-900/10"
          animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>

      {/* Connecting Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
        {regions.map((region, i) => (
          <motion.line
            key={i}
            x1="300"
            y1="300"
            x2={300 + region.x}
            y2={300 + region.y}
            stroke="url(#grad1)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: i * 0.2 }}
          />
        ))}
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7f1d1d" stopOpacity="0" />
            <stop offset="50%" stopColor="#ef4444" stopOpacity="1" />
            <stop offset="100%" stopColor="#7f1d1d" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Central Hub */}
      <motion.div
        className="relative z-10 w-24 h-24 bg-black border-2 border-red-500 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(239,68,68,0.4)]"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <div className="absolute inset-0 bg-red-500/20 rounded-full animate-ping" />
        <div className="text-center">
          <div className="text-2xl font-bold text-white font-orbitron">CORE</div>
          <div className="text-[8px] text-red-400">DISTRIBUTION</div>
        </div>
      </motion.div>

      {/* Satellite Nodes */}
      {regions.map((region, i) => (
        <motion.div
          key={region.name}
          className="absolute z-10"
          style={{ x: region.x, y: region.y }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1 + i * 0.2, type: "spring" }}
        >
          <div className="relative group cursor-pointer">
             {/* Node Circle */}
            <div className="w-4 h-4 bg-red-500 rounded-full shadow-[0_0_15px_#ef4444] group-hover:scale-150 transition-transform duration-300" />
            
            {/* Pulsing Ring */}
            <div className="absolute inset-0 -m-2 border border-red-500/50 rounded-full w-8 h-8 animate-ping opacity-20" />

            {/* Label */}
            <div className={`absolute ${region.x < 0 ? 'right-6' : 'left-6'} top-1/2 -translate-y-1/2 whitespace-nowrap`}>
              <div className="bg-black/80 border border-red-900/60 px-3 py-1 text-xs font-rajdhani font-bold text-red-100 backdrop-blur-sm">
                {region.name}
              </div>
              <div className="text-[8px] text-red-500 font-mono mt-0.5 text-right">
                <span className="animate-pulse">●</span> LIVE
              </div>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Data Packets Traveling */}
      {regions.map((region, i) => (
        <motion.div
          key={`packet-${i}`}
          className="absolute w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]"
          animate={{
            x: [0, region.x],
            y: [0, region.y],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
          style={{
             top: 300,
             left: 300,
             marginTop: -4,
             marginLeft: -4
          }}
        />
      ))}
    </div>
  );
};
