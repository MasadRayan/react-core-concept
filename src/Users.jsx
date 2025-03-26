import { use } from "react"

export default function Users({fetchUser}) {
    const userContainer = use(fetchUser);
    // console.log(userContainer);
    return (
        <div className="card">
            <p>Users:{userContainer.length}</p>
        </div>
    )
}