import styles from "@/components/rodape/styles.module.scss";
import Image from "next/image";

export default function Rodape() {
    return (
        <>
            <div className={styles.rodape}>
                <div className={styles.rodape__agradecimentos}>
                    <p className={styles.rodape__texto}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquam sollicitudin. Duis vitae purus sollicitudin, bibendum nisl a, rhoncus felis. Aliquam non finibus diam. Aenean viverra nisl mi, eget molestie nulla viverra non. Aenean pulvinar quam vitae gravida posuere. Phasellus quis vehicula lorem. Aliquam erat volutpat. Praesent accumsan volutpat pellentesque. Sed ullamcorper venenatis venenatis. Vestibulum vel sollicitudin arcu. Donec metus quam, laoreet laoreet neque in, fermentum condimentum massa. Sed porta vel ligula dapibus varius. Curabitur eleifend porttitor tincidunt. Mauris vel cursus arcu, convallis vestibulum nunc. Praesent justo urna, mollis viverra varius quis, tincidunt ornare metus. Maecenas porttitor enim non tempor mattis.
                        <br /><br />
                        Sed ullamcorper nunc in viverra tempus. Ut consectetur libero ac ipsum efficitur, sed bibendum nisi tincidunt. Quisque pretium elit quis nisi consectetur faucibus. Duis ac purus non risus faucibus maximus. Proin egestas, sapien eu hendrerit hendrerit, erat magna bibendum eros, vitae scelerisque erat turpis quis metus. Quisque in metus dui. Ut at efficitur tellus. Nulla malesuada ante diam, eu suscipit mauris consectetur sit amet. Aenean neque est, accumsan non elementum vel, blandit et purus. Duis eu vehicula mi, a dictum sem. Etiam mauris velit, eleifend vitae porttitor eu, sagittis sit amet sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec vel pharetra nibh. Donec ac accumsan tortor. Sed ut suscipit augue, ac tincidunt quam. Vivamus vitae dui interdum, mattis eros vitae, euismod urna.
                    </p>
                    <Image className={styles.rodape__imagem}
                        width={438}
                        height={249}
                        src={"/imagens/fotoTurma.jpg"}
                        alt="foto da turma"
                    />
                </div>
                <Image className={styles.logoIfro}
                    width={86}
                    height={120}
                    src={"/imagens/logoIfro.svg"}
                    alt="logo do ifro"
                />
            </div>
        </>
    )
}