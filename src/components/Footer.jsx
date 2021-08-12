import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import TheatersRoundedIcon from '@material-ui/icons/TheatersRounded';
import TvIcon from '@material-ui/icons/Tv';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles({
  root: {
    width: '100%',
    position:'fixed',
    top:100,
    backgroundColor:'#474B4F',
    zIndex:100,
    marginLeft:"-10px",
    overflow:"hidden",
    
    // boxShadow:"5px 0px 0px white"

  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history=useHistory();
  useEffect(()=>{
      if(value===0)
        history.push("/");
      else
        if(value===1)
          history.push("/movies");
            else
              if(value===2)
                history.push("/series");
                  else
                    if(value===3)
                      history.push("/search");

  },[value,history])

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction onClick={()=> window.scroll(0,0) } style={{color:"#86C232" }} label="Trending" icon={<WhatshotIcon />} />
      <BottomNavigationAction onClick={()=> window.scroll(0,0) } style={{color:"#86C232"}} label="Movies" icon={<TheatersRoundedIcon />} />
      <BottomNavigationAction onClick={()=> window.scroll(0,0) } style={{color:"#86C232"}} label="Tv Series" icon={<TvIcon />} />
      <BottomNavigationAction onClick={()=> window.scroll(0,0) } style={{color:"#86C232"}} label="Search" icon={<SearchIcon />} />
      
    </BottomNavigation>
  );
}