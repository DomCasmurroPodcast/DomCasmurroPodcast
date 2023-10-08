export default function returnSrc(audioSrc){
    const src = "https://drive.google.com/uc?export=open&id=" + audioSrc.split("/")[5]
    return src;
}