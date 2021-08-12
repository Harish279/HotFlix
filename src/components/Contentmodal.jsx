import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import axios from 'axios';
import { Button } from '@material-ui/core';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { useState } from 'react';
import { useEffect } from 'react';
import {
    img_500,
    unavailable,
    unavailableLandscape
} from "../config/config";
import Carousel from "../components/Carousel"


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
      width:"90%",
      height:"80%",

    backgroundColor:"#474B4F",
    border: '2px solid white',
    color:"white",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function Contentmodal({children,media_type,id}) {
    const classes=useStyles();
  const [content,setContent]=useState();
  const [video,setVideo]=useState();  
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const fetchdata= async() =>{
      const {data}=await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=b860ec64c814a936a10ca437e2c910eb&language=en-US`);
    setContent(data);
  }

  const fetchvideo= async() =>{
    const {data}=await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=b860ec64c814a936a10ca437e2c910eb&language=en-US`);
    setVideo(data.results[0]?.key);
}

useEffect(() => {
    fetchdata();
    fetchvideo();
    // eslint-disable-next-line
},[])

  return (
    <>
      <div color="inherit" style={{cursor:"pointer"}} className="media"  onClick={handleOpen}>
        {children}
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
         {content && <div className={classes.paper}>
            <div className="ContentModal">
                <img 
                    alt={content.name || content.title}
                    className="ContentModal_portrait" 
                    src ={content.poster_path ? `${img_500}/${content.poster_path}`: unavailable} 
                />
                 <img 
                    alt={content.name || content.title}
                    className="ContentModal_landscape" 
                    src ={content.backdrop_path ? `${img_500}/${content.backdrop_path}`: unavailableLandscape } 
                />
                <div className="ContentModal_about">
                    <span className="ContantModal_title" >
                        {content.name || content.title}(
                            {(
                                content.first_air_date || content.release_date || "-----"
                            ).substring(0,4)}
                            
                        )

                    </span>
                    {content.tagline && (
                        <i className="tagline">{content.tagline}</i>
                    )}
                    <span className="ContentModal_description" >
                        {content.overview}
                    </span>
                    <div>
                        <Carousel media_type={media_type} id={id}/>
                    </div>
                    <Button
                        variant="contained"
                        startIcon={<YouTubeIcon />}
                        color="white"
                        target="__blank"
                        href={`https://www.youtube.com/watch?v=${video}`}
                  >
                    Watch the Trailer
                  </Button>
                    
                </div>
            </div>
          </div>}
        </Fade>
      </Modal>
    </>
  );
}
