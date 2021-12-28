import './Posts.css';
import Post from '../Post/Post';
import { useSelector } from 'react-redux';
import FormCreatePost from '../FormCreatePost/FormCreatePost';

export default function Posts(){
    const posts = useSelector((state) => state.posts);

    return (
        <div className="posts">
            <FormCreatePost />
            {
            posts.map((post) => {
                return <Post 
                author={post.author}
                content={post.content}
                image={post.image}
                {...post}
                />
            })
            }
        </div>
    );
}