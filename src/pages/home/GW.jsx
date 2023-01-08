import { Box, Container } from '@mui/material'
import './GW.css'


const GW = () => {
  return (
    <div className="scrollable">
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '50vh' }}>
        <div className="video-container">
          <video className="video-bg" autoPlay loop>
            <source src="https://thegreenwoodhotels.com/wp-content/uploads/2022/04/header-video.mp4" type="video/mp4" />

          </video>

          <img src="https://thegreenwoodhotels.com/wp-content/uploads/2022/04/Group-463.png" alt="Overlay Image" className="image-overlay" />
          {/* Other JSX elements here */}
        </div>

      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>

        <img src="/assets/images/gw2.jpg" alt="A description of the image" width="100%" />

      </Box>
      </div>

      )
}

      export default GW