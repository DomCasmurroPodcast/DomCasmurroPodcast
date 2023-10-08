import styles from "./EpisodioButton.module.scss"

export default function EpisodioButton({nome, capitulos, alunos, key, ...props}){
    
    
    
    return(
        <>
        <div className={styles.mainContainer} key={key}>
            <p className={styles.nome}>{nome}</p>
            <p className={styles.capitulos}>Capitulos {capitulos}</p>
            <p className={styles.alunos}>{alunos}</p>
        </div>
        </>
    )
}