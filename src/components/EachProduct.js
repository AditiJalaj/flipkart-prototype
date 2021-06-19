const EachProduct = ({ id, category, image,price,title,size,brand
}) => {
    return ( <div className='each' > 
         
        <img src={image} alt={image}/>
        <h2>{title}</h2>
        <div>
        <h4>{price}$</h4>
        <h4>{brand}</h4>
        {size && size.map((i)=>{return <span> {i} </span>})}
        
        </div>
        
        </div> );
}
 
export default EachProduct;