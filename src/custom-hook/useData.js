import {useEffect,useState} from 'react'

const useData=()=>{
    const [data,setData]=useState()
    
    useEffect(()=>{
        // const response =await fetch('https://fakestoreapi.com/products')
        // const products = await response.json();
        // setData(products)

        fetch('https://fakestoreapi.com/products')
        .then((res)=>{return res.json()})
        .then((data)=>setData(data))
    },[])

    console.log('data outside useeffect is ',data)

    return {data} 

    //this is returning data even when it hasn't been fetched 
}

export default useData