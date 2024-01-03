import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPost } from "../posts/actions";

const PostList = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts);
    const [page, setpage] = useState(1);

    useEffect(() => {
        dispatch(getPost(page));
      }, [dispatch, page]);

    const handleNext = () => {
        setpage(page + 1)
    }
    
    const handlePrev = () => {
        setpage(page - 1)
    }

  return (
    <div>
        {posts.map((post) => (
            <div key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>
        ))}
        <button onClick={handlePrev} disabled = {page === 1}>Anterio</button>
        <button onClick={handleNext}>Proximo</button>
    </div>
  )
}

export default PostList