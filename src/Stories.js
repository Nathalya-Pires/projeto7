function Story(props) {
    return (
        <li class="story">
            <div class="imagem">
                <img src={props.foto} />
            </div>
            <div class="usuario">
                {props.nome}
            </div>
        </li>
    )
}

export default function Stories() {
    const stories = [
        { foto: "./imagens/9gag.svg", nome: "9gag" },
        { foto: "./imagens/meowed.svg", nome: "meowed" },
        { foto: "./imagens/barked.svg", nome: "barked" },
        { foto: "./imagens/nathanwpylestrangeplanet.svg", nome: "nathanwpylestrangeplanet" },
        { foto: "./imagens/wawawicomics.svg", nome: "wawawicomics" },
        { foto: "./imagens/respondeai.svg", nome: "respondeai" },
        { foto: "./imagens/filomoderna.svg", nome: "filomoderna" },
        { foto: "./imagens/memeriagourmet.svg", nome: "memeriagourmet" },
    ]

    return (
        <ul class="stories">
            {stories.map((s) => <Story foto={s.foto} nome={s.nome} />)}
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </ul >
    )
}