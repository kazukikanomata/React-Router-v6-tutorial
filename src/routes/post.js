import { useLoaderData } from "react-router-dom";

export async function loader({ params }) {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${params.postId}`
    );
    if(!res.ok){
        throw Error('Not Found');
    }

    const post = await res.json();
    
    return { post };
}

function Post(){
    const { post } = useLoaderData();
    return(
        <>
            <h2>Single Page</h2>
            <div>
                <p>ID: {post.id}</p>
                <p>タイトル: {post.title}</p>
                <p>内容: {post.body}</p>
            </div>
        </>
    );
}
export default Post;