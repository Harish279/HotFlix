import React, { useEffect } from "react";
import axios from "axios";
import {useState} from "react";
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import { createMuiTheme,ThemeProvider } from '@material-ui/core/styles';
import { Button } from "@material-ui/core";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import CustomPagination from "../pagination/CustomPagination";
import SingleContent from "../components/SingleContent";


function Search(){
    const [type,setType]=useState(0);
    const [page,setPage]=useState(1);
    const [searchText,setSearchText]=useState();
    const [content,setContent]=useState();
    const [numOfPages,setNumOfPages]=useState();



    const darktheme =createMuiTheme({
        palette:{
            type:"dark",
            primary:{
                main:"#fff",
            }
        }
    });

    const fetchsearch= async () =>{
        try {
            const { data } = await axios.get(
              `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=b860ec64c814a936a10ca437e2c910eb&language=en-US&query=${searchText}&page=${page}&include_adult=false`
            );
            setContent(data.results);
            setNumOfPages(data.total_pages);
            // console.log(data);
          } catch (error) {
            console.error(error);
          }
    }
    useEffect(() => {
        window.scroll(0,0);
        fetchsearch();
        // eslint-disable-next-line
    },[type,page])

    return <div>
        <span className='pagetitle'>Search</span>
        <ThemeProvider theme={darktheme} >
            <div style={{display:"flex",margin:"15px 0"}} >
            <TextField 
                style={{flex : 2,color:"white"}}
                className="searchbox"
                id="outlined-basic" 
                label="Search" 
                variant="filled" 
                onChange={(e) => setSearchText(e.target.value)}
            />
            <Button variant="contained"  style={{marginLeft:10}} onClick={fetchsearch} > <SearchIcon /> </Button>
            </div>
            <Tabs
                value={type}
                onChange={(event,newvalue) =>{
                    setType(newvalue);
                    setPage(1);
                }}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab  style={{width:"50%"}} label="Search Movies" />
                <Tab style={{width:"50%"}} label="Search TV Series" />
                
            </Tabs>
        </ThemeProvider>
        <div className="trending">
          {content &&
            content.map((c) => (
              <SingleContent
                key={c.id}
                id={c.id}
                poster={c.poster_path}
                title={c.title || c.name}
                date={c.first_air_date || c.release_date}
                media_type={type? "tv" :"movie" }
                vote_average={c.vote_average}
              />
            ))}
            {searchText && !content && (type ? <h2> No Series Found</h2>:<h2>No Movies Found</h2>)}
        </div>
        {numOfPages > 1 && (
          <CustomPagination setPage={setPage} numOfPages={numOfPages} />
        )}
    </div>
}

export default Search;