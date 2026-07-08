'use client'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Text', value: 35, color: '#8b5cf6' },  
    { name: 'Call', value: 40, color: '#1e463a' },  
    { name: 'Video', value: 25, color: '#34a853' }, 
];
const Stats = () => {
    return (
        <div className=" max-w-7xl h-screen mx-auto flex flex-col items-center justify-center bg-white p-4 rounded-xl">

            
            <div className="w-full h-48">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}     
                            outerRadius={75} 
                            paddingAngle={8}    
                            cornerRadius={10}   
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>

            
            <div className="flex items-center justify-center gap-6 mt-4 text-xs font-medium text-gray-500">
                {data.map((item, index) => (
                    <div key={index} className="flex items-center gap-1.5">
                        <span
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: item.color }}
                        />
                        <span>{item.name}</span>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Stats;