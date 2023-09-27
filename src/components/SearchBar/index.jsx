import { useState } from "react"
import styles from "./SearchBar.module.scss"

export default function SearchBar({exportValue, ...props}){
    
    const [value, setValue] = useState("");
    //O exportValue, deve receber um setState para passar o valor para o componente parente
    const handleOnChange = (e)=>{
        setValue(e.target.value)
        if(exportValue)exportValue(e.target.value)
    } 


    return(

        <input 
            placeholder="Pesquise um episódio" 
            type="text" 
            value={value} 
            onChange={(e)=>handleOnChange(e)}
            //onClick={()=>console.log(value)}
            {...props}/>
    )
}