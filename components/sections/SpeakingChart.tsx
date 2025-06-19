// components/SpeakingChart.tsx
'use client';

import {
  LineChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'MON', minutes: 10 },
  { name: 'TUE', minutes: 20 },
  { name: 'WED', minutes: 30 },
  { name: 'THU', minutes: 45 },
  { name: 'FRI', minutes: 60 },
  { name: 'SAT', minutes: 90 },
  { name: 'SUN', minutes: 108 },
];

export default function SpeakingChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" />
        <YAxis domain={[0, 120]} />
        <Tooltip />
        <Bar dataKey="minutes" fill="url(#gradientColor)" radius={[10, 10, 0, 0]} />
        <Line type="monotone" dataKey="minutes" stroke="#0000ff" strokeWidth={3} dot />
        <defs>
          <linearGradient id="gradientColor" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ff00cc" stopOpacity={1} />
            <stop offset="100%" stopColor="#ffccff" stopOpacity={0.6} />
          </linearGradient>
        </defs>
      </LineChart>
    </ResponsiveContainer>
  );
}
