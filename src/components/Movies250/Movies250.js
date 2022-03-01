import { Box, Button, Container, Grid, IconButton, MenuItem, Typography } from '@material-ui/core';
import React, {useEffect, useState} from 'react';
import * as api from '../api/index.js';
import useStyles from './styles';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import axios from 'axios';
import { BrowserRouter, Link } from 'react-router-dom';
import ShareIcon from '@mui/icons-material/Share';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';

const Movies250 = () => {

  const classes = useStyles();
  const [movies, setMovies] = useState([]);
  const [sortType, setSortType] = useState();    
  useEffect(()=>{
      const sortArray = type => {
          console.log(type);
          let sorted = movies
          if (type == "rank"){
              sorted = [...movies]
              .sort((a, b) => parseInt(b[type]) - parseInt(a[type]));
              sorted.reverse();
          }
          else if (type == "imDbRating"){
              sorted = [...movies]
              .sort((a, b) => parseInt(b[type]) - parseInt(a[type]));
              console.log(movies[0][type]);
          }else{
              sorted = [...movies]
              .sort((a, b) => parseInt(b[type]) - parseInt(a[type]));
          }        
          setMovies(sorted);
          console.log("hi",sorted);   
      };
          sortArray(sortType);
    },[sortType]);
 
  const appi = "https://imdb-api.com/en/API/MostPopularMovies/k_dkk8l22z";

  const getMovies = async (API) =>{
    await fetch(API)
     .then(res => res.json())
     .then((data) => {
         console.log(data.items);    
         setMovies(data.items);
     })}

  useEffect(() => {
    getMovies(appi);
  },[]);
  
  const Movielist = ({title,year,rank,rankUpDown,imDbRating, imDbRatingCount,image}) =>{
    return(
          <Grid container wrap='nowrap'>
          <Grid item>
            <img className={classes.image} src={image} alt={title}/>
          </Grid>
          <Grid item className={classes.title}>
            <Typography variant='body2'>{title} &nbsp; ({year})</Typography>
            {rank} ({rankUpDown})
          </Grid>
          <Grid item className={classes.rating}>
              {imDbRating?(
              <><StarIcon/>
              <Typography variant='body2'> {imDbRating}</Typography></>
              ):(<div></div>)}
          </Grid>
          <Grid item className={classes.icon}>
            <IconButton><StarBorderIcon/></IconButton>
          </Grid>
          <Grid item className={classes.icon}>
            <IconButton><AddBoxRoundedIcon/></IconButton>
          </Grid>

          </Grid>
    )
  }

  return (
    <Container maxWidth='md' className={classes.root}>
      <Grid container className={classes.div}>
        <Grid item xs={12}>
        <img src="https://s0.2mdn.net/simgad/16289963856989122999" 
        alt="Advertisement" 
        border="0"
        width="100%" 
        height="250"/>
      </Grid>
     
      <Grid item xs={8}>
        <Typography variant='h6'>IMDb Charts</Typography>
        <Grid item className={classes.share}>
          <Typography variant='h5'>Most Popular Movies</Typography>
          <IconButton>
            <ShareIcon />
          </IconButton>
          </Grid>
        <Typography variant='subtitle2'>As determined by IMDb Users</Typography>
        <hr/>
        <Grid item className={classes.share}>
          <Typography>Showing 100 Titles</Typography>
          <Typography wrap='nowrap'>Sort by: &nbsp;
                  <select onChange= {(e)=> setSortType(e.target.value)}>
                      <option value="rank">Ranking</option>
                      <option value="imDbRating">IMDb Rating</option>
                      <option value="year">Release Date</option>
                      <option value="imDbRatingCount">Number of Ratings</option>
                  </select>
                  &nbsp;
                  </Typography>
                  
        </Grid>
        {movies.length > 0 && movies.map((value,index) =>
          <Movielist key={index} {...value}/>)}
      </Grid>     

        <Grid container direction='column' item xs={4}>
          <img src="https://s0.2mdn.net/simgad/10630940446316087339" 
          alt="Advertisement" 
          width="100%" 
          height="250"/>

          <Typography variant='h6'>You Have Seen</Typography>
          <hr/>
          <Typography variant='h6'>IMDb Charts</Typography>
          <Grid container direction='column'  className={classes.links}>
            <BrowserRouter style={{ textDecoration: 'none' }}>
              <Link to = {"/BoxOffice"}>Box Office</Link>      
              <Link to = {"/MostPM"} >Most Popular Movies</Link>
              <Link to = {"/Top250M"}>Top 250 Movies</Link>
              <Link to = {"/TopRated"}>Top Rated English Movies</Link>  
              <Link to = {"/MostPTV"} >Most Popular TV Shows</Link>      
              <Link to = {"/Top250TV"}>Top 250 TV shows</Link>
              <Link to = {"/TopRatedIM"}>Top Rated Indian Movies</Link>
              <Link to = {"/LowRated"}>Lowest Rated Movies</Link>  
            </BrowserRouter>
          </Grid>
        </Grid> 
        
      </Grid>
    </Container>
  )
}

export default Movies250;
