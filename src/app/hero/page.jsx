
import Link from "next/link";
import { Plus } from "lucide-react";
import contacts from '../../../public/data/contacts.json';
import Image from "next/image";

import FriendsSecton from "./friends/page";
import FriendsHistory from "./friendsHistory/page";
const Hero = () => {
    
    return (
        
        <div className="bg-[#F8FAFC] text-black  h-full px-10 py-10">
            <div className=" text-center space-y-5 py-5">
                <h2 className="text-3xl font-bold">
                    Friends to keep close in your life
                </h2>
                <p>
                    Your personal shelf of meaningful connections. <br></br>Browse, tend, and nurture the
                    relationships that matter most.
                </p>
                <button className="btn bg-[#244D3F]">+Add a Friend</button>
            </div>
            <FriendsHistory ></FriendsHistory>
            <FriendsSecton></FriendsSecton>
        </div>
    );
};

export default Hero;