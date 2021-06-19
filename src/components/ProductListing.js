import { useEffect,useState } from 'react';
import useData from '../custom-hook/useData'
import EachProduct from './EachProduct';

const ProductListings = () => {

const data=useData()
//this should return after data is fetched


 console.log('from PRODUCT',data)
 //data.map((i)=>{console.log('map id',i.id)})

    if(data===undefined){
        return (<div> 
            loading.. 
            </div>)
    } 

    else if(data!==undefined){
        return(
            <div className='productlistings'>
                product listings
                <EachProduct/>
                {data?.map((i)=>{
                    <EachProduct 
                    id={i.id}
                    category={i.category}
                    image={i.image}
                    price={i.price}
                    title={i.title}
                    /> 
                })} 
                 </div> 
        )
    }
          
       
}
 
export default ProductListings;