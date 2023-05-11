import react from "react";
import OurServiceCard from "../../components/OurServiceCard";
const OurService = ()=>{
    const Service = [{
        name:"HVAC",
        img: "HVAC.webp",
        background:"hvac",
        url:"/hvac"
    },
    {
        name:"FireProtection",
        img: "Fire.webp",
        background:"fire",
        url:"/fireprotection"
    },{
        name:"Electrical",
        img: "Electrical.webp",
        background:"elec",
        url:"/electrical",
    },{
        name:"Plumbing",
        img: "Plumbing.webp",
        background:"plum",
        url:"/plumbing",
    }


]
    return(
        <div className="py-20">
        <h3 className=" font-anton text-5xl font-semi-bold uppercase text-center py-10">our services</h3>
        <div className="flex flex-col gap-4 md:grid md:grid-cols-4 gap-x-3 mx-5">
            {
                Service.map((i)=><OurServiceCard data={i}></OurServiceCard>)
            }
        </div>
        </div>
    )
}

export default OurService;