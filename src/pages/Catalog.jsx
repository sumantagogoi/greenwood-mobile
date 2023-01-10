import { Box, Container, Typography, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const Catalog = ({ page }) => {

  const places =
  {
    "gwr-stay": {
      "title": "Accomodation",
      "intro": "Soak in the comfort and opulence of our eclectic mix of luxurious rooms and suites at The Greenwood, all individually designed to tickle the fancy of anyone who wishes for homely hospitality, splendid ensuite amenities, and alluring outdoor views.",
      "photos": [
        //"/assets/images/gwr/gwr-family-suite.jpg",
        "/assets/images/gwr/gwr-standard-room1.jpg",
        "/assets/images/gwr/gwr-premier-room1.jpg",
        "/assets/images/gwr/gwr-luxury-room1.jpg",      
        "/assets/images/gwr/gwr-suite1.jpg"
      ],
      "about": [""],
      "link-to": [
        //"gwr-family-suite"        
        "/gwr-stay-standard-room",
        "/gwr-stay-premier-room",
        "/gwr-stay-luxury-room",      
        "/gwr-stay-greenwood-suite"
      ]
    }

  }


  return (
   
      <Box sx={{ display: "flex", alignItems: "center",  flexDirection: 'column', mb: 7}} >
        <Box sx={{ display: "flex", alignItems: "center", flexDirection: 'row' }}>
          <img src="https://thegreenwoodhotels.com/wp-content/uploads/2022/05/gwexp.png" alt="Logo" style={{ width: '45px', height: '45px', marginRight: '8px' }} />
          <Typography variant="h5" style={{ fontFamily: 'Savoy Regular', textTransform: 'uppercase' }}>
            {places[page]["title"]}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", mt: 2, alignItems: "center", justifyContent: "center", flexDirection: 'row' }} >
          <Typography variant="body1" sx={{ fontFamily: 'Avenir Book', width: '80%', align: "center", textAlign: "center" }}>
            {places[page]["intro"]}
          </Typography>
        </Box>

        {
          places[page]["photos"].map((item, index) => {
            return (
              <Box sx={{ display: "flex", mt: 3, textAlign: index % 2 === 0 ? 'left' : 'right'}} >
                <Link to={`${places[page]["link-to"][index]}`}>
                  <img src={item} alt="greenwood" width="80%" />
                </Link>
              </Box>
            )

          })
        }

      </Box>
 


  )

}

export default Catalog