import React from "react";
import CopyrightIcon from '@material-ui/icons/Copyright';

function Copyright()
{
    var date=new Date();
    return (
        <span className="copyright" >Copyright   <CopyrightIcon /> {date.getFullYear()} </span>
    )
}

export default Copyright;