import Link from "next/link";
import styles from "./SearchResults.module.scss"
import episodios from "@/utils/episodios";


export default function SearchResults({searchValue,...props}){

    
    
    return(
        <>
        {/*resultado em nome de episodio*/}

        <h3>Por nome:</h3>
        <ul>
            <div>
                {episodios.map((episodio, index)=>{
                if(episodio.nome.toUpperCase().includes(searchValue.toUpperCase())) return(
                    <li key={episodio.id}> <Link href={`/Episodio/${episodio.id}`}>{episodio.nome}</Link></li>
                )
                })}
            </div>
        </ul>

        <h3>Por alunos:</h3>
        <ul>
            <div>
                {episodios.map((episodio, index)=>{
                if(episodio.alunos.toUpperCase().includes(searchValue.toUpperCase())) return(
                    <li key={episodio.id}> <Link href={`/Episodio/${episodio.id}`}>{episodio.nome}</Link></li>
                )
                })}
            </div>
        </ul>

        <h3>Por capitulos:</h3>
        <ul>
            <div>
                {episodios.map((episodio, index)=>{
                if(episodio.capitulos.toUpperCase().includes(searchValue.toUpperCase())) return(
                    <li key={episodio.id}> <Link href={`/Episodio/${episodio.id}`}>{episodio.nome}</Link></li>
                )
                })}
            </div>
        </ul>
        </>
    )
}