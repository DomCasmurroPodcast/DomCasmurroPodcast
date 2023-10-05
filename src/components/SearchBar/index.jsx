import { useEffect, useState } from "react"
import styles from "./SearchBar.module.scss"
import Image from "next/image";

export default function SearchBar({exportValue, ...props}){
    
    const [value, setValue] = useState("");
    const [svgSize, setSvgSize] = useState(36)
    //O exportValue, deve receber um setState para passar o valor para o componente parente
    const handleOnChange = (e)=>{
        setValue(e.target.value)
        if(exportValue)exportValue(e.target.value)
    }

    useEffect(() => {
        if(window.innerWidth < 600) setSvgSize(21)//Tela mobile =  icone de pesquisa menor, essa pra tu tião com a responsividade
        
      }, []);

    return(


        <div className={styles.container}>
            <div className={styles.searchSvg}>
            <svg xmlns="http://www.w3.org/2000/svg" height={svgSize} viewBox="0 -960 960 960" width={svgSize}><path fill="#263942;" d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
            </div>
            <input
                className={styles.searchBar}
                placeholder="Pesquise um episódio" 
                type="text" 
                value={value} 
                onChange={(e)=>handleOnChange(e)}
                //onClick={()=>console.log(value)}
                {...props}/>
        </div>
                
    )
}