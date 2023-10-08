import styles from "./Button.module.scss"

export default function Button({children, text, ...props}){

    return(

        <div {...props}>
            <div className={styles.button}>
                {children}<p>{text}</p>
            </div>
        </div>
    )
}