import React from 'react';
import { AppBar, Typography, Box, Button, Input, Grid } from '@material-ui/core';
import logo from '../images/imdb_logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import AddBoxIcon from '@mui/icons-material/AddBox';
import useStyles from './style';


const Navbar = () => {
    const classes = useStyles();

    const handleSubmit = (e) =>{
        e.preventDefault();
    };

    return (
        <AppBar position="sticky" className={classes.appBar} >  
        <Box display="flex" className={classes.box}>
            <img className={classes.image} src={logo} alt="icon" height="32" width="64"  />
            <Button className={classes.menuButton}>
                <MenuIcon />  
                <Typography variant='body2' > Menu </Typography>
            </Button>
            <form className={classes.form} onSubmit={handleSubmit} autoFocus>
                <Input className={classes.input} name='searchbox' label="search" />
            </form>
            <Button className={classes.menuButton}>
                <Typography variant='body2'>
                    IMDbPro        
                </Typography>
            </Button>
            <Button className={classes.menuButton}>
                <AddBoxIcon height='24' width='24'/>
                <Typography variant='body2'>&nbsp;Watchlist</Typography>
            </Button>
            <Button className={classes.menuButton}>
                <Typography variant='body2'>Sign In</Typography>
            </Button>
        </Box>
    
        </AppBar>
    )
}
export default Navbar;
