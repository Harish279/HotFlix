import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import CustomPagination from "../pagination/CustomPagination";
import SingleContent from "../components/SingleContent";
import Genres from "../components/Genres";
import useGenre from "../hooks/useGenre"

const Movies = () => {
    const [genres, setGenres] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [numOfPages, setNumOfPages] = useState();
    const genreforURL=useGenre(selectedGenres)
    // const genreforURL = useGenre(selectedGenres);
    // console.log(selectedGenres);
  
    const fetchMovies = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=b860ec64c814a936a10ca437e2c910eb&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
      );
      setContent(data.results);
      setNumOfPages(data.total_pages);
    };
  
    useEffect(() => {
      window.scroll(0, 0);
      fetchMovies();
      // eslint-disable-next-line
    }, [page,genreforURL]);
  
    return (
      <div>
        <span className="pagetitle">Movies</span>
        <Genres
          type="movie"
          selectedGenres={selectedGenres}
          setSelectedGenres={setSelectedGenres}
          genres={genres}
          setGenres={setGenres}
          setPage={setPage}
        />
        <div className="trending">
          {content &&
            content.map((c) => (
              <SingleContent
                key={c.id}
                id={c.id}
                poster={c.poster_path}
                title={c.title || c.name}
                date={c.first_air_date || c.release_date}
                media_type="movie"
                vote_average={c.vote_average}
              />
            ))}
        </div>
        {numOfPages > 1 && (
          <CustomPagination setPage={setPage} numOfPages={numOfPages} />
        )}
      </div>
    );
  };
  
  export default Movies;




// function Movies(){
//     const [page,setpage]=useState(1);
//     const [content,setcontent]=useState([]);
//     const [numofpages,setnumofpages]=useState();
//     const [genres,setgenres]=useState([]);
//     const[selectgenres,setselectgenres]=useState([]);

//     const fetchmovies= async() =>{
//         const {data}=await axios.get(`
//         https://api.themoviedb.org/3/discover/movie?api_key=b860ec64c814a936a10ca437e2c910eb&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`)
//         setcontent(data.results);
//         setnumofpages(data.total_pages);
//     };

//     useEffect(() =>{
//         fetchmovies();
//     },[page])
//     return <div>
//         <span className='pagetitle'>Movies</span>
//         <Genres 
//             type="movie"
//             setselectgenres={setselectgenres}
//             selectgenres={selectgenres}
//             setpage={setpage}
//             genres={genres}
//             setgenres={setgenres}

        
//         />
//         <div className="trending"> 
//             {
//               content && content.map((c) => 
//               <SingleContent 
//               key={c.id} 
//               id={c.id} 
//               poster={c.poster_path} 
//               title={c.title || c.name} 
//               date={c.first_air_data || c.release_date} 
//               media_type="movie"
//               vote_average={c.vote_average}
//               /> )
//             }
//         </div>
//         {numofpages>1 &&
//         (<CustomPagination setpage={setpage} numOfPages={numofpages} />) }
//     </div>
// }

// export default Movies;