import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    width:'100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 10px 10px 10px',
    backgroundColor:'black',
    fontFamily: 'Helvetica,Arial,sans-serif',    
    // rgba(0,183,255, 1)
  },
  heading: {
    textDecoration: 'none',
    alignItems:'center',
  },
  image: {
    marginLeft: '45px',
    paddingLeft:'55px'
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
    backgroundColor: '#000',
    padding: '0 1rem',
    text:'bold',
    fontSize: '0.875rem',
    fontWeight:'500',
  },
}));
