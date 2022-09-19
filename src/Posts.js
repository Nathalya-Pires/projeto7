function Post(props) {
  return (
      <li class="post">
        <div class="topo">
          <div class="usuario">
            <img src={props.imagemPerfil} alt={`Foto de Perfil de ${props.nomePerfil}`} />
            {props.nomePerfil}
          </div>
          <div class="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>

        <div class="conteudo">
          <img src={props.fotoPost} />
        </div>

        <div class="fundo">
          <div class="acoes">
            <div>
              <ion-icon name="heart-outline"></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon name="bookmark-outline"></ion-icon>
            </div>
          </div>

          <div class="curtidas">
            <img src={props.imagemCurtida} />
            <div class="texto">
              Curtido por <strong>{props.nomeCurtida}</strong> e <strong>outras {props.qtdCurtidas} pessoas</strong>
            </div>
          </div>
        </div>
      </li>
  )
}


export default function Posts() {
  const posts = [
    { imagemPerfil: "./imagens/meowed.svg", nomePerfil: "meowed", fotoPost: "./imagens/gato-telefone.svg", imagemCurtida: "./imagens/respondeai.svg", nomeCurtida: "respondeai", qtdCurtidas: "101.523" },
    { imagemPerfil: "./imagens/barked.svg", nomePerfil: "barked", fotoPost: "./imagens/dog.svg", imagemCurtida: "./imagens/adorable_animals.svg", nomeCurtida: "adorable_animals", qtdCurtidas: "99.159" },
  ]

  return (
    <ul class="posts">
      {posts.map((p) => <Post imagemPerfil={p.imagemPerfil} nomePerfil={p.nomePerfil} fotoPost={p.fotoPost} imagemCurtida={p.imagemCurtida} nomeCurtida={p.nomeCurtida} qtdCurtidas={p.qtdCurtidas} />)}
    </ul>
  )
}
