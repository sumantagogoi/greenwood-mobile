import { Box, Button, Container, MenuItem, TextField, Typography } from '@mui/material'
import './GW.css'


const GWContact = () => {


  const properties = [
    {id:1, label:'The Greenwood Resort, Guwahati'}, 
    {id:2, label:'The Greenwood,Tezpur'}, 
    {id:2, label:'The Greenwood,Beltola'}, 
  ]
  return (
        <Container maxWidth='md' sx={{diplay:'flex', mb:10}}>
            <Box sx={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center', gap:1}}>
              <Box component='img'
                src="https://thegreenwoodhotels.com/wp-content/uploads/2022/05/logo-sm.png"
                sx={{ alignItems:'center', justifyContent:'center', textAlign:'center', width:40, height:40}}
                />
              <Typography sx={{fontSize:25}}>Send us a Message</Typography>
            </Box>
            <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', mt:2, gap:2}}>
                    <TextField
                    label='Name'
                    id='name'
                    fullWidth
                    />

                    <TextField
                    label='Email'
                    id='email'
                    fullWidth
                    />
                    <TextField
                    label='Phone'
                    id='phone'
                    fullWidth
                    />

                    <TextField
                    label='Select Property'
                    id='property'
                    fullWidth
                    select
                    >
                    {properties.map((property)=>{
                      return (
                          <MenuItem key={property.id} value={property.id}>
                              {property.label}
                          </MenuItem>
                      )
                    })}
                  </TextField>
                  
                  <TextField
                    id="message"
                    label="Message"
                    multiline
                    maxRows={10}
                    cols={10}
                    fullWidth
              />
              <Button variant='contained' fullWidth>Send</Button>
            </Box>
        </Container>
      )
}

      export default GWContact