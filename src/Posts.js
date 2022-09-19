import React from "react"

function Post(props) {

  const [like, setLike] = React.useState(false)
  const click = event => {setLike(current => !current)};

  const [salvar, setSalvar] = React.useState(false)
  const clickSalvar = event => {setSalvar(current => !current)};

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
          <img onClick={click} src={props.fotoPost} />
        </div>

        <div class="fundo">
          <div class="acoes">
            <div>
              <ion-icon onClick={click} name={like ? 'heart' : 'heart-outline' }  class={like ? 'like' : ''}></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon onClick={clickSalvar} name={salvar ? 'bookmark' : 'bookmark-outline' }></ion-icon>
            </div>
          </div>

          <div class="curtidas">
            <img src={props.imagemCurtida} />
            <div class="texto">
              Curtido por <strong>{props.nomeCurtida}</strong> e <strong>outras {like ? Number(props.qtdCurtidas) + 1 : props.qtdCurtidas } pessoas</strong>
            </div>
          </div>
        </div>
      </li>
  )
}


export default function Posts() {
  const posts = [
    { imagemPerfil: "./imagens/meowed.svg", nomePerfil: "meowed", fotoPost: "./imagens/gato-telefone.svg", imagemCurtida: "./imagens/respondeai.svg", nomeCurtida: "respondeai", qtdCurtidas: "101523" },
    { imagemPerfil: "./imagens/barked.svg", nomePerfil: "barked", fotoPost: "./imagens/dog.svg", imagemCurtida: "./imagens/adorable_animals.svg", nomeCurtida: "adorable_animals", qtdCurtidas: "99159" },
  ]

  return (
    <ul class="posts">
      {posts.map((p) => <Post imagemPerfil={p.imagemPerfil} nomePerfil={p.nomePerfil} fotoPost={p.fotoPost} imagemCurtida={p.imagemCurtida} nomeCurtida={p.nomeCurtida} qtdCurtidas={p.qtdCurtidas} />)}
    </ul>
  )
}
