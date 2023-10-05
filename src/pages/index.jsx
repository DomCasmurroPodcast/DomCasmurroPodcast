import EpisodioButton from "@/components/EpisodioButton";
import styles from "@/styles/Home.module.scss";
import episodios from "@/utils/episodios";
import Link from "next/link";
import SearchBar from "@/components/SearchBar";
import SearchResults from "@/components/SearchResults";
import { useState } from "react";

export default function Home() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <div className={styles.homeContainer}>
        <h1 className={styles.titulo}>Dom Casmurro Podcast</h1>

        <p className={`${styles.texto} ${styles.marginTop2rem}`}>
          Por enquanto não temos nada por aqui :(
          <br /> mas espere logo log teremos um incrível podcast para você ouvir!
        </p>

        <p className={`${styles.textoDev} ${styles.marginTop2rem}`}>
          Parte de teste para os desenvolvedores
        </p>
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
    </>
  );
}
