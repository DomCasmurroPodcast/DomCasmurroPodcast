import styles from "@/styles/Home.module.scss";
import EpisodioButton from "@/components/EpisodioButton";
import episodios from "@/utils/episodios";
import Link from "next/link";
import SearchBar from "@/components/SearchBar";
import SearchResults from "@/components/SearchResults";
import { useRef, useState } from "react";
import Image from "next/image";

export default function Home() {
  const ref = useRef(null)
  const [searchValue, setSearchValue] = useState("");

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className={styles.bodyContainer}>
        <div className={styles.firstView}>
          <h1>
            Dom Casmurro
            <br />
            Podcast
          </h1>
          <div className={styles.scroll} onClick={handleClick}></div>
        </div>

        <div ref={ref} className={styles.mainContent}>
          <SearchBar
            className={styles.searchBarHome}
            exportValue={setSearchValue}
          />

          <div className={styles.episodios}>
            {searchValue == "" && (
              <div className={styles.todosEpisodios}>
                <h3>Todos Episódios:</h3>
                <div className={styles.todosEpisodios_list}>
                  {episodios.map((episodio, index) => (
                    <div
                      key={episodio.nome}
                      className={styles.episodioButton_container}
                    >
                      <Link
                        className={styles.linkEpButton}
                        href={`/Episodio/${episodio.id}`}
                      >
                        <EpisodioButton
                          nome={episodio.nome}
                          capitulos={episodio.capitulos}
                          alunos={episodio.alunos}
                        />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {searchValue != "" && (
              <div className={styles.resultadosPesquisa}>
                <SearchResults searchValue={searchValue} />
              </div>
            )}
          </div>
        </div>

        <div className={styles.footer}>
          <p>Sed ullamcorper nunc in viverra tempus. Ut consectetur libero ac ipsum efficitur, sed bibendum nisi tincidunt. Quisque pretium elit quis nisi consectetur faucibus. Duis ac purus non risus faucibus maximus. Proin egestas, sapien eu hendrerit hendrerit, erat magna bibendum eros, vitae scelerisque erat turpis quis metus. Quisque in metus dui. Ut at efficitur tellus. Nulla malesuada ante diam, eu suscipit mauris consectetur sit amet. Aenean neque est, accumsan non elementum vel, blandit et purus. Duis eu vehicula mi, a dictum sem. Etiam mauris velit, eleifend vitae porttitor eu, sagittis sit amet sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec vel pharetra nibh. Donec ac accumsan tortor. Sed ut suscipit augue, ac tincidunt quam. Vivamus vitae dui interdum, mattis eros vitae, euismod urna.</p>
          <Link title="Veja código da página no GitHub" className={styles.gitHub_link} href="https://github.com/DomCasmurroPodcast/DomCasmurroPodcast.github.io">
            <Image className={styles.gitHub_image} src="/imgs/GitHub_Logo.png" width={100} height={50} alt="Veja código no GitHub"/>
            
          </Link>
        </div>
      </div>
    </>
  );
}
