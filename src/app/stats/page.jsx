'use client'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { useGlobalContext } from '@/context/GlobalContext';


const Stats = () => {
    const { timelineData } = useGlobalContext();
    // console.log("Total Length " ,typeof(timelineData.length));
    const callValue = timelineData.filter(data => data.action === "Call");
    const textValue = timelineData.filter(data => data.action === "Text");
    const videoValue = timelineData.filter(data => data.action === "Video Call");
    // console.log("Call= ",callValue.length, "Text = ", textValue.length, "Video = ",videoValue.length);

    const data = [
        { name: 'Text', value: textValue.length, color: '#8b5cf6' },
        { name: 'Call', value: callValue.length, color: '#1e463a' },
        { name: 'Video', value: videoValue.length, color: '#34a853' },
    ];
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center bg-white py-10">

            <h1 className=' text-3xl font-bold text-black mb-2'>Friendship Analytics</h1>
            <div className="w-3/4 rounded-md  h-full min-h-[400px] bg-slate-100">
            
                <ResponsiveContainer width="100%" height="100%">
                    
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius="45%"
                            outerRadius="70%"
                            paddingAngle={4}
                            cornerRadius={12}
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
                <div className="flex items-center justify-center gap-4 text-xs font-medium text-gray-500 bg-slate-100">
                    {data.map((item, index) => (
                        <div key={index} className="flex items-center gap-1.5">
                            <span
                                className="w-2 h-2 rounded-full"
                                style={{ backgroundColor: item.color }}
                            />
                            <span className='text-xl font-bold'>{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>




        </div>
    );
};

export default Stats;