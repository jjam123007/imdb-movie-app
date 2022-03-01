import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    width:'100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.7rem 0 ',
    backgroundColor:'black',
    whiteSpace: 'nowrap',
  },
  box:{
    alignItems:'center'
  },
  heading: {
    textDecoration: 'none',
    alignItems:'center',
  },
  image: {
    
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
  },
  form: {
    backgroundColor:'white',
    borderRadius: 7,
  },
  input:{
    width:'646px',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  menuButton: {
    color: 'white',
    padding: '0 1rem',
    text:'bold',
    fontSize: '0.675rem',
    fontWeight:'500',
  },
}));
