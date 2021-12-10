import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addPost } from '../../redux/actions';
import Options from "../AuthorList/AuthorList";
import AUTHORS_DATA from "../AuthorList/Data";
import './FormCreatePost.css';

export default function CreatePost() {
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const [author, setAuthor] = useState("");

  const dispatch = useDispatch();
  const onCreatePost = (ev) => {
    ev.preventDefault();
    dispatch(addPost({ text, image, author }));
    setText("");
    setImage("");
    setAuthor("");
  };

  return (
    <form className="form__create-post" onSubmit={onCreatePost}>
      <textarea
        placeholder="Write text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <label for="post-img">Choose a post picture:</label>
      <input 
        type="file"
        id="post-img" 
        name="post-img"
        accept="image/png, image/jpeg"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <select name="author" value={author} onChange={(e) => setAuthor(e.target.value)}>
        <Options options={AUTHORS_DATA} />
      </select>
      <button type="submit" onClick={onCreatePost}>
        Add Post
      </button>
    </form>
  );
}
