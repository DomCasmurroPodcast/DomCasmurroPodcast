import { useRouter } from "next/router";
import episodios from "@/utils/episodios";
import returnSrc from "@/utils/returnSrc";
import styles from "@/styles/Episodio.module.scss";

export default function Page() {
  const router = useRouter();
  const episodio = episodios[router.query.id - 1];
  const src = returnSrc(episodio.audioSrc);

  if (router.query.id > episodios.length) {
    return <h1>Erro, esta pagina não existe</h1>;
  } else {
    return (
      <>
        <h1>Pagina {router.query.id}</h1>

        <h2>{episodio?.nome}</h2>
        <p>Alunos: {episodio?.alunos}</p>
        <p>Turma: {episodio?.turma}</p>
        <p>
          Descricao: <br />
          {episodio?.descricao}
        </p>

        <audio className={styles.player} controls preload="none">
            <source src={src} type="audio/mp3" />
        </audio>
      </>
    );
  }
}
