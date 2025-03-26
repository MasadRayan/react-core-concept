import { use } from "react"
import Friend from "./Friend";

export default function Friends({ friendsPromise }) {

    const friendsContainer = use(friendsPromise);
    // console.log(friendsContainer);
    return (
        <div className="card">
            <p>Friends:{friendsContainer.length} </p>
            {
                friendsContainer.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
            }
        </div>
    )
}