import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleContent from "../components/SingleContent";
import CustomPagination from "../pagination/CustomPagination";
function Trending(){
    const [content,setcontent]=useState([]);
    const [page,setPage]=useState(1);
    
    const fetchtrending = async() => {
        const {data}=await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=b860ec64c814a936a10ca437e2c910eb&page=${page}`)
        console.log(data);
        setcontent(data.results);
    };
    useEffect(()=>{
        window.scroll(0,0);
        fetchtrending();
        // eslint-disable-next-line
    },[page]);
    return <div>
        <span className='pagetitle'>Trending</span>
        <div className="trending"> 
            {
              content && content.map((c) => 
              <SingleContent 
              key={c.id} 
              id={c.id} 
              poster={c.poster_path} 
              title={c.title || c.name} 
              date={c.first_air_data || c.release_date} 
              media_type={c.media_type}
              vote_average={c.vote_average}
              /> )
            }
        </div>
        <CustomPagination setPage={setPage} />
    </div>
}

export default Trending;

