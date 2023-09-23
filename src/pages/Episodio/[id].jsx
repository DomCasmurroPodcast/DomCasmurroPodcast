import { useRouter } from "next/router";
import episodios from "@/utils/episodios";

export default function Page(){
    const router = useRouter();
    const episodio = episodios[router.query.id-1]

    return(
        <>
      <h1>Pagina {router.query.id}</h1>

      <h2>{episodio.nome}</h2>
      <p>Alunos: {episodio.alunos}</p>
      <p>Turma: {episodio.turma}</p>
      <p>
        Descricao: <br />
        {episodio.descricao}
      </p>
    </>

    )
}