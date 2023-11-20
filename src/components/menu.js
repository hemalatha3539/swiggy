import React, { useState } from "react";
import { useEffect } from "react";
import { menuurl } from "../../util/mockData";
import { Params,useParams } from "react-router-dom";
const Menu = (props) => {
  return (
    <div className="reco-container">
      
      <div className="reco-text">
      <h1 className="reco-title">Recommended (20)</h1>
        <div className="squre">
          <span className="dot"> </span>
        </div>
        <h2 className="txt">{props.data.card.info.name}</h2>
        <h3 className="txt">{props.data.card.info.price/100}</h3>
        <h4 className="txt-2">
        {props.data.card.info.description}
        </h4>
      </div>
      <di className="relative">
        <img
          src={menuurl+props.data.card.info.imageId}
          className="reco-image"
        ></img>
        <div className="oboluts">
        <button className="reco-button">Add</button>
      </div>
      </di>
      
    </div>
  );
};

const Recomend = () => {
  const url="https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0826802&lng=80.2707184&restaurantId="
  const {id}=useParams()
  const end="&catalog_qa=undefined&submitAction=ENTER"
  const [menulist,setmenulist]=useState([])
  async function menuapi() {
    const data= await fetch(
      url+id+end
    );
    const originalData = await data.json();
    console.log(originalData.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards)
    setmenulist(originalData.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards)
    
  }
  useEffect(() => {
    menuapi();
  }, []);
  return (
    <di>


      {
        menulist.map((x)=>{
     return <Menu data={x}/>
        })
      }
      
      
    </di>
  );
};

export default Recomend;
