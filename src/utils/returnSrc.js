export default function returnSrc(audioSrc){
    if(audioSrc == null) return null;
    const src = "https://drive.google.com/uc?export=open&id=" + audioSrc.split("/")[5]
    return src;
}