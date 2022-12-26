import { Box, Button, Stack, Typography, Paper } from '@mui/material'
import React, { useContext } from 'react'
import './Nav2.css'
import { BiHome } from 'react-icons/bi'
import { BsFillBagCheckFill } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import AppContext from '../../context/GreenwoodAppContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { Link } from 'react-router-dom';



const Nav2 = ({page}) => {

    const gwdata = {
        "gwg" :  "The<br> Greenwood,<br> Guwahati",
        "gwr" :"The <br>Greenwood <br>Resort",
        "gwt"  :    "The<br> Greenwood, <br>Tezpur"
    }
    var gw=page.substr(0,3)
    const gwx = Object.keys(gwdata).includes(gw)
    var name = gwx ? gwdata[gw]:"The<br> Greenwood";
    var gw1= gwx ? gw : "";
    var gw2 = gwx ? gw+"-" : "";
    return (
        <Paper style={{ position: 'fixed', bottom: 0, width: '100%' }}>
        <Box sx={{ display: 'flex', flexGrow: 1, mt: 2, justifyContent: 'center', backgroundColor: '#173632' }}>
            <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

                <Link to={`/${gw1}`}>
                    <Button>
                        <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                           
                            <Typography sx={{ color: 'white', fontSize: '12px' }} dangerouslySetInnerHTML={{__html: name}}></Typography>
                        </Stack>
                    </Button>
                </Link>


                <Link to={`/${gw2}stay`}>
                    <Button>
                        <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <FontAwesomeIcon icon={solid('bed')} size="lg" color="white" />
                            <Typography sx={{ color: 'white' }}>Stay</Typography>
                        </Stack>
                    </Button>

                </Link>

                <Link to={`/${gw2}fnb`}>
                    <Button>
                        <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <FontAwesomeIcon icon={solid('utensils')} size="lg" color="white" />
                            <Typography sx={{ color: 'white' }}>F&B</Typography>
                        </Stack>
                    </Button>
                </Link>


                <Link to={`/${gw2}event-bookings`}>
                    <Button>
                        <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <FontAwesomeIcon icon={solid('champagne-glasses')} size="lg" color="white" />
                            <Typography sx={{ color: 'white' }}>Event Bookings</Typography>
                        </Stack>
                    </Button>

                </Link>

                <Link to={`/${gw2}spa`}>
                    <Button>
                        <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <FontAwesomeIcon icon={solid('spa')} size="lg" color="white" />
                            <Typography sx={{ color: 'white' }}>Spa</Typography>
                        </Stack>
                    </Button>
                </Link>


            </Stack>
        </Box>
        </Paper>
    )
}

export default Nav2
