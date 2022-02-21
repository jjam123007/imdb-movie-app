import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
  bigContainer:{
    minWidth:'1008px',
    width:'auto',
    backgroundColor:'white',
    margin:'auto',
    fontFamily: 'Verdana, Arial, sans-serif',
    height:'100%',
    position: 'static'
  },
  container: {
    height:'100%',
    backgroundColor:'white',    
  },
  movielist:{
    position:'relative',
    padding:'15px 15px 15px 15px',
    margin:'0',
    float:'left',
    backgroundColor:'transparent',
    maxWidth:'667px',
   
  },
  sidebar:{
    float:'right',
    position:'relative',
    margin:'0',
    backgroundColor:'transparent',
    maxWidth:'300px',
    padding:'15px 15px 15px 15px',
    },
  image: {
    width: '45px',
    height: '67px',
  },
  velocity: {
    display: 'block',
    marginTop: '3px',
    fontSize: '11px',
  },
  title: {
    width: '374px',
    height: '70px',
    color: '#333',
    fontSize: '13px',
    paddingLeft: '0.5rem'
  },
  rating:{
    display:'flex',
    width: '75px',
    height: '70px',
    color: '#333',
    fontSize: '13px',
    verticalAlign:'center'
  },
  
}));
