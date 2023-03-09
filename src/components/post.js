import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../store/index";

const Post = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts);

    useEffect(() => {
            dispatch(getPosts());
    }, [dispatch]);
    
    return(
        <div>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
};
export default Post;