import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
  root:{
    width:'auto',
    backgroundColor:'white',
    margin:'auto',
    fontFamily: 'Verdana, Arial, sans-serif',
    height:'100%',
    position: 'static'
  },
  div: {
    backgroundColor:'rgba(185,185,185,0.1)'  
  },
  share:{
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    paddingBottom:'10px'
  },
  movielist:{
    position:'relative',
    padding:'15px 15px 15px 15px',
    margin:'0',
    float:'left',
    backgroundColor:'rgba(185,185,185,0.1)',
    maxWidth:'667px',
   
  },
  sidebar:{
    float:'right',
    position:'relative',
    margin:'0',
    backgroundColor:'rgba(185,185,185,0.1)',
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
    padding: '1rem 0.5rem'
  },
  rating:{
    display:'flex',
    width: '75px',
    height: '70px',
    color: '#333',
    fontSize: '13px',
    alignItems:'center'
  },
  icon:{
    width:'50px',
    alignSelf:'center'
  },
  links:{
    color: '#136CB2',
    fontSize:'13px'
  }
  
}));
