import { Box, Container, Typography, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const Catalog = ({ page }) => {

  const places =
  {
    "gwr-stay": {
      "title": "Accomodation",
      "intro": "Soak in the comfort and opulence of our eclectic mix of luxurious rooms and suites at The Greenwood, all individually designed to tickle the fancy of anyone who wishes for homely hospitality, splendid ensuite amenities, and alluring outdoor views.",
      "photos": [
        "/assets/images/gwr/gwr-standard-room1.jpg",
        "/assets/images/gwr/gwr-premier-room1.jpg",
        "/assets/images/gwr/gwr-luxury-room1.jpg",      
        "/assets/images/gwr/gwr-suite1.jpg",
        "/assets/images/gwr/gwr-family-suite.jpg",
      ],
      "about": [""],
      "link-to": [              
        "/gwr-stay-standard-room",
        "/gwr-stay-premier-room",
        "/gwr-stay-luxury-room",      
        "/gwr-stay-greenwood-suite",
        "#" , 
      ]
    },

    "gwt-stay": {
      "title": "Accomodation",
      "intro": "Soak in the comfort and opulence of our eclectic mix of luxurious rooms and suites at The Greenwood, all individually designed to tickle the fancy of anyone who wishes for homely hospitality, splendid ensuite amenities, and alluring outdoor views.",
      "photos": [         
        "/assets/images/gwt/gwt-premier-room1.jpg",
        "/assets/images/gwt/gwt-luxury-room1.jpg",      
        "/assets/images/gwt/gwt-suite1.jpg"
      ],
      "about": [""],
      "link-to": [
        "/gwt-stay-premier-room",
        "/gwt-stay-luxury-room",      
        "/gwt-stay-greenwood-suite"
      ]
    },

    "gwg-stay": {
      "title": "Accomodation",
      "intro": "Soak in the comfort and opulence of our eclectic mix of luxurious rooms and suites at The Greenwood, all individually designed to tickle the fancy of anyone who wishes for homely hospitality, splendid ensuite amenities, and alluring outdoor views.",
      "photos": [
        "/assets/images/gwg/gwg-luxury-room1.jpg",      
        "/assets/images/gwg/gwg-suite1.jpg"
      ],
      "about": [""],
      "link-to": [
        "/gwg-stay-luxury-room",      
        "/gwg-stay-greenwood-suite"
      ]
    },

    "gwr-event-bookings": {
      "title": "Banquets and Halls",
      "intro": "Greenwood has been synonymous with meetings, conferences, celebrations and soirées. Spread over 20 acres property, \
      our state of art Convention Centre features an array of pillarless venues, breakaway spaces and immaculately landscaped lawns that reflect timelessness and grandeur. \
       Our unparalleled meetings and events expertise, fabled culinary craftsmanship and legendary hospitality have together created unforgettable memories over the years.",
      "photos": [
        "/assets/images/gwr/gwr-majuli-hall.jpg",
        "/assets/images/gwr/gwr-majuli-lawn.jpg",
        "/assets/images/gwr/gwr-kamarup-hall.jpg", 
        "/assets/images/gwr/gwr-nameri-hall.jpg",
        "/assets/images/gwr/gwr-nameri-lawn.jpg",        
        "/assets/images/gwr/gwr-umananda-lawn.jpg",
        "/assets/images/gwr/gwr-pobitora-lawn.jpg",    
      ],
      "about": [""],
      "link-to": [
        "/gwr-event-bookings-majuli-hall",
        "/gwr-event-bookings-majuli-lawn",
        "/gwr-event-bookings-kamarup-hall", 
        "/gwr-event-bookings-nameri-hall",
        "/gwr-event-bookings-nameri-lawn",        
        "/gwr-event-bookings-umananda-lawn",
        "/gwr-event-bookings-pobitora-lawn",    
      ]
    },

    "gwt-event-bookings": {
      "title": "Banquets and Halls",
      "intro": "You might be looking for wedding venue ideas, planning a key company conference, or organizing a milestone celebration. No matter the occasion, with our talented team of experts you’re in safe and capable hands. We’ll spirit your guests to a magical world—creating special moments you’ll never forget. No-one blends the fun and festive quite like us.",
      "photos": [

        "/assets/images/gwt/gwt-orang-lawn.jpg",
        "/assets/images/gwt/gwt-orang-hall.jpg",
        "/assets/images/gwt/gwt-gorh-banquet.jpg",      
        "/assets/images/gwt/gwt-gw-boardrooms.jpg"
      ],
      "about": [""],
      "link-to": [
  
        "/gwt-event-bookings-orang-lawn",
        "/gwt-event-bookings-orang-hall",
        "/gwt-event-bookings-gorh-hall",      
        "/gwt-event-bookings-gw-boardrooms"
      ]
    },

    "gwr-fnb": {
      "title": "Cullinary",
      "intro": "Combining the finest of traditional Indian cooking with culinary concepts from all over the world, the restaurants & bar at The Greenwood offers distinctive cuisines to choose from. Our Chefs at the Greenwood are trained and equipped with state of art skills and treat you to a great culinary experience. They bring the ingredients and prepare choicest delicacies. Plan a special surprise, or host your family & friends, this is the perfect way to answer both taste and hygiene concerns.",
      "photos": [

        "/assets/images/gwr/gwr-fnb-bagan.jpg",
        "/assets/images/gwr/gwr-fnb-mynah.jpg",
        "/assets/images/gwr/gwr-fnb-aroma.jpg",      
      ],
      "about": [""],
      "link-to": [
  
        "/gwr-fnb-bagan",
        "/gwr-fnb-mynah",
        "/gwr-fnb-aroma",      
      ]
    },

    "gwt-fnb": {
      "title": "Cullinary",
      "intro": "Combining the finest of traditional Indian cooking with culinary concepts from all over the world, the restaurants & bar at The Greenwood offers distinctive cuisines to choose from. Our Chefs at the Greenwood are trained and equipped with state of art skills and treat you to a great culinary experience. They bring the ingredients and prepare choicest delicacies. Plan a special surprise, or host your family & friends, this is the perfect way to answer both taste and hygiene concerns.",
      "photos": [

        "/assets/images/gwt/gwt-fnb-bagan.jpg",
        "/assets/images/gwt/gwt-fnb-mynah.jpg",
        "/assets/images/gwt/gwt-fnb-aroma.jpg",      
      ],
      "about": [""],
      "link-to": [
  
        "/gwt-fnb-bagan",
        "/gwt-fnb-mynah",
        "/gwt-fnb-aroma",      
      ]
    },

    "gwg-fnb": {
      "title": "Cullinary",
      "intro": "Combining the finest of traditional Indian cooking with culinary concepts from all over the world, the restaurants & bar at The Greenwood offers distinctive cuisines to choose from. Our Chefs at the Greenwood are trained and equipped with state of art skills and treat you to a great culinary experience. They bring the ingredients and prepare choicest delicacies. Plan a special surprise, or host your family & friends, this is the perfect way to answer both taste and hygiene concerns.",
      "photos": [

        "/assets/images/gwg/gwg-fnb-bagan.jpg",
        "/assets/images/gwg/gwg-fnb-jholoe.jpg",
        "/assets/images/gwg/gwg-fnb-kiya.jpg",
        "/assets/images/gwg/gwg-fnb-sakahi.jpg",      
      ],
      "about": [""],
      "link-to": [
  
        "/gwg-fnb-bagan",
        "/gwg-fnb-jholoe",
        "/gwg-fnb-kiya",
        "/gwg-fnb-sakahi",
      ]
    },

  }


  return (
   
      <Box sx={{ display: "flex", alignItems: "center",  flexDirection: 'column', mb: 3}} >
        <Box sx={{ display: "flex", alignItems: "center", flexDirection: 'row' }}>
          <img src="https://thegreenwoodhotels.com/wp-content/uploads/2022/05/gwexp.png" alt="Logo" style={{ width: '35px', height: '35px', marginRight: '5px' }} />
          <Typography variant="h5" style={{ fontFamily: 'Savoy Regular', textTransform: 'uppercase', textAlign: "left" }}>
            {places[page]["title"]}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", mt: 2, justifyContent: "center", flexDirection: 'row' }} >
          <Typography variant="body1" sx={{ fontFamily: 'Avenir Book', width: '90%', align: "center", textAlign: "center" }}>
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