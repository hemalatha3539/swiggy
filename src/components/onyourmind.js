import React from "react";
import { useState,useEffect } from "react";
import { mindurl } from "../../util/mockData";
const Mind=(props)=>{
return <div>
    <div>
        <img className="mind" src={mindurl+props.data.imageId}>
        </img>
    </div>
</div>
}
// const On=()=>{
    
// }


const MindOffer = () => {
    const [mind, setmind] = useState([]);
    async function getmind() {
      const yourmind = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTIN"
      );
      const originalData = await yourmind.json();
      console.log(originalData.data.cards[1].card.card.gridElements.infoWithStyle.info);
      setmind(originalData.data.cards[1].card.card.gridElements.infoWithStyle.info);
    }
    useEffect(() => {
        getmind()
    }, []);
    return(
      <di className="best-fle">
          {
             mind.map((x)=>{
                return(
                    < Mind data={x}/>
                )
                  
                })
          }
      </di>
      
      
    )
  
      
  };
export default MindOffer