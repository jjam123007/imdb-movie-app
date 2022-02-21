import { Box, Button, Container, Grid, Grow, Paper, Typography } from '@material-ui/core';
import React, {useEffect} from 'react';
import * as api from '../api/index.js';
import useStyles from './styles';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import axios from 'axios';
import { BrowserRouter, Link } from 'react-router-dom';

const Movies250 = () => {

  const classes = useStyles();
  const [movies, setMovies] = React.useState([]);
 
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
          <Grid className={classes.container} container>
          <Grid item>
            <img className={classes.image} src={image} alt={title}/>
          </Grid>
          <Grid item className={classes.title}>
            <Typography>{title} &nbsp; ({year})</Typography>
            <div className={classes.velocity}> <span>{rank} ({rankUpDown})</span></div>
          </Grid>
          <Grid item className={classes.rating}>
            <StarIcon/>
            <Typography> {imDbRating}</Typography>
          </Grid>
          <Grid item>
            <Button><StarBorderIcon/></Button>
          </Grid>
          </Grid>
    )
  }

  return (
    <div className={classes.bigContainer} >
      
      <img src="https://s0.2mdn.net/simgad/16289963856989122999" 
      alt="Advertisement" 
      border="0"
      alignContent='center'
      width="970" 
      height="250"/>

      <div>
      <div className={classes.movielist}>
        {movies.length > 0 && movies.map((value,index) =>
          <Movielist key={index} {...value}/>)}
      </div>     

      <div className={classes.sidebar}>
        <BrowserRouter>
          <Link to = {"/BoxOffice"} className="table-row">Box Office</Link>      
          <Link to = {"/MostPM"} className="table-row">Most Popular Movies</Link>
          <Link to = {"/Top250M"}className="table-row">Top 250 Movies</Link>
          <Link to = {"/TopRated"}className="table-row">Top Rated English Movies</Link>  
          <Link to = {"/MostPTV"} className="table-row">Most Popular TV Shows</Link>      
          <Link to = {"/Top250TV"} className="table-row">Top 250 TV shows</Link>
          <Link to = {"/TopRatedIM"}className="table-row">Top Rated Indian Movies</Link>
          <Link to = {"/LowRated"}className="table-row">Lowest Rated Movies</Link>  
        </BrowserRouter>
      </div> 
      </div>
       
    </div>
  )
}

export default Movies250;
