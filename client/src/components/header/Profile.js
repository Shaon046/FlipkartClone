import {React, useState} from 'react';
import { Typography,Box,Menu,MenuItem,styled} from '@mui/material';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
const Component=styled(Menu)`
margin-top: 5px;
`
const Logout=styled(Typography)`
font-size:14px;
margin-left:20px;
`

const Profile = (props) => {

    const [open,setOpen]=useState(false)

    const HandleClick=(event)=>{
        setOpen(event.currentTarget)
    };

    const handleClose=()=>{
        setOpen(false)
    };

    const LogoutHandler =()=>{
        props.setAccount('')
    }
  return <>
    <Box onClick={ HandleClick}><Typography style={{marginTop:2,cursor:'pointer'}}>{props.account}</Typography></Box>
    <Component
      
        anchorEl={open}
        open={Boolean(open)}
        onClose={()=>handleClose()}
       
      >
        <MenuItem onClick={()=>{handleClose();LogoutHandler()}}>
            <PowerSettingsNewIcon color="primary" fontSize="small"/>
            <Logout>Logout</Logout>
        </MenuItem>
        
      </Component>
    </>
  
}

export default Profile