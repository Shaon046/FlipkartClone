import React from "react";
import { InputBase, Box, styled, List, ListItem } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useState,useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { getProduct } from "../../redux/actions/productAction";
import { Link } from "react-router-dom";

const SearchContainer = styled(Box)`
  background: #fff; 
  width: 38%;
  margin-left:5%;
  border-radius: 2px;
  display: flex;
`;
const InputSearchBase = styled(InputBase)`
font-size: unset;
width: 100%;
padding-left: 20px;`;

const SearchIconWraper=styled(Box)`
color: blue;
padding: 5px;
display:flex;
`


const ListWrapper=styled(List)`
position:absolute;
background:white;
color:#000;
margin-top:36px;
`

const Search = () => {

const [text,setText]= useState('')

const {product}=useSelector(state=>state.getProducts);


const dispatch=useDispatch()

useEffect(()=>{
  dispatch(getProduct)
},[dispatch])



const getText=(text)=>{
setText(text)
}


  return (
   
      <SearchContainer>
        <InputSearchBase placeholder="Search for products"  onChange={(e)=>getText(e.target.value)}/>
        <SearchIconWraper >
          <SearchIcon/>
        </SearchIconWraper>

        {
          text &&
          <ListWrapper>
            {
            product.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map((product)=><ListItem>
              <Link to={`/product/${product.id}`}
              onClick={()=>setText('')}
              style={{textDecoration:"none" ,color:"inherit"}}
              >
              {product.title.longTitle}
              </Link>
              
              </ListItem>)

}
        </ListWrapper>
        }
      </SearchContainer>
    
  );
};

export default Search;
