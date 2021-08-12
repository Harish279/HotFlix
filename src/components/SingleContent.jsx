import { Badge } from "@material-ui/core";
import React from "react";
import { img_300,unavailable } from "../config/config";
import Contentmodal from "./Contentmodal";

function SingleContent(props){
  return (
    <Contentmodal media_type={props.media_type} id={props.id} >
      <Badge 
        badgeContent={props.vote_average} 
        color={props.vote_average>6 ? "primary" : "secondary" } 
      />
      <img className="poster" src={props.poster ? `${img_300}/${props.poster}` : unavailable} alt={props.title} />
      <b className="title">{props.title}</b>
      <span className="subtitle" >
        {props.media_type==="tv" ? "TV Series" : "Movies" }
        <span className="subtitle">{props.date} </span>
      </span>
    </ Contentmodal >
  )
}

export default SingleContent;