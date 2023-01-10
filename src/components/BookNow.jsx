import { Link, Button } from '@mui/material'

const BookNow = ({ url }) => {
    return (
      <Link href={url} target="_blank">
        <Button variant="contained" color="primary" sx={{ backgroundColor: 'beige', width: '100px', height: '20px', borderRadius: '15px' , fontFamily: "Savoy Regular", color: "#707070", fontSize: "10px"}}>
          BOOK NOW
        </Button>
      </Link>
    )
  }

  export default BookNow