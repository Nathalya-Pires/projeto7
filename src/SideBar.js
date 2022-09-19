import Sugestoes from "./Sugestoes"
import Creditos from "./Creditos"
import Usuario from "./Usuario"

export default function SideBar() {
    return (
        <div class="sideBar">
            <Usuario />
            <Sugestoes />
            <Creditos />
        </div>
    )
}