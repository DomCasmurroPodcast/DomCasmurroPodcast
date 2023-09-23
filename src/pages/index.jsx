import styles from "@/styles/Home.module.css";
import episodios from "@/utils/episodios";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className={styles.homeContainer}>
        <h1 className={styles.titulo}>Dom Casmurro Podcast</h1>

        <p className={`${styles.texto} ${styles.marginTop2rem}`}>
          Por enquanto não temos nada por aqui :(
          <br /> mas espere logo log teremos um incrível podcast para você ouvir!
        </p>

        <p className={`${styles.textoDev} ${styles.marginTop2rem}`}>
          Parte de teste para os desenvolvedores
        </p>
        <ul>
          {episodios.map((episodio, index) => (
            <li key={episodio.id}>
              <Link href={`/Episodio/${episodio.id}`}>{episodio.nome}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
