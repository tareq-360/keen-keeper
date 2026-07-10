'use client'
import { ChevronDown, ChevronUp, MessageSquare, Phone, Video } from "lucide-react";
import { useState, useEffect } from "react";

const Timeline = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    const [timelineData, setTimelineData] = useState([])
        useEffect(() => {
        setMounted(true); // কম্পোনেন্ট মাউন্ট হয়েছে তা সেট করা হলো
        const timeline = localStorage.getItem("timeLineData");
        if (timeline) {
            setTimelineData(JSON.parse(timeline));
        }
    }, []);
    

    // const timeline = localStorage.getItem("timeLineData")
    // const timelinedata = JSON.parse(timeline);

    if (!mounted) {
        return <div className="max-w-7xl h-full bg-[#F8FAFC] px-10 py-10">Loading...</div>; // অথবা খালি div রাখতে পারেন
    }
    return (
        <div className=" max-w-7xl h-full bg-[#F8FAFC] text-black px-10 py-10 ">
            <div >
                <h1 className="text-2xl font-bold">Timeline</h1>
                <div className="dropdown">

                    <button onClick={() => setIsOpen(!isOpen)} tabIndex={0} className=" m-1 border w-40 flex justify-end" >{isOpen ? <ChevronDown /> : <ChevronUp />}</button>

                    <ul tabIndex="-1" className="dropdown-content menu  rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a>Text</a></li>
                        <li><a>Call</a></li>
                        <li><a>Video</a></li>
                    </ul>
                </div>
            </div>

            <div className=" p-5  mt-30 space-y-3">
                {/* icon */}
                {mounted && timelineData && timelineData.map(data =>
                    <div className=" bg-[#ffffff] rounded-md p-3" key={data.id}>
                        <div className="flex gap-2">
                            {data.action === "Call" ? <Phone /> : data.action === "Video Call" ? <Video></Video> : <MessageSquare></MessageSquare>}
                            <p>{data.action} <span className="text-sm">With {data.name}r</span></p>
                        </div>
                        <small><span className=" text-orange-400">{data.date}</span> {data.time}</small>
                    </div>
                )}
            </div>

        </div>
    );
};

export default Timeline;