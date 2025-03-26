export default function Post({post}) {
    console.log(post);
    const {body, title} = post
    return (
        <div className="card">
            <h3>Title:{title} </h3>
            <p>{body}</p>
        </div>
    )
}