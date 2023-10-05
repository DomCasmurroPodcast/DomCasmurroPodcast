import EpisodioButton from "@/components/EpisodioButton";
import styles from "@/styles/Home.module.scss";
import episodios from "@/utils/episodios";
import Link from "next/link";
import SearchBar from "@/components/SearchBar";
import SearchResults from "@/components/SearchResults";
import { useState } from "react";
import Cabecalho from "@/components/cabecalho";
import Rodape from "@/components/rodape";


export default function Home() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
    {/*Exemplo do joão de como usar o map e os componentes SearchBar e SearchResults
        <SearchBar exportValue={setSearchValue}/>

        <h2>Todos Episódios:</h2>
        <ul>
          {episodios.map((episodio, index) => (
            <li key={episodio.id}>
              <Link className={styles.episodioLink} href={`/Episodio/${episodio.id}`}>
                <EpisodioButton 
                key={index} 
                nome={episodio.nome} 
                capitulos={episodio.capitulos}  
                alunos={episodio.alunos}/>
              </Link>
              </li>
            
          ))}
        </ul>

        <h2>Episódios pesquisados:</h2>
        <SearchResults searchValue={searchValue} />

      </div>
      */}

    <Cabecalho />
    <Rodape />
    </>
  );
}
