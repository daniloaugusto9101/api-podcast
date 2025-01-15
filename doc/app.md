# Podcast Manager

### Descrição
Um app ao estilo netflix, onde possa centralizar diferentes episódios podcast separados por categoria

### Domínio
Podcast feitos em vídeo

### Features
- Listar os episódios podcast em sessões de categorias
     - [saúde, fitnes, mentalidade, humor]
- Filtrar episódios por nome de podcast


## Como

#### Feature:
Listar os episódios podast em sessões de categorias

### Como vu implementar
Vou retornar em uma api rest (json) o nome do pocast, nome do episódio, imagem da capa, link, caterias

```js
    [
        {
            podcastName: "Flow",
            episode: "CBUM - Flow #319,
            videoId: "gHjyazvLm4g"
            cover: "https://i.ytimg.com/an_webp/gHjyazvLm4g/mqdefault_6s.webp?du=3000&sqp=CMD4mLwG&rs=AOn4CLDFAM1xbX_ieo1qmlWFP7pqgsV50g",
            link: "https://www.youtube.com/watch?v=gHjyazvLm4g".
            category: ["saúde", "esporte"]
        },
        {
            podcastName: "Flow",
            episode: "CBUM - Flow #319,
            videoId: "gHjyazvLm4g"
            cover: "https://i.ytimg.com/an_webp/gHjyazvLm4g/mqdefault_6s.webp?du=3000&sqp=CMD4mLwG&rs=AOn4CLDFAM1xbX_ieo1qmlWFP7pqgsV50g",
            link: "https://www.youtube.com/watch?v=gHjyazvLm4g".
            category: ["saúde", "esporte"]
        }
    ]
```