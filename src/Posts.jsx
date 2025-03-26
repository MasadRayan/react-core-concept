import { use } from "react";
import Post from './Post';

export default function Posts({ postsPromise }) {
    const postContainer = use(postsPromise);
    // console.log(postContainer);
    return (
        <div className="posts">
            <h3>Number of Posts:{postContainer.length}</h3>
            {
                postContainer.map(post => <Post key={post.id} post={post}></Post>)
            }
        </div>
    )
}