'use client'
import { ChevronDown, ChevronUp, Video } from "lucide-react";
import { useState } from "react";

const Timeline = () => {
    const [isOpen, setIsOpen]=useState(false);
    console.log(isOpen);
    return (
        <div className=" max-w-7xl h-screen bg-[#F8FAFC] text-black px-10 py-10 ">
            <div >
                <h1 className="text-2xl font-bold">Timeline</h1>
                <div className="dropdown">
                    
                    <button onClick={()=>setIsOpen(!isOpen)} tabIndex={0} className=" m-1 border w-40 flex justify-end" >{isOpen ? <ChevronDown /> : <ChevronUp />}</button>
                    
                    <ul tabIndex="-1" className="dropdown-content menu  rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a>Text</a></li>
                        <li><a>Call</a></li>
                        <li><a>Video</a></li>
                    </ul>
                </div>
            </div>

            <div className="bg-[#ffffff] p-5">
                {/* icon */}
                <div className="flex gap-2 ">
                    <Video></Video>
                    <p>Video <span className="text-sm">With Tom Backer</span></p>
                </div>
                <small>March 20,2026</small>
            </div>

        </div>
    );
};

export default Timeline;