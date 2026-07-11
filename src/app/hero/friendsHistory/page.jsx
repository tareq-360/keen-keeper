
import contacts from '../../../../public/data/contacts.json'
let ontrack = 0;
    let overdue = 0;
    contacts.map(data => data.status === "on-track" ? ontrack++ : data.status === "overdue" ? overdue++ : " ")
     
const FriendsHistory = ({timelineData}) => {
    return (
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
                <h3>{timelineData.length}</h3>
                <p className=" text-sm">Interactions This Month</p>
            </div>
        </div>
    );
};

export default FriendsHistory;