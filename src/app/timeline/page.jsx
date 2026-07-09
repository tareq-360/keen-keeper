'use client'
import { ChevronDown, ChevronUp, Video } from "lucide-react";
import { useState } from "react";

const Timeline = () => {
    const [isOpen, setIsOpen] = useState(false);
    // checkInLog?.length!='0' ? console.log(checkInLog): console.log("No Value");
    // const len = checkInLog.length;
    // console.log("length is ",len);
    const timeline = localStorage.getItem("timeLineData")
    const timelinedata = JSON.parse(timeline);
    // timelinedata.map(data => console.log(data.action));

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
                {timelinedata.map(data =>
                    <div className=" bg-[#ffffff] rounded-md p-3"  key={data.id}>
                        <div className="flex gap-2">
                            <Video></Video>
                            <p>{data.action} <span className="text-sm">With {data.name}r</span></p>
                        </div>
                        <small>{data.fullTime}</small>
                    </div>
                )}
            </div>

        </div>
    );
};

export default Timeline;