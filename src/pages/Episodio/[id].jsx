import { useRouter } from "next/router";
import episodios from "@/utils/episodios";
import returnSrc from "@/utils/returnSrc";
import styles from "@/styles/Episodio.module.scss";
import { useState, useEffect } from "react";
import EpisodioButton from "@/components/EpisodioButton";
import Button from "@/components/Button";
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
  const [windowWidth, setWindowWidth] = useState();
  
  const [podeCarregar, setPodeCarregar] = useState(false);
  const [audioClicked, setAudioClicked] = useState(false);

  useEffect(()=>{
    setWindowWidth(window.innerWidth);
  },[])
  
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
            <p className={styles.turma}><b>Turma: </b>{episodio?.turma} informática</p>
          </div>

          <p className={styles.descricao}>
            <b>Descrição:</b><br/>
            {episodio?.descricao}
          </p>

          <div className={styles.footer}>


           {!(router.query.id==1) && (windowWidth)>700 &&  
           <div className={styles.epAnterior}>
              <p>Episódio Anterior:</p>
              <Link className={styles.linkEp} href={`/Episodio/${episodioAnterior?.id}`}>
                <EpisodioButton
                  nome={episodioAnterior?.nome}
                  capitulos={episodioAnterior?.capitulos}
                  alunos={episodioAnterior?.alunos}
                  />
              </Link>
            </div>}
            
            {!(router.query.id==1) && (windowWidth)<700 &&  
           <div className={styles.epAnterior}>
              <p>Episódio Anterior:</p>
              <Link className={styles.linkEp} href={`/Episodio/${episodioAnterior?.id}`}>
                <Button text="" className={styles.epButton}>
                <svg width="23" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.900025 11.5L19.8 0.588078L19.8 22.4119L0.900025 11.5Z" fill="#193441"/>
                </svg>
                </Button>
              </Link>
            </div>}
          
            {!(router.query.id==episodios.length) && (windowWidth)>700 &&
            <div className={styles.epProximo}>
              <p>Próximo episódio:</p>
              <Link className={styles.linkEp} href={`/Episodio/${episodioProximo?.id}`}>
                <EpisodioButton
                  nome={episodioProximo?.nome}
                  capitulos={episodioProximo?.capitulos}
                  alunos={episodioProximo?.alunos}
                  />
              </Link>
            </div>
            }

            {!(router.query.id==episodios.length) && (windowWidth)<700 &&
              <div className={styles.epProximo}>
                <p>Próximo episódio:</p>
                <Link className={styles.linkEp} href={`/Episodio/${episodioProximo?.id}`}>
                  <Button text="">
                  <svg width="23" height="23" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.315 11.5L0.585797 22.4119L0.585798 0.588081L18.315 11.5Z" fill="#193441"/>
                  </svg>

                </Button>
                </Link>
              </div>
            }

            <Link className={styles.linkBtn} href={`/`}>
              <Button className={styles.button} text="Voltar a todos episódios">
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.5 7V11L2.5 6L8.5 1V5H13.5C15.6217 5 17.6566 5.84285 19.1569 7.34315C20.6571 8.84344 21.5 10.8783 21.5 13C21.5 15.1217 20.6571 17.1566 19.1569 18.6569C17.6566 20.1571 15.6217 21 13.5 21H4.5V19H13.5C15.0913 19 16.6174 18.3679 17.7426 17.2426C18.8679 16.1174 19.5 14.5913 19.5 13C19.5 11.4087 18.8679 9.88258 17.7426 8.75736C16.6174 7.63214 15.0913 7 13.5 7H8.5Z" fill="black"/>
              </svg>
              </Button>
            </Link>

          </div>

        </div>
      </>
    );
  }
}
