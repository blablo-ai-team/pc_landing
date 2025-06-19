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
  { day: 'MON', minutes: 5, color: '#F9CDF6' },
  { day: 'TUE', minutes: 10, color: '#FFB3FA' },
  { day: 'WED', minutes: 18, color: '#FF9AF8' },
  { day: 'THU', minutes: 30, color: '#FD79F4' },
  { day: 'FRI', minutes: 45, color: '#FF51F3' },
  { day: 'SAT', minutes: 70, color: '#EE33DF' },
  { day: 'SUN', minutes: 108, color: '#EE33DF' },
];

const CustomDot = (props: any) => {
  const { cx, cy, index } = props;
  
  if (index === data.length - 1) {
    return (
      <g>
        <circle cx={cx} cy={cy} r={6} fill="#6366f1" stroke="#ffffff" strokeWidth={2} />
        <text 
          x={cx + 15} 
          y={cy - 15} 
          fill="#6366f1" 
          fontSize={12}
          fontWeight="600"
          textAnchor="start"
        >
          108 mins speaking!
        </text>
      </g>
    );
  }
  return <circle cx={cx} cy={cy} r={4} fill="#e879f9" />;
};

export default function SpeakingChart() {
  return (
    <div className="  h-96 p-2 bg-gradient-to-br rounded-2xl">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data} margin={{ top: 40, right: 80, bottom: 40, left: 40 }}>
          <defs>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#e879f9" />
              <stop offset="50%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
          </defs>
          
          <CartesianGrid 
            strokeDasharray="2 2" 
            vertical={false} 
            stroke="#e5e7eb" 
            opacity={0.5}
          />
            <XAxis 
            dataKey="day" 
            axisLine={{ stroke: '#e5e7eb', strokeWidth: 1 }}
            tickLine={false}
            tick={{ fontSize: 12, fill: '#9ca3af', fontWeight: '500' }}
            dy={10}
          />
            <YAxis 
            domain={[0, 120]}
            axisLine={{ stroke: '#e5e7eb', strokeWidth: 1 }}
            tickLine={false}
            tick={{ fontSize: 12, fill: '#9ca3af', fontWeight: '500' }}
            ticks={[0, 120]}
            tickFormatter={(value: number) => value === 0 ? '0 MIN' : value === 120 ? '120 MINS' : ''}
            width={60}
          />
          
          <Bar
            dataKey="minutes" 
            radius={[6, 6, 0, 0]}
            barSize={24}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
          
          <Line
            type="monotone"
            dataKey="minutes"
            stroke="url(#lineGradient)"
            strokeWidth={3}
            dot={<CustomDot />}
            strokeLinecap="round"
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
