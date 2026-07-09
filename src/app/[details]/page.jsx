import CardDetails from "../cardDetails/page";
import data from "../../../public/data/contacts.json";
const Details = async({params}) => {
    const {details}=await params;
    // console.log("id is = ",data);
    const detail=data.find((detail)=>detail.id==details);
    // console.log(" finded id is = ",detail);
    return (
        <div>
            <CardDetails detail={detail}></CardDetails>
        </div>
    );
};

export default Details;