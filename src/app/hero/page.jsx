import Link from "next/link";
import { Plus } from "lucide-react";
import contacts from '../../../public/data/contacts.json';
import Image from "next/image";
const Hero = async () => {
    // const res = await fetch("/data/contacts.json");
    // const contacts=  await res.json();
    // console.log(contacts);
    let ontrack = 0;
    let overdue = 0;
    contacts.map(data => data.status === "on-track" ? ontrack++ : data.status === "overdue" ? overdue++ : " ")
     

    // console.log("on-track ", ontrack, " over Due ", overdue);
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
            <div className=" grid grid-cols-1 md:grid-cols-3  lg:grid-cols-4 text-center justify-items-center pt-5 gap-5">
                <div className=" bg-[#FFFFFF] w-40 h-25 flex flex-col items-center justify-center p-3" >
                    <h3>{contacts.length}</h3>
                    <p className=" text-sm">Total Friend</p>
                </div >
                <div className=" bg-[#FFFFFF] w-40 h-25 flex flex-col items-center justify-center p-3">
                    <h3>{ontrack}</h3>
                    <p className=" text-sm">On Track</p>
                </div>
                <div className=" bg-[#FFFFFF] w-40 h-25 flex flex-col items-center justify-center p-3">
                    <h3>{overdue}</h3>
                    <p className=" text-sm">Need Attention</p>
                </div>
                <div className=" bg-[#FFFFFF] w-40 h-25 flex flex-col items-center justify-center p-3">
                    <h3>12</h3>
                    <p className=" text-sm">Interactions This Month</p>
                </div>
            </div>
            <div className="pt-10">
                <h3>Friends</h3>
                
                    <div className="bg-[#F8FAFC] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
                        {contacts.map(contact => <div key={contact.id} className="card   shadow-sm bg-[#ffffff]">
                            <Link href={`/${contact.id}`}>
                            <figure className="px-10 pt-10">
                                <Image className=" rounded-full" src={contact.picture} alt={contact.name} width={80} height={80}></Image>
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{contact.name}</h2>
                                <p>{contact.days_since_contact}d ago</p>
                                <div className="card-actions flex flex-col items-center">
                                    <div className=" space-x-2">
                                        {contact.tags.map((tag, idx) => <button className="p-2 rounded-2xl bg-[#CBFADB]" key={idx}>{tag}</button>)}
                                    </div>
                                    <button className={`btn btn-sm rounded-2xl ${contact.status === "overdue" ? "bg-red-500" : contact.status === "on-track" ? " bg-green-700" : " bg-yellow-600"}`}>{contact.status}</button>
                                </div>
                            </div>
                            </Link>
                        </div>)}
                    </div>
                
            </div>
        </div>
    );
};

export default Hero;