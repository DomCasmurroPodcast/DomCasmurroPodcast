import { useRouter } from "next/router";
import episodios from "@/utils/episodios";
import styles from "@/styles/Episodio.module.scss";

export default function Page() {
  const router = useRouter();
  const episodio = episodios[router.query.id - 1];

  //Pegar o Id do link de compartilhamento do drive | (talvez tenha que mudar pq nem todo link seja igual)
  //const id = episodio.audioSrc.substring(32, 65)
  //const url = "https://docs.google.com/uc?export=open&id=" + id //Aqui transforma em um link de fato utilizavel na nossa maneira

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

        {/*
        Link do site que contém a maneira que faremos:
        https://travis.media/embed-google-drive-audio-html*/}

        {/*
        Pelo que tudo aparenta, certos audios não rodam nessa maneira ☝
        A teoria é que isso se dá pelo fato de certos audios serem grandes demais e o drive não consegue verificar virus
        "Google Drive does not scan files larger than 100 MB[...]"
        
        */}

        <audio className={styles.player} controls preload="none">
            <source src="https://drive.google.com/uc?export=open&id=1f5-Y8tTafqdSFwrRJAyNOwBHYT4YH8gk" type="audio/mp3" />
        </audio>
        

        {/*Exemplo pego do site 👇 */}
        {/* <audio className={styles.player} controls preload="none">
          <source src="https://docs.google.com/uc?export=open&id=13s1pwgpWZAbpwYgaFa_MgdxiKGOILCtX" type="audio/mp3" /> 
        </audio> */}
      </>
    );
  }
}
