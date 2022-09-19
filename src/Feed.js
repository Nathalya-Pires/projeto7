import Posts from "./Posts"
import Stories from "./Stories"

export default function Feed() {
    return (
        <div class="feed">
            <Stories/>
            <Posts/>
        </div>
    )
}