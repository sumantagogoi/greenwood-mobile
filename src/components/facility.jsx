import { Box, Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({


  content: {
    position: 'relative',
    height: '100%',
    padding: theme.spacing(3),
    paddingTop: 80,
    paddingBottom: 80,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#ffffff',
    zIndex: 14,
  },

}));

export default function Facility({ contnt }) {

  const classes = useStyles();

  return (
    <Box sx={{
      position: 'relative',
      marginTop: 3,
      height: 'auto',
      minHeight: "300px",
      width: '100%',
      borderRadius: '5px',
      mb: 10,

      '&:before': {
        content: '""',
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundImage: `url(${contnt["bg"]})`,
        filter: 'blur(2px)',
        zIndex: '2',
        backgroundSize: "cover",
      },
      '&:after': {
        content: '""',
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.4)',
        zIndex: '12',
      },
    }}>
      <Box className={classes.content} >
        <Typography variant="h5" sx={{ mb: 2, fontFamily: "Savoy Regular", textTransform: "uppercase" }}>{contnt["title"]}</Typography>
        <Typography variant="body1" align="center" sx={{ fontFamily: "Avenir Book", mb: 3 }}>
          {contnt["text"]}
        </Typography>
        <Link to={contnt["link"]}>
          <Button variant="contained" sx={{
            fontFamily: "Savoy Regular", textTransform: "uppercase",
            backgroundColor: 'rgba(0,0,0,0)',
            borderRadius: '20px',
            color: '#ffffff',
            border: '1px solid #ffffff',
            zIndex: 15,
          }}>
            View More
          </Button>
        </Link>
      </Box>
    </Box>
  );
}