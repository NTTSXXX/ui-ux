import React from 'react';
import { AreaChart, Area, Tooltip, ResponsiveContainer, XAxis } from 'recharts';

const data = [
  { name: 'T1', uv: 400 },
  { name: 'T2', uv: 300 },
  { name: 'T3', uv: 500 },
  { name: 'T4', uv: 280 },
  { name: 'T5', uv: 590 },
  { name: 'T6', uv: 430 },
  { name: 'T7', uv: 800 },
];

interface StatsPanelProps {
  title: string;
}

export const StatsPanel: React.FC<StatsPanelProps> = ({ title }) => {
  return (
    <div className="w-72 bg-black/80 border border-red-900/50 backdrop-blur-md rounded-sm overflow-hidden shadow-2xl">
      <div className="p-3 border-b border-red-900/30 flex justify-between items-center">
        <h3 className="text-sm font-orbitron font-bold text-red-100 uppercase tracking-wider">{title}</h3>
        <span className="text-xs font-mono text-red-500">+24.5%</span>
      </div>
      <div className="h-32 w-full bg-gradient-to-b from-red-900/10 to-transparent relative">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <Tooltip 
              contentStyle={{ backgroundColor: '#000', borderColor: '#333', fontSize: '12px' }} 
              itemStyle={{ color: '#fff' }}
              cursor={{ stroke: '#ef4444', strokeWidth: 1 }}
            />
            <XAxis dataKey="name" hide />
            <Area 
              type="monotone" 
              dataKey="uv" 
              stroke="#ef4444" 
              strokeWidth={2}
              fillOpacity={1} 
              fill="url(#colorUv)" 
              isAnimationActive={true}
            />
          </AreaChart>
        </ResponsiveContainer>
        
        {/* Decorative Lines */}
        <div className="absolute inset-0 pointer-events-none">
           <div className="h-[1px] w-full bg-red-500/10 top-1/4 absolute" />
           <div className="h-[1px] w-full bg-red-500/10 top-2/4 absolute" />
           <div className="h-[1px] w-full bg-red-500/10 top-3/4 absolute" />
        </div>
      </div>
      <div className="p-2 bg-red-950/20 border-t border-red-900/30 flex justify-between text-[10px] text-gray-500 font-mono">
        <span>AVG. REACH</span>
        <span>840K / DAY</span>
      </div>
    </div>
  );
};
