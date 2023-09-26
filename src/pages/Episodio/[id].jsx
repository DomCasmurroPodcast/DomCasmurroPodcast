import { useRouter } from "next/router";
import episodios from "@/utils/episodios";

export default function Page() {
  const router = useRouter();
  const episodio = episodios[router.query.id - 1];

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

        {/* <iframe
          frameborder="0"
          width="800"
          height="100"
          src={episodio?.audioSrc}>
        </iframe> */}



        {/*https://travis.media/embed-google-drive-audio-html*/}
        <audio class="player" controls preload="none">
            <source src="https://docs.google.com/uc?export=open&id=14tGZGBq3TToC77FeQs-PlqHq4cfLWnlL" type="audio/mp3" />
        </audio>

      </>
    );
  }
}
