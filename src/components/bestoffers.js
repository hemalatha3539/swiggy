import React from "react";
import { useState, useEffect } from "react";
import { beeturl } from "../../util/mockData";
const Best = (props) => {
  return (
    <div>
      <div>
        <img
          className="bestof"
          src={
            beeturl + props.data.imageId
          }
        ></img>
      </div>
    </div>
  );
};

const BestOffer = () => {
  const [best, setbest] = useState([]);
  async function getBest() {
    const bestoffer = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const originalData = await bestoffer.json();
    console.log(originalData.data.cards[0].card.card.imageGridCards.info);
    setbest(originalData.data.cards[0].card.card.imageGridCards.info);
  }
  useEffect(() => {
    getBest();
  }, []);
  return(
    <di className="best-fle">
        {
            best.map((x)=>{
                return <Best data={x} />
                
              })
        }
    </di>
    
    
  )

    
};
export default BestOffer;
