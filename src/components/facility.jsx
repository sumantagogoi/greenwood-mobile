import { Box, Button, Typography } from '@mui/material';
import { styled, makeStyles } from '@mui/material/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    height: '300px',
    overflow: 'hidden',
    padding: theme.spacing(2),
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    filter: 'blur(8px)',
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 1,
  },
  content: {
    position: 'relative',
    zIndex: 2,
    color: '#fff',
  },
  button: {
    marginTop: theme.spacing(2),
    backgroundColor: 'transparent',
    color: '#fff',
    border: '1px solid #fff',
    borderRadius: theme.spacing(1),
    '&:hover': {
      backgroundColor: '#fff',
      color: '#000',
    },
  },
}));

export default function Facility() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.overlay} />
      <div className={classes.content}>
        <Typography variant="h4" component="h1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
        <Typography variant="body1">
          Vestibulum quis gravida eros, sit amet ultrices sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        </Typography>
        <Button variant="outlined" className={classes.button}>
          Read More
        </Button>
      </div>
    </div>
  );
}