import { Box, Typography } from '@mui/material'

const ComingSoon = ({ page }) => {

  const title = {
    "gwr-event-bookings-pobitora-lawn": "Pobitora Lawn",
    "gwg-fnb-sakahi": "Sakahi",
    "gwr-fnb-jolpan": "Jolpan"
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: "100%", textAlign:"center" }}>

      <Typography sx={{fontFamily: "Savoy Regular", fontSize: 40, mb: 30}}>{title[page]}</Typography>
      <Typography>Coming Soon!</Typography>

    </Box>

  )
}

export default ComingSoon