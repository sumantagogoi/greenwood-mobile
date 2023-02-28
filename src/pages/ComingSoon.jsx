import { Box, Typography } from '@mui/material'

const ComingSoon = ({ page }) => {

  const title = {
    "gwr-event-bookings-pobitora-lawn": "Pobitora Lawn",
    "gwg-fnb-sakahi": "Sakahi"
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>

      <Typography>{title[page]}</Typography>
      <Typography>Coming Soon!</Typography>

    </Box>

  )
}

export default ComingSoon