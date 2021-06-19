import {useEffect,useState} from 'react'

const useData=()=>{
    const [data,setData]=useState()
    
    useEffect(()=>{
        fetch('http://localhost:3000/data.json')
        .then((res)=>{return res.json()})
        .then((data)=>setData(data))
    },[])
    
    return [data,setData] 
    
}

export default useData