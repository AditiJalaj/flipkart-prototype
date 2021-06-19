const EachProduct = ({ id, category, image,price,title
}) => {


    console.log('title',title)
    
    return ( <div className='each' > 
         am i rendering
        <img src={image} alt={image}/>
        <h2>{title}</h2>
        </div> );
}
 
export default EachProduct;