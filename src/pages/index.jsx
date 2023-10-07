import styles from "@/styles/Home.module.scss";
import EpisodioButton from "@/components/EpisodioButton";
import episodios from "@/utils/episodios";
import Link from "next/link";
import SearchBar from "@/components/SearchBar";
import SearchResults from "@/components/SearchResults";
import { useState } from "react";


export default function Home() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <div classname={styles.bodyContainer}>
        <div className={styles.firstView}>
          <h1>Dom Casmurro<br/>Podcast</h1>
          <div className={styles.scroll}></div>
        </div>
      </div>

      <div className={styles.mainContent}>
        
        
          <SearchBar className={styles.searchBarHome} exportValue={setSearchValue}/>
        


      </div>
    </>
  );
}
