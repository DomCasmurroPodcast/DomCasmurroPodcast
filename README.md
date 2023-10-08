# A tal da documentação

## Comentários do Pereira

### Audio do Episódio

Link do site que contém a maneira que faremos:
<https://travis.media/embed-google-drive-audio-html>

Pelo que tudo aparenta, certos audios não rodam nessa maneira ☝
A teoria é que isso se dá pelo fato de certos audios serem grandes demais e o drive não consegue verificar virus

> Google Drive does not scan files larger than 100 MB[...]

**Exemplo pego do site:**

```js
<audio className={styles.player} controls preload="none">
  <source
    src="https://docs.google.com/uc?export=open&id=13s1pwgpWZAbpwYgaFa_MgdxiKGOILCtX"
    type="audio/mp3"
  />
</audio>
```

[Nosso código](src/pages/Episodio/[id].jsx)

### Pequeno Bug em [Episódios](src/pages/Episodio/[id].jsx)

O bug acontecia quando era clicado para ir pro proximo episódio, mas o _src_ dentro da tag de audio continuava com o _src_ antigo, isso acontecia devido ao fato da tag não re-renderizar.
Para resolver isso precisavamos fazer a tag re-renderizar quando houver a troca do episódio, então utilizamos esta [maneira](https://stackoverflow.com/questions/56649094/how-to-reload-a-component-part-of-page-in-reactjs) para concertar o problema.

O código ficou assim:

```js
const [seed, setSeed] = useState(1);

const ReloadAudio = () => {
  setSeed(Math.random());
};

useEffect(() => {
  ReloadAudio();
  setPodeCarregar(false);
  setAudioClicked(false);
}, [router.query.id]);
```

```jsx
<audio
  key={seed}
  onPlay={() => {
    if (!audioClicked) setAudioClicked(true);
  }}
  onCanPlayThrough={() => setPodeCarregar(true)}
  className={styles.audioPlayer}
  controls
  preload="none"
>
  <source key={seed} src={src} type="audio/mp3" />
</audio>
```
