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
          <p>Este projeto de ensino visa trabalhar/apresentar o gênero Podcast contextualizado a partir de uma atividade de retextualização de um clássico da Literatura Brasileira, o livro do Realismo literário, Dom Casmurro de Machado de Assis. O projeto foi realizado com os alunos do 2º A e B do Curso Técnico Integrado em Informática (Ensino Médio), turnos da manhã e tarde, do Instituto Federal de Educação, Ciência e Tecnologia de Rondônia, campus Vilhena, situado na BR-174, Km 3 S/n - Zona Urbana, Vilhena.</p>
          

          <div className={styles.github_text}>
          <p>Veja o código da página <Link title="Veja código da página no GitHub" className={styles.gitHub_link} href="https://github.com/DomCasmurroPodcast/DomCasmurroPodcast.github.io">
            aqui
            {/* <Image className={styles.gitHub_image} src="/imgs/GitHub_Logo.png" width={100} height={50} alt="Veja código no GitHub"/> */}
          </Link></p>
          </div>
        </div>
      </div>
    </>
  );
}
