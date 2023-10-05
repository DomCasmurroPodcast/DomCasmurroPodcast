import { useRouter } from "next/router";
import episodios from "@/utils/episodios";
import returnSrc from "@/utils/returnSrc";
import styles from "@/styles/Episodio.module.scss";
import { useState } from "react";
import EpisodioButton from "@/components/EpisodioButton";
import Link from "next/link";

export async function getServerSideProps(context) {
  return {
      props: {},
  };
}

export default function Page() {
  const router = useRouter();
  const episodio = episodios[router.query.id - 1];
  const episodioAnterior = episodios[router.query.id - 2];
  const episodioProximo = episodios[router.query.id];
  const src = returnSrc(episodio.audioSrc);
  const [podeCarregar, setPodeCarregar] = useState(false);
  const [audioClicked, setAudioClicked] = useState(false);
  
  if (router.query.id > episodios.length) {
    return <h1>Erro, esta pagina não existe</h1>;
  } else {
    return (
      <>
        <div className={styles.titleContainer}>
          <h1>Dom Casmurro Podcast</h1>
          <h2>{episodio?.nome}</h2>
          <h3>Capítulos {episodio?.capitulos}</h3>
        </div>
        {/* <p>Turma: {episodio?.turma}</p>
        <p>
          Descricao: <br />
          {episodio?.descricao}
        </p> */}

        <div className={styles.content}>

          <audio 
          onPlay={()=>{ 
            //console.log("Foi clicado");
            if(!audioClicked)setAudioClicked(true);
          }}
          onCanPlayThrough={()=> setPodeCarregar(true)} 
          className={styles.audioPlayer} 
          controls 
          preload="none">
              <source src={src} type="audio/mp3" />
          </audio>

          {(audioClicked && !podeCarregar) && //Aqui deve botar uma animação de loading enquanto o audio carrega
          <div className={styles.loading}>
            <div className={styles.ldsRing}><div></div><div></div><div></div><div></div></div>
            <p>Espere um pouquinho, a áudio já vai carregar</p>
          </div>
          }

          <div className={styles.informacoes}>
            <p className={styles.alunos}><b>Alunos: </b>{episodio?.alunos}</p>
            <p className={styles.alunos}><b>Turma: </b>{episodio?.turma} informática</p>
          </div>

          <p className={styles.descricao}>
            <b>Descrição:</b><br/>
            {episodio?.descricao}
          </p>

          <div className={styles.footer}>


            <div className={`${styles.epAnterior_container} ${
              router.query.id == 1 ? styles.none : null 
              //Condicional pra aparecer apenas quando não é o primeiro ep, talvez seja bom mudar
            }`}>
              <p>Episódio Anterior:</p>
              <Link className={styles.link} href={`/Episodio/${episodioAnterior?.id}`}>
                <EpisodioButton
                  nome={episodioAnterior?.nome}
                  capitulos={episodioAnterior?.capitulos}
                  alunos={episodioAnterior?.alunos}
                  key={episodioAnterior?.nome}/>
              </Link>
            </div>
            


          </div>

        </div>
      </>
    );
  }
}
