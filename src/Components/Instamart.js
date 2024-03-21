import React from "react"
import { useState } from "react"


export const Section = ({name,description,isActive,updater}) =>

{

//const [show,setshow] = useState(false);

// const handleClick=()=>{
//     show? setshow(false) : setshow(true);
// }

    return(
        <div className="container pt-4 mb-2">
            <h3>{name}</h3>
            <button className="btn btn-success" onClick={updater}> {isActive? "Back" :"Show More"}</button>
            {isActive? <div className="desc" id="DescriptionBox">{description}</div>: " "}
        </div>
    )
}

const Instamart =()=>
{
    const[activeIndex,setActiveIndex]=useState("0")
return(
<>
<div className="container-p4">
<Section
name="I am Instamart"
description="xj,ababmakavckavcakvkcvkcamb,abca,bc,acbavcakjcakcgaca cbakcvavac
wnswbcsbcs,cnsncncns.cns.ncss,vvd.v,dvd,v,dvd
vnvdvn,dnv,dnv,nd,nvnvnvm,smsmlmsllvm "
isActive={activeIndex==="1"}
updater={()=>activeIndex==="1"? setActiveIndex("0"):setActiveIndex("1")}>
</Section>
<Section
name="Team FoodyMe"
description="Meet Our Exceptional Restaurant Team
At FoodyMe, our success is driven by the dedicated individuals who form our restaurant family. 
From the chefs who craft culinary masterpieces to the servers who provide impeccable service, 
our team members are the heartbeat of our establishment.
Passionate Culinary Artists
Our talented chefs are the creative minds behind every dish that graces your table.
With a passion for culinary innovation, they skillfully blend flavors,
textures, and ingredients to create a dining experience that tantalizes the taste buds
and leaves a lasting impression."
isActive={activeIndex==="2"}
updater={()=>activeIndex==="2"?setActiveIndex("0"):setActiveIndex("2")}>
</Section>
<Section
name="About Instamart"
description="xj,ababmakavckavcakvkcvkcamb,abca,
wnswbcsbcs,cnsncncns.cns.ncss, vvd.v,dvd,v,dvd
vnvdvn,dnv,dnv,nd,nvnvnvm,smsmlmsllvmbc,ac bavcakjcakcgaca cbakcvavac "
isActive={activeIndex==="3"}
updater={()=>activeIndex==="3"? setActiveIndex("0"):setActiveIndex("3")}>
</Section>
<Section
name="Testimonials"
description="xj,ababmakavckavcakvkcvkcamb,a
wnswbcsbcs,cnsncncns.cns.ncss, vvd.v,dvd,v,dvd
vnvdvn,dnv,dnv,nd,nvnvnvm,smsmlmsllvmbca,bc,ac bavcakjcakcgaca cbakcvavac "
isActive={activeIndex==="4"}
updater={()=>activeIndex==="4"? setActiveIndex("0"):setActiveIndex("4")}>
</Section>
</div>
</>
)
}

export default Instamart;
