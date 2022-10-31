import React from "react";
import { Typography, Box, styled, Table, TableRow } from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

//import table

import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";

const SmallText = styled(Box)`
  font-size: 14px;
  vertical-align:baseline;
  & > p {
    font-size: 14px;
    margin-top: 10px;
  }
`;

const StyledBadge = styled(LocalOfferIcon)`
  margin-right: 10px;
  color: #00cc00;
  font-size: 15px;
`;


const ColumnText=styled(TableRow)`
font-size:14px;
vertical-align:baseline;
& > td:{
    font-size:14px;
    margin-top:10px;
    border:none;
}

`



const date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);

const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

const fassured =
  "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

const ProductDetail = ({ product }) => {
  return (
    <>
      <Typography>{product.title.longTitle}</Typography>
      <Typography style={{ marginTop: 5, color: "#878787", fontSize: 14 }}>
        3 ratings & 1 review
        <Box component="span">
          <img
            src={fassured}
            alt="fassured"
            style={{ width: 77, marginLeft: 20 }}
          />{" "}
        </Box>
      </Typography>
      <Typography>
        <Box component="span" style={{ fontSize: 28 }}>
          ₹{product.price.cost}
        </Box>
        &nbsp;
        <Box component="span" style={{ color: "#878787" }}>
          <strike> ₹{product.price.mrp}</strike>
        </Box>
        &nbsp;
        <Box component="span" style={{ color: "#388E8C" }}>
          {product.price.discount}
        </Box>
      </Typography>

      <Typography>
        <StyledBadge />
        Available offers{" "}
      </Typography>
      <SmallText>
        <Typography>
          <StyledBadge />
          Flipkart Pay Later?
        </Typography>
        <Typography>
          <StyledBadge />
          Bank Offer5% Cashback on Flipkart Axis Bank CardT&C
        </Typography>
        <Typography>
          <StyledBadge />
          Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card
          worth upto ₹1000*
        </Typography>
        <Typography>
          <StyledBadge />
          Partner OfferBuy this product and get upto ₹500 off on Flipkart
          Furniture T&C
        </Typography>
      </SmallText>

      <Table>
        <TableBody>
          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Delivery</TableCell>
            <TableCell style={{ fontWeight: 600 }}>
              Delivery by {date.toDateString()} | ₹40{" "}
            </TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Warranty</TableCell>
            <TableCell style={{ fontWeight: 600 }}>1 year Warranty </TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell style={{ color: "#878787" }}>seller</TableCell>
            <TableCell>
              <Box component="span" style={{ color: "#287480" }}>
                SBtraders{" "}
              </Box>{" "}
              <Typography>
                7 day seller replacement policy/brand assistance for device
                issues*
              </Typography>
              <Typography>GST invoice available</Typography>
            </TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell colSpan={2}><img src={adURL} alt="img" style={{width:390}}/></TableCell>
            
          </ColumnText>
          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Description</TableCell>
            <TableCell style={{ fontWeight: 600 }}>{product.description} </TableCell>
          </ColumnText>
        </TableBody>
      </Table>
    </>
  );
};

export default ProductDetail;
