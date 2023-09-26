import { useRouter } from "next/router";
import episodios from "@/utils/episodios";

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
        <h1 onClick={()=>console.log(id)}>Pagina {router.query.id}</h1>

        <h2>{episodio?.nome}</h2>
        <p>Alunos: {episodio?.alunos}</p>
        <p>Turma: {episodio?.turma}</p>
        <p>
          Descricao: <br />
          {episodio?.descricao}
        </p>

        {/* <iframe
          frameborder="0"
          width="800"
          height="100"
          src={episodio?.audioSrc}>
        </iframe> */}



        {/*
        Link do site que contém a maneira que faremos:
        https://travis.media/embed-google-drive-audio-html*/}

        {/*
        Link que vai ser utilizado como teste:
        https://drive.google.com/file/d/14tGZGBq3TToC77FeQs-PlqHq4cfLWnlL/view?usp=sharing*/}
        <audio class="player" controls preload="none">
            <source src="https://drive.google.com/uc?export=open&id=14tGZGBq3TToC77FeQs-PlqHq4cfLWnlL" type="audio/mp3" />
        </audio>

      </>
    );
  }
}
