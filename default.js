import { products } from "./constants/data.js"
import product from "./schema/product.schma.js";
import Product from "./schema/product.schma.js"

const DefaultData=async ()=>{
    try{
       await Product.insertMany( products);
        console.log('Data imported successfully')
    }
    catch(error){
console.log(`Error while incerting data :-${error}`)
    }
}

export default DefaultData;