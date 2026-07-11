'use client'
import { ChevronDown, ChevronUp, MessageSquare, Phone, Video } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import SortedText from "../messagePage/page";
import { useGlobalContext } from "@/context/GlobalContext";

const Timeline = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const { timelineData } = useGlobalContext();

    const sortedTimelineData = timelineData.sort((a, b) => Date.parse(b.fullTime)-Date.parse(a.fullTime));
    // console.log(sortedTextLogs);
    
    // console.log("TimelineData ", timelineData);
    return (
        <div className=" max-w-7xl h-full bg-[#F8FAFC] text-black px-10 py-10 ">
            <div >
                <h1 className="text-2xl font-bold">Timeline</h1>
                <div className="">
                    <ul  className="flex gap-3 p-2">
                        <li className="btn px-5 hover:text-green-500"><Link href="/messagePage">Text</Link></li>
                        <li className="btn px-5 hover:text-green-500"><Link href="/audioCalls">Audio Calls</Link></li>
                        <li className="btn px-5 hover:text-green-500"><Link href="/videoLoges">Video Calls</Link></li>
                    </ul>
                </div>
            </div>

            <div className=" p-5 space-y-3">
                
                {/* icon */}
                {sortedTimelineData.map(data =>

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