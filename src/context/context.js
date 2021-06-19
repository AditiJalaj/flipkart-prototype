import { createContext } from "react";
import useData from '../custom-hook/useData'

const Data=createContext()

const Context = (props) => {
    
    const [data,setData]=useData()

    return (
        <Data.Provider 
        value={[data,setData]}>
        {props.children}
        </Data.Provider> 
         );
}
 
export default Context;
export {Data}
