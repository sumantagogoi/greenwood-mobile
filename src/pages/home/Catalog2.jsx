import { Box, Container, Typography } from '@mui/material'
import BookNow from '../../components/BookNow';
import { Link, useLocation } from 'react-router-dom';

const GWinfo = {
  "stay": {
    "img": "https://thegreenwoodhotels.com/wp-content/uploads/2022/06/gwr-exec-suite9-1.jpg",
    "title": "Staying At Greenwood",
    "text": "World-class hospitality and luxurious ensuite amenities create a charming haven mirroring the warmth of your home away from home."
  },
  "fnb": {
    "img": "https://thegreenwoodhotels.com/wp-content/uploads/2022/06/gwr-mynah8.jpg",
    "title": "Dining and Bar",
    "text": "Treat yourself to global culinary creations, refined cocktail concoctions, and groovy music at our chain of cafes, restaurants and bar spaces. Flavours, both sweet and savoury, tastefully-crafted beverages and a gratifying indulgence to your senses– all inviting you to an ambiance brimming with a world of warmth at The Greenwood Hotels & Resorts."
  },
  "event-bookings": {
    "img": "https://thegreenwoodhotels.com/wp-content/uploads/2022/05/greenwood-events.jpg",
    "title": "Events and Bookings",
    "text": "Choose from an unparalleled selection of banquet halls, lush lawns and conferencing facilities across all of The Greenwood properties. Ideal for hosting gatherings, both intimate and large, our variety of event spaces are accompanied with polite staff, personalised facilities and a seamless overall experience."
  },
  "spa-wellness": {
    "img": "https://thegreenwoodhotels.com/wp-content/uploads/2022/05/spa.jpg",
    "title": "Spa and Wellness",
    "text": "Seasoned and trained experts, cosy and soothing settings and state-of-the-art amenities come together to pamper you during your time at The Greenwood Hotels & Resorts."
  }

}


const CatalogGW = ({ page }) => {

  return (
    <Box sx={{ display: 'flex', mt: -7 }}>
      <Container>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Box sx={{ mb: 5 }}>
            <img className='about-image' src={`${GWinfo[page]["img"]}`} width="100%" />
          </Box>

          <Typography variant='h6' sx={{ fontWeight: 'bold', fontFamily: "Savoy Regular", textTransform: "uppercase" }}>
            {`${GWinfo[page]["title"]}`}
          </Typography>

          <Typography sx={{ mt: 2, width: "90%", textAlign: "center" }} >
            {`${GWinfo[page]["text"]}`}
          </Typography>


          <Typography sx={{ fontWeight: 'bold', fontFamily: "Savoy Regular", textTransform: "uppercase", mt: 8, mb: 2, fontSize: "14px" }}>
            Select Property to know More
          </Typography>


          <Box sx={{ display: 'flex', textAlign: 'center', mb: 15 }}>
            <Box>
              <Link to={`/gwr-${page}`}>
                <img src="/assets/images/gwr-property.jpg" width="80%" />
              </Link>

              {
                (page == "stay") ? (<BookNow url={"https://staahmax.staah.net/be/indexpackdetail?propertyId=NDkzNQ==&individual=true"} />) : (<></>)
              }
            </Box>

            <Box>
              <Link to={`/gwt-${page}`}>
                <img src="/assets/images/gwt-property.jpg" width="80%" />
              </Link>
              {
                (page == "stay") ? (<BookNow url={"https://staahmax.staah.net/be/indexpackdetail?propertyId=NDk1MA==&individual=true"} />) : (<></>)
              }
            </Box>

            <Box>
              <Link to={`/gwg-${page}`}>
                <img src="/assets/images/gwg-property.jpg" width="80%" />
              </Link>
              {
                (page == "stay") ? (<BookNow url={"https://staahmax.staah.net/be/indexpackdetail?propertyId=NDkzMg==&individual=true"} />) : (<></>)
              }
            </Box>

          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default CatalogGW