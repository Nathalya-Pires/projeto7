import React from "react"

export default function Usuario() {

    const usuarioPadrao = "Nathy Ohana Pires"

    const [usuario, setUsuario] = React.useState(usuarioPadrao)

    function alteraUsuario() {
        const usuarioPrompt = prompt ("Altere seu nome de usuário")
        setUsuario(usuarioPrompt)
    }

    const fotoPadrao = "./imagens/eu.png"

    const [foto, setFoto] = React.useState(fotoPadrao)

    function alteraFoto() {
        const fotoPrompt = prompt ("Insira o link da sua nova foto de usuário")
        setFoto(fotoPrompt)
    }



    return (
        <div class="usuario">
            <img onClick={alteraFoto} src={(foto === "" || foto === null) ? fotoPadrao : foto }/>
            <div class="texto">
                <strong>nathyohana1</strong>
                <span>
                    {(usuario === "" || usuario === null) ? usuarioPadrao : usuario }
                    <ion-icon name="pencil" onClick={alteraUsuario}></ion-icon>
                </span>
            </div>
        </div>
    )
}





