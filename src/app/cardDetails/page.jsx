'use client'
import { Archive, BellRing, MessageSquare, Phone, Trash2, Video } from "lucide-react";
import Image from "next/image";
import { useDebugValue, useState } from "react";
import { toast } from "react-toastify";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Timeline from "../timeline/page";

const CardDetails = ({ detail }) => {
    const tostCall = () => {
        toast.success('Call Success');
    }
    const tostMessage = () => {
        toast.success('Message Sent Success');
    }
    const tostVideo = () => {
        toast.success('Video Call Success');
    }
    // date time
    // const [checkInLog, setCheckInLog] = useState([]);
    const checkIn = (actionType, nm) => {
        const newDateTime = new Date();
        const newDate = {
            id: Date.now(),
            name: nm,
            action: actionType,
            time: newDateTime.toLocaleTimeString(),
            date: newDateTime.toLocaleDateString(),
            fullTime: newDateTime.toISOString(),
        }
        const prevData=localStorage.getItem("timeLineData");
        const currentData= prevData? JSON.parse(prevData) : [];
        const updatedValue = ([...currentData, newDate]);
        localStorage.setItem("timeLineData", JSON.stringify(updatedValue))
        // setCheckInLog(updatedValue)
        // const len = updatedValue.length;
        //  console.log("State- ", updatedValue.length);

    }
//    console.log(localStorage.getItem("timeLineData"));
    return (

        <div className=" flex flex-wrap justify-center py-10 bg-[#F8FAFC] text-black items-center ">
            {/* Left div */}
            <div className=" text-center p-5 rounded-md">
                <div className="bg-[#ffffff] p-5 px-10 space-y-2 mb-3">
                    <Image className=" rounded-full mx-auto" src={detail.picture} alt={detail.name} width={80} height={80}></Image>
                    <h3 className="text-2xl pt-2">{detail.name}</h3>
                    <p className=" bg-red-400 rounded-2xl">{detail.status}</p>
                    <p className="">{detail.tags.map(tag => <span className=" bg-slate-300 rounded-md p-1 mx-2" key={tag}>{tag}</span>)}</p>
                    <span className="text-sm">{detail.bio}</span>
                </div>
                <div className="  space-y-2 ">
                    <div className="bg-[#ffffff] p-2 rounded-md flex items-center justify-center gap-2">
                        <BellRing width={20} height={20} />
                        <p >Snooze 2 Weeks</p>
                    </div>
                    <div className="bg-[#ffffff] p-2 rounded-md flex items-center justify-center gap-2">
                        <Archive width={20} height={20} />
                        <p >Archive</p>
                    </div>
                    <div className="bg-[#ffffff] p-2 rounded-md flex items-center justify-center text-red-500 gap-2">
                        <Trash2 width={20} height={20} />
                        <p >Delete</p>
                    </div>
                </div>
            </div>

            {/* Right Div */}
            <div className="space-y-5">
                <div className=" flex gap-5 rounded-md">
                    <div className="bg-[#ffffff] p-5">
                        <p>{detail.days_since_contact}</p>
                        <p>Days Since Contact</p>
                    </div>
                    <div className="bg-[#ffffff] p-5">
                        <p>{detail.goal}</p>
                        <p>Goal (Days)</p>
                    </div>
                    <div className="bg-[#ffffff] p-5">
                        <p>Feb 27,2026</p>
                        <p>Next Due</p>
                    </div>
                </div>
                <div className="bg-[#ffffff] p-5 rounded-md">
                    <div className=" flex justify-between">
                        <p>Relationship Goal</p>.
                        <p className="btn">Edit</p>
                    </div>
                    <p>Connect every <span className=" font-bold">{detail.goal} Days</span></p>
                </div>
                <div className="bg-[#ffffff] p-5 rounded-md space-y-5">
                    <p>Quick Check-in</p>
                    <div className=" flex gap-5 justify-between ">
                        <div onClick={() => { tostCall(), checkIn("Call", detail.name) }} className=" flex flex-col items-center justify-center">
                            <Phone />
                            <p>Call</p>
                        </div>
                        <div onClick={() => { tostMessage(), checkIn("Text", detail.name) }} className=" flex flex-col items-center justify-center">
                            <MessageSquare />
                            <p>Text</p>
                        </div>
                        <div onClick={() => { tostVideo(), checkIn("Video Call", detail.name) }} className=" flex flex-col items-center justify-center">
                            <Video />
                            <p>Video</p>
                        </div>
                        <ToastContainer></ToastContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;