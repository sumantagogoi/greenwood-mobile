import { Link, Button } from '@mui/material'

const BookNow = ({ url }) => {
    return (
      <Link to={url}>
        <Button variant="contained" color="primary" sx={{ backgroundColor: 'white', width: '150px', height: '20px', borderRadius: '5px' , fontFamily: "Savoy Regular", color: "#707070"}}>
          BOOK NOW
        </Button>
      </Link>
    )
  }

  export default BookNow