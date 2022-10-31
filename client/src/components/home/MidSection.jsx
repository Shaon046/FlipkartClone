import { styled } from '@mui/material';
import Grid from '@mui/material/Grid';
import React from "react";
import { imageURL } from "../../constants/data";


const Wrapper=styled(Grid)`
margin-top: 10px;
justify-content:space-between;`

const Image=styled('img')({
    marginTop:10,
    width: '100%',
    display:'flex',
    justifyContent:'space-between'
})

const MidSection = () => {
  return (
    <Wrapper lg={12} sm={12} md={12} xs={12} style={{ display: "flex" }}>
      {imageURL.map((image) => (
        <Grid lg={4} md={4} sm={12} xs={12}>
        <Image src={image} alt="img" key={image} style={{ width: "100%" }} />
        </Grid>
      ))}
    </Wrapper>
  )
};

export default MidSection;
