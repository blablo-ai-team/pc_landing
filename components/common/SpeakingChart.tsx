// components/SpeakingChart.tsx
'use client'
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Cell,
} from 'recharts';

const data = [
  { day: 'MON', minutes: 15, color: '#F9CDF6' },
  { day: 'TUE', minutes: 25, color: '#FFB3FA' },
  { day: 'WED', minutes: 38, color: '#FF9AF8' },
  { day: 'THU', minutes: 50, color: '#FD79F4' },
  { day: 'FRI', minutes: 65, color: '#FF51F3' },
  { day: 'SAT', minutes: 80, color: '#EE33DF' },
  { day: 'SUN', minutes: 108, color: '#EE33DF' },
];
import { motion } from 'framer-motion';

interface CustomDotProps {
  cx?: number;
  cy?: number;
  index?: number;
}

const CustomDot = (props: CustomDotProps) => {
  const { cx, cy, index } = props;
  
  if (index === data.length - 1 && cx && cy) {
    return (
      <g>
        <circle cx={cx} cy={cy} r={6} fill="#6366f1" stroke="#ffffff" strokeWidth={2} />
      </g>
    );
  }

  // return cx && cy ? <circle cx={cx} cy={cy} r={4} fill="#e879f9" /> : null;
};

// Custom label component for the SUN bar
interface CustomLabelProps {
  x?: number;
  y?: number;
  width?: number;
  index?: number;
}

const CustomLabel = (props: CustomLabelProps) => {
  const { x, y, width, index } = props;
  
  if (index === data.length - 1 && x && y && width) { // Only for the last bar (SUN)
    return (
      <text 
        x={x + 15 } 
        y={y - 15} // Position below the bar
        fill="#6366f1" 
        fontSize={12}
        fontWeight="600"
        textAnchor="middle"
      >108 mins speaking!
      </text>
    );
  }
  return null;
};



export default function SpeakingChart() {
  return (
    <motion.div
       initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
    className=" h-96 p-2 bg-gradient-to-br rounded-2xl">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data} margin={{ top: 20, right: 80, bottom: 0, left: -30 }}>
          <defs>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#e879f9" />
              <stop offset="50%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
            <marker id="arrowX" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
              <polygon points="0,0 0,6 9,3" fill="#9ca3af" />
              </marker>            <marker id="arrowY" markerWidth="10" markerHeight="10" refX="3" refY="6">
              <polygon points="0,6 6,6 3,0" fill="#9ca3af" />
            </marker>
          </defs>
          
          <CartesianGrid 
            strokeDasharray="2 2" 
            vertical={false} 
            stroke="#e5e7eb" 
            opacity={0.5}
          />
            <XAxis 
            dataKey="day" 
            axisLine={{ stroke: '#e5e7eb', strokeWidth: 1, markerEnd: 'url(#arrowX)' }}
            tickLine={false}
            tick={{ fontSize: 12, fill: '#9ca3af', fontWeight: '500' }}
            dy={10}
          />          <YAxis 
            domain={[0, 120]}
            axisLine={{ stroke: '#e5e7eb', strokeWidth: 1, markerStart: 'url(#arrowY)' }}
            tickLine={false}
            tick={{ fontSize: 12, fill: '#9ca3af', fontWeight: '500' }}
            ticks={[0, 120]}
            tickFormatter={(value: number) => {
              if (value === 0) return '0 MIN';
              if (value === 120) return '120 MINS';
              return '';
            }}
            width={100}
          />
            <Bar
            dataKey="minutes" 
            radius={[20, 20, 0, 0]}
            barSize={40}
          
            label={<CustomLabel />}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color}  />
            ))}
          </Bar>
          
          <Line
            type="monotone"
            dataKey="minutes"
            stroke="url(#lineGradient)"
            strokeWidth={5}
            dot={<CustomDot />}
            strokeLinecap="round"
          />
        </ComposedChart>
      </ResponsiveContainer>
    </motion.div>
  );
}
