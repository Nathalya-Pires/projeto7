
function Sugestao(props) {
    return (
        <li class="sugestao">
            <div class="usuario">
                <img src={props.foto} />
                <div class="texto">
                    <div class="nome">{props.nome}</div>
                    <div class="razao">{props.status}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </li>

    )
}


export default function Sugestoes() {
    const sugestoes = [
        { foto: "./imagens/bad.vibes.memes.svg", nome: "bad.vibes.memes", status: "Segue você" },
        { foto: "./imagens/chibirdart.svg", nome: "chibirdart", status: "Segue você" },
        { foto: "./imagens/razoesparaacreditar.svg", nome: "razoesparaacreditar", status: "Novo no Instagram" },
        { foto: "./imagens/adorable_animals.svg", nome: "adorable_animals", status: "Segue você" },
        { foto: "./imagens/smallcutecats.svg", nome: "smallcutecats", status: "Segue você" },
    ]

    return (
        <ul class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {sugestoes.map((s) => <Sugestao foto={s.foto} nome={s.nome} status={s.status} />)}
        </ul>
    )
}