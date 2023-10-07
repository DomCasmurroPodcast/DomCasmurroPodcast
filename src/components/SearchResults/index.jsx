import Link from "next/link";
import styles from "./SearchResults.module.scss";
import episodios from "@/utils/episodios";
import { useState } from "react";
import EpisodioButton from "../EpisodioButton";

export default function SearchResults({ searchValue, ...props }) {
  const [haveNmResults, setHaveNmResults] = useState(false);
  const [haveAlResults, setHaveAlResults] = useState(false);
  const [haveCapResults, setHaveCapResults] = useState(false);

  return (
    <>
      {/*resultado em nome de episodio*/}

      <div className={styles.results}>
        {haveNmResults && <h3>Por número do episódio:</h3>}

        <div>
          {episodios.map((episodio, index) => {
            if (
              episodio.nome.toUpperCase().includes(searchValue.toUpperCase())
            ) {
              if (!haveNmResults) setHaveNmResults(true);
              return (
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
              );
            }
          })}
        </div>
      </div>

      <div className={styles.results}>
        {haveAlResults && <h3>Por nome dos alunos:</h3>}

        <div>
          {episodios.map((episodio, index) => {
            if (
              episodio.alunos.toUpperCase().includes(searchValue.toUpperCase())
            ) {
              if (!haveAlResults) setHaveAlResults(true);
              return (
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
              );
            }
          })}
        </div>
      </div>

      <div className={styles.results}>
        {haveCapResults && <h3>Por número dos capítulos:</h3>}

        <div>
          {episodios.map((episodio, index) => {
            if (
              episodio.capitulos
                .toUpperCase()
                .includes(searchValue.toUpperCase())
            ) {
              if (!haveCapResults) setHaveCapResults(true);
              return (
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
              );
            }
          })}
        </div>
      </div>
    </>
  );
}
