import { useContext } from "react";
import {Data} from '../context/context'
import useData from '../custom-hook/useData'

const Filter = () => {

    const [data,setData]=useContext(Data)

    const [alldata,setallData]=useData()
    const clearFilter=()=>{
        setData(alldata)
    }


   //logic to get distinct brands and generate checkbox for them
    
    const mens=(e)=>{
        if(data!==undefined && e.target.checked===true){
            const mensarr= data.filter((i)=>{return (i.category==="men's clothing")})
            console.log('mensarr',mensarr)
            setData(mensarr)
        }
        else if(e.target.checked===false){
            setData(alldata)
        }
    }

    const womens=(e)=>{
        if(data!==undefined && e.target.checked===true){
            const womensarr= data.filter((i)=>{return (i.category==="women's clothing")})
            console.log('womensarr',womensarr)
            setData(womensarr)
        }
        else if(e.target.checked===false){
            setData(alldata)
        }
    }

    const jewel=(e)=>{
        if(data!==undefined && e.target.checked===true){
            const jewelsarr= data.filter((i)=>{return (i.category==="jewelery")})
            console.log('jewelsarr',jewelsarr)
            setData(jewelsarr)
        }
        else if(e.target.checked===false){
            setData(alldata)
        }
    }

    const electronics=(e)=>{
        if(data!==undefined && e.target.checked===true){
            const electronicsarr= data.filter((i)=>{return (i.category==="electronics")})
            console.log('electronicsarr',electronicsarr)
            setData(electronicsarr)
        }
        else if(e.target.checked===false){
            setData(alldata)
        }
    }

    
    const small=(e)=>{
        if(data!==undefined && e.target.checked===true){
            console.log(e)
            const sarr=data.filter((i)=>{return (i.size.includes("S"))})
            setData(sarr)
        }
        else if(e.target.checked===false){
            setData(alldata)
        }
    }

    const medium=(e)=>{
        if(data!==undefined && e.target.checked===true){
            console.log(e)
            const sarr=data.filter((i)=>{return (i.size.includes("M"))})
            setData(sarr)
        }
        else if(e.target.checked===false){
            setData(alldata)
        }
    }

    const large=(e)=>{
        if(data!==undefined && e.target.checked===true){
            console.log(e)
            const sarr=data.filter((i)=>{return (i.size.includes("L"))})
            setData(sarr)
        }
        else if(e.target.checked===false){
            setData(alldata)
        }
    }

    const nike=(e)=>{
        if(data!==undefined && e.target.checked===true){
            const nikearr= data.filter((i)=>{return (i.brand==="Nike")})
             setData(nikearr)
        }
        else if(e.target.checked===false){
            setData(alldata)
        }
    }

    const adidas=(e)=>{
        if(data!==undefined && e.target.checked===true){
            const nikearr= data.filter((i)=>{return (i.brand==="Adidas")})
            setData(nikearr)
        }
        else if(e.target.checked===false){
            setData(alldata)
        }
    }

    const tanishq=(e)=>{
        if(data!==undefined && e.target.checked===true){
            const nikearr= data.filter((i)=>{return (i.brand==="Tanishq")})
            setData(nikearr)
        }
        else if(e.target.checked===false){
            setData(alldata)
        }
    }

    const alankar=(e)=>{
        if(data!==undefined && e.target.checked===true){
            const nikearr= data.filter((i)=>{return (i.brand==="Alankar")})
            setData(nikearr)
        }
        else if(e.target.checked===false){
            setData(alldata)
        }
    }


    return ( <div className='filter'>
          <h2>Filters</h2>
          <button onClick={clearFilter}>Clear Filter</button>
          
          <div><h2>Category</h2>
         <label><input type="checkbox" onClick={mens} /> Men</label> 
         <label> <input type="checkbox"onClick={womens}/> Women  </label> 
         <label><input type="checkbox" onClick={jewel}/> Jewellery </label> 
         <label><input type="checkbox" onClick={electronics}/> Electronics</label> 
          </div>
          
          <h2>Size</h2>
          <label><input 
           type="checkbox"
           onClick={small}/>
           S</label>

          <label><input type="checkbox"
          onClick={medium}/>M</label>
          <label><input type="checkbox"
          onClick={large}/>L</label>
          
          <h2>Brand</h2>
          <label><input type='checkbox'
          onClick={nike}
          />Nike</label>

          <label><input type='checkbox'
          onClick={adidas}
          />Adidas</label>

          <label><input type='checkbox'
          onClick={tanishq}
          />Tanishq</label>

          <label><input type='checkbox'
          onClick={alankar}
          />Alankar</label>
          
        </div> );
}
 
export default Filter;