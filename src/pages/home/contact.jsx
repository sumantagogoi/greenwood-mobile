import { useState } from 'react';
import { Box, Button, Container, MenuItem, TextField, Typography } from '@mui/material';
import './GW.css';

const GWContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    property: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const properties = [
    { id: 1, label: 'The Greenwood Resort, Guwahati' },
    { id: 2, label: 'The Greenwood, Tezpur' },
    { id: 3, label: 'The Greenwood, Beltola' },
  ];

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
    console.log("updated" + Math.random());
  };

  const handlePropertyChange = (event) => {
    setFormData({ ...formData, property: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setSubmitting(true);

      // Convert formData to URL-encoded format
      const urlEncodedFormData = new URLSearchParams(formData).toString();

      // Simulate form submission (replace with actual API call)
      await fetch('https://forms.xynocast.com/greenwood/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: urlEncodedFormData,
      });

      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box>
      <Box>
        <img src="/assets/images/gwcont.jpg" width="100%" />
      </Box>
      <Container maxWidth='md' sx={{ diplay: 'flex', mb: 10, }}>
        <Box>
          <Typography sx={{ fontSize: 20, fontFamily: "Savoy Regular" }}>
            The Greenwood Resort, Guwahati</Typography>
          <Typography sx={{ fontSize: 12, fontFamily: "Avenir Book" }}>
            Phone: +91 <a href="tel:9207042326">92070 42326</a>
            <a href="tel:9207042327">/27</a> </Typography>
          <Typography sx={{ fontSize: 12, fontFamily: "Avenir Book" }}>
            Email: <a href="mailto:info@greenwoodresort.in">info@greenwoodresort.in</a>
          </Typography>
          <Typography sx={{ fontSize: 12, fontFamily: "Avenir Book" }}>
            Address: Madhab Nagar, Khanapara, Guwahati - 781022
          </Typography>
        </Box>
        <Box sx={{ mt: 5 }}>
          <Typography sx={{ fontSize: 20, fontFamily: "Savoy Regular" }}>
            The Greenwood, Tezpur</Typography>
          <Typography sx={{ fontSize: 12, fontFamily: "Avenir Book" }}>
            Phone: +91 <a href="tel:8811072202">88110 72202</a>
            <a href="tel:8811072203">/03</a> </Typography>
          <Typography sx={{ fontSize: 12, fontFamily: "Avenir Book" }}>
            Email: <a href="mailto:info@thegreenwoodhotels.com">info@thegreenwoodhotels.com</a>
          </Typography>
          <Typography sx={{ fontSize: 12, fontFamily: "Avenir Book" }}>
            Address: P.O Baruachuburi, Dekargaon, Tezpur – 784501
          </Typography>
        </Box>
        <Box sx={{ mt: 5 }}>
          <Typography sx={{ fontSize: 20, fontFamily: "Savoy Regular" }}>
            The Greenwood, Guwahati</Typography>
          <Typography sx={{ fontSize: 12, fontFamily: "Avenir Book" }}>
            Phone: +91 <a href="tel:7099021270">70990 21270</a>
            <a href="tel:7099021271">/71</a> </Typography>
          <Typography sx={{ fontSize: 12, fontFamily: "Avenir Book" }}>
            Email: <a href="mailto:info.gwg@thegreenwoodhotels.com">info.gwg@thegreenwoodhotels.com</a>
          </Typography>
          <Typography sx={{ fontSize: 12, fontFamily: "Avenir Book" }}>
            Address: Madhab Nagar, Khanapara, Guwahati - 781022
          </Typography>
        </Box>

      
      {!submitted ? (  <>
        <Box sx={{
          display: 'flex', justifyContent: 'center',
          flexDirection: 'column', alignItems: 'center', gap: 1, mt: 5
        }}>

          <Box component='img'
            src="https://www.thegreenwoodhotels.com/wp-content/uploads/2022/05/logo-sm.png"
            sx={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center', width: 40, height: 40 }}
          />
          <Typography sx={{ fontSize: 25, fontFamily: "Savoy Regular" }}>Send us a Message</Typography>
        </Box>

        <form onSubmit={handleSubmit}>
              <TextField
                label='Name'
                id='name'
                fullWidth
                value={formData.name}
                onChange={handleInputChange}
              />

              <TextField
                label='Email'
                id='email'
                fullWidth
                value={formData.email}
                onChange={handleInputChange}
              />
              <TextField
                label='Phone'
                id='phone'
                fullWidth
                value={formData.phone}
                onChange={handleInputChange}
              />

              <TextField
                label='Select Property'
                id='property'
                fullWidth
                select
                value={formData.property} // Bind value to formData.property
                onChange={handlePropertyChange} // Update formData.property on change
              >
                {properties.map((property) => (
                  <MenuItem key={property.id} value={property.label}> {/* Use property.id as value */}
                    {property.label}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                id="message"
                label="Message"
                multiline
                maxRows={10}
                cols={10}
                fullWidth
                value={formData.message}
                onChange={handleInputChange}
              />
              <Button type="submit" variant='contained' fullWidth disabled={submitting}>
                {submitting ? 'Submitting...' : 'Send'}
              </Button>
            </form>
       
       </>) :<></>
  }

      </Container>
    </Box>
  )
}

export default GWContact