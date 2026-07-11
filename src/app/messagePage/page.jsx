'use client'
import { ArrowRight, ChevronDown, ChevronUp, MessageSquare, Phone, Video } from "lucide-react";
import { useGlobalContext } from "@/context/GlobalContext";
import Link from "next/link";
const SortedText = () => {
    const { timelineData } = useGlobalContext();
    // sortedTextLogs.map(data =>console.log(data))
    const allTextLogs = timelineData.filter(item => item.action === "Text");
    const sortedTextLogs = allTextLogs.sort((a, b) => Date.parse(b.fullTime) - Date.parse(a.fullTime));
    // console.log("Output " ,timelineData);
    return (
        <div className=" max-w-7xl h-full text-black">

            <div className="flex p-10">
                <h1 className="text-2xl font-bold">All Message List </h1>
                <Link href="/timeline"><button className="btn btn-primary px-10 mx-10">Back <ArrowRight /></button></Link>
            </div>
            <div className=" p-5 space-y-3">

                {/* icon */}
                {sortedTextLogs.map(data =>

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

export default SortedText;