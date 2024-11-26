import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import styles from '../../styles/projection/Graphs.module.css';

const UsersGraph = ({ data, isSidebarOpen }) => {
    if (!data) return null;

    const formattedData = data.monthlyData.map((m, index) => ({
        month: `${index + 1}`,
        premium: Math.round(m.subscriptionDistribution.premium),
        standard: Math.round(m.subscriptionDistribution.standard),
        free: Math.round(m.subscriptionDistribution.basic)
    }));

    return (
        <div className={styles.graphContainer}>
            <h3 className={styles.sectionTitle}>Monthly Users Projection</h3>
            <ResponsiveContainer width="100%" height={400}>
                <AreaChart
                    data={formattedData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                        dataKey="month" 
                        angle={0}
                        textAnchor="middle"
                        height={60}
                        tick={{ fontSize: 12 }}
                    />
                    <YAxis 
                        tickFormatter={(value) => value.toLocaleString()}
                        tick={{ fontSize: 12 }}
                    />
                    <Tooltip 
                        formatter={(value) => [value.toLocaleString(), '']}
                        contentStyle={{ 
                            fontSize: '12px',
                            backgroundColor: 'rgba(255,255,255,0.95)',
                            border: 'none',
                            borderRadius: '8px',
                            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                        }}
                    />
                    <Legend 
                        verticalAlign="bottom"
                        height={36}
                        wrapperStyle={{ paddingTop: '20px' }}
                    />
                    <Area
                        type="monotone"
                        dataKey="premium"
                        stackId="1"
                        stroke="rgb(50, 205, 50)"
                        fill="rgba(50, 205, 50, 0.6)"
                        name="Premium Plan"
                    />
                    <Area
                        type="monotone"
                        dataKey="standard"
                        stackId="1"
                        stroke="rgb(0, 191, 255)"
                        fill="rgba(0, 191, 255, 0.6)"
                        name="Standard Plan"
                    />
                    <Area
                        type="monotone"
                        dataKey="free"
                        stackId="1"
                        stroke="rgb(255, 154, 0)"
                        fill="rgba(255, 154, 0, 0.6)"
                        name="Free Plan"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default UsersGraph; 