'use client'
import { Archive, BellRing, MessageSquare, Phone, Trash2, Video } from "lucide-react";
import Image from "next/image";
import { toast } from "react-toastify";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Details = () => {
    const tostCall = () => {
        toast.success('Call Success');
    }
    const tostMessage = () => {
        toast.success('Message Sent Success');
    }
    const tostVideo = () => {
        toast.success('Video Call Success');
    }
    return (
        <div className=" flex flex-wrap justify-center py-10 bg-[#F8FAFC] text-black items-center ">

            {/* Left div */}
            <div className=" text-center p-5 rounded-md">
                <div className="bg-[#ffffff] p-5 px-10 space-y-2 mb-3">
                    <Image className=" rounded-full mx-auto" src="https://i.ibb.co.com/Ywp83WX/image.jpg" alt="Profile image" width={80} height={80}></Image>
                    <h3 className="text-2xl pt-2">Name Here</h3>
                    <p className=" bg-red-400 rounded-2xl">Status</p>
                    <p className=" bg-blue-400 rounded-2xl">Tags</p>
                    <span className="text-sm">Lorem ipsum dolor sit amet <br></br> consectetur adi</span>
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
                        <p>62</p>
                        <p>Days Since Contact</p>
                    </div>
                    <div className="bg-[#ffffff] p-5">
                        <p>30</p>
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
                    <p>Connect every<span className=" font-bold">30 Days</span></p>
                </div>
                <div className="bg-[#ffffff] p-5 rounded-md space-y-5">
                    <p>Quick Check-in</p>
                    <div className=" flex gap-5 justify-between">
                        <div onClick={()=>{tostCall()}} className=" flex flex-col items-center justify-center">
                            <Phone />
                            <p>Call</p>
                        </div>
                        <div onClick={()=>{tostMessage()}} className=" flex flex-col items-center justify-center">
                            <MessageSquare />
                            <p>Text</p>
                        </div>
                        <div onClick={()=>{tostVideo()}} className=" flex flex-col items-center justify-center">
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

export default Details;