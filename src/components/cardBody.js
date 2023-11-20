import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import { useEffect } from "react";
import { url } from "../../util/mockData";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import BestOffer from "./bestoffers";
import MindOffer from "./onyourmind";


const Card = (props) => {
  return (
    <div className="box">
      <img
        className="image"
        src={url + props.data.info.cloudinaryImageId}
      ></img>
      <h3 className="hotel">{props.data.info.name}</h3>
      <h3 className="rating">
        <i className="bi bi-star-fill"></i>
        {props.data.info.avgRating} <span> .22 min</span>
      </h3>
      <h3 className="cuigin">{props.data.info.cuisines.join(",")}</h3>
      <p className="location">{props.data.info.locality}</p>
      <p className="location">
        <span className="rs">Rs.</span>
        {props.data.info.feeDetails.fees[0].fee / 10}
      </p>
    </div>
  );
};

const CardsFlex = () => {
  const [resto, setresto] = useState([]);
  const [search, setsearch] = useState("");
  async function getData() {
    const swiggy = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=14.4425987&lng=79.98645599999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const originalData = await swiggy.json();
    console.log(
      originalData.data.cards[2].card.card.gridElements.infoWithStyle
        .restaurants
    );
    setresto(
      originalData.data.cards[2].card.card.gridElements.infoWithStyle
        .restaurants
    );
  }
  useEffect(() => {
    getData();
  }, []);
  if (resto.length == 0) {
    return <Shimmer />;
  } else {
    return (
      <div>
        <div className="filter-container">
          <button
            onClick={() => {
              const AboveFour = resto.filter((x) => {
                return x.info.avgRating > 4;
              });
              setresto(AboveFour);
            }}
            className="filter-button"
          >
           
            Ratings 4.0
          </button>
          <button className="filter-button-1"> Rs. 300-Rs.600</button>
          <button
            onClick={() => {
              const Inbtwn = resto.filter((x) => {
                return x.info.feeDetails.fees[0].fee / 10 > 200;
              });
              setresto(Inbtwn);
            }}
            className="filter-button-2"
          >
            less than Rs.200
          </button>
        </div>
      

       <div className="search-container">
          <input
            className="input"
            type="text"
            placeholder="Enter your choice" value={search}
            onChange={(z)=>{
              setsearch(z.target.value)
              console.log(search)
            }}          
          ></input>
          <button className="search-button" onClick={()=>{
            const sea= resto.filter((A)=>{
             return A.info.name.toLowerCase().includes(search.toLowerCase())

            })
          setresto(sea)
          }}>Search</button>
        </div>
  
 

        <div className="cards-flex">
          <div className="flex-s">
            {resto.map((x) => {
              return <Link  className="link"to={"/restaurants/"+x.info.id}><Card data={x} />;</Link>
            })}
          </div>
        </div>
      </div>
    );
  }
};

const CardBody = () => {
  return (
    <div className="cardsbody">
      
      <h2 className="filter-heading">
       <h2>best offers for you</h2>
       
       <div className="best-flex">

       <BestOffer/>
      
       {/* <Beest/>
       <Beest/>
       <Beest/>
       <Beest/>
       <Beest/>
       <Beest/>
       <Beest/>
       <Beest/> */}
       </div>
       <h2>Hemalatha Whats on your mind</h2>
       <div className="small">
        <MindOffer/>
       </div>
        <h2>Reastaurants with online food delevery</h2>
      </h2>
      <CardsFlex />
    </div>
  );
};

export default CardBody;
