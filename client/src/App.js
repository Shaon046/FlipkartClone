import { Box } from "@mui/system";
import "./App.css";
import { BrowserRouter, Routes,Route } from "react-router-dom";
//components
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import DetailView from "./components/details/DetailView";
import Cart from "./components/cart/Cart";

//context API
import DataProvider from "./context/DataProvider";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box style={{ marginTop: 54 }}>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='product/:id' element={<DetailView />} />
            <Route path='/cart' element={<Cart/>} />
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

// function App() {
//   return <DataProvider>
//   <Home />
//   <Header /> </DataProvider>
// }

export default App;
