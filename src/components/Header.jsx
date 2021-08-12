import React from "react";
// import "./styles.css";
import GraphicEqIcon from '@material-ui/icons/GraphicEq';



function Header(){
    return <span onClick={()=>window.scroll(0,0)} className="header">HotFlix <GraphicEqIcon/> </span>
}

export default Header;