import EachProduct from "./EachProduct";
import { useState,useContext } from "react";

import {Data} from '../context/context'

const ProductListings = () => {
 
    const [data,setData]=useContext(Data)
//console.log('TYPE OF DATA ',typeof data, typeof setData)
  
//put a state to re render the UI on sort button 
  const [sorted, setSorted] = useState(false);

  const sortltoh = () => {
    setData(data.sort((a, b) => parseFloat(a.price) - parseFloat(b.price)));
    setSorted(!sorted);
   // console.log("data arr after sort LTOH", data);
  };

  const sorthtol = () => {
    if (data !== undefined) {
      setData(data.sort((a, b) => parseFloat(b.price) - parseFloat(a.price)));
      setSorted(!sorted);
     // console.log("data arr after sort HIGH TO LOW", data);
    }
  };

  if (data === undefined) {
    return <div>loading..</div>;
  } else if (data !== undefined || data !== null) {
    return (
      <div className="productlistings">
      <h4>Sort By</h4>
        <button onClick={sorthtol}> Sort High to Low</button>
        <button onClick={sortltoh}> Sort Low to High</button>
        <h1>PRODUCT LIST</h1>
        <div className="flx">
        {data.map((i) => {
          return (
            <EachProduct
              key={i.id}
              id={i.id}
              title={i.title}
              image={i.image}
              price={i.price}
              category={i.category}
              size={i.size}
              brand={i.brand}
            />
          );
        })}
        </div>
      </div>
    );
  }
};

export default ProductListings;
