import Link from "next/link";
import Image from "next/image";
import contacts from '../../../../public/data/contacts.json';
const FriendsSecton = () => {
    return (
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
    );
};

export default FriendsSecton;