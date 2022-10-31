import React from "react";
import { useEffect } from "react";
//Component
import Navbar from "./Navbar";
import Banner from "./Banner";
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";
import { Box, styled } from "@mui/material";
import { getProduct } from "../../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import Slide from "./Slide";
const Component = styled(Box)`
  padding: 10px 10px;
  background: #f1f3f6;
`;

const Home = () => {
  const { product } = useSelector((state) => state.getProducts);

  console.log(product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Component>
        <Banner />
        <MidSlide product={product} title="Deal of the Day" timer={true} />
        <MidSection/>
        <Slide product={product} title="Discounts for You" timer={false} />
        <Slide product={product} title="Suggested Items" timer={false} />
        <Slide product={product} title="Top Selection" timer={false} />
        <Slide product={product} title="Recommended Items" timer={false} />
        <Slide product={product} title="Tranding Offer" timer={false} />
        <Slide product={product} title="Season's top pick" timer={false} />
        <Slide
          product={product}
          title="Top Deals on Accessories"
          timer={false}
        />
      </Component>
    </>
  );
};

export default Home;
