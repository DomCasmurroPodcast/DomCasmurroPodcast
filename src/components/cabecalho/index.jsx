import styles from "@/components/cabecalho/styles.module.scss";
import Image from "next/image";

export default function Cabecalho() {
    return (
        <>
            <div className={styles.cabecalho}>
                <h1 className={styles.cabecalho__titulo}>Dom Casmurro Podcast</h1>
                <Image className={styles.cabecalho__imagem}
                    width={694}
                    height={694}
                    src={""}
                    alt="logo da página"
                />
            </div>
        </>
    )
}