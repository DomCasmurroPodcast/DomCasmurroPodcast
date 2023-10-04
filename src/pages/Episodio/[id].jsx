import { useRouter } from "next/router";
import episodios from "@/utils/episodios";
import returnSrc from "@/utils/returnSrc";
import styles from "@/styles/Episodio.module.scss";
import { useState } from "react";

export async function getServerSideProps(context) {
  return {
      props: {},
  };
}

export default function Page() {
  const router = useRouter();
  const episodio = episodios[router.query.id - 1];
  const src = returnSrc(episodio.audioSrc);
  const [podeCarregar, setPodeCarregar] = useState(false);
  const [audioClicked, setAudioClicked] = useState(false);
  
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

        {(audioClicked && !podeCarregar) && //Aqui deve botar uma animação de loading enquanto o audio carrega
        <div>
          <p>O Audio está carregando, espere um momento!</p>
        </div>}

        <audio 
        onPlay={()=>{ 
          //console.log("Foi clicado");
          if(!audioClicked)setAudioClicked(true);
        }}
        onCanPlayThrough={()=> setPodeCarregar(true)} 
        className={styles.player} 
        controls 
        preload="none">
            <source src={src} type="audio/mp3" />
        </audio>
      </>
    );
  }
}
