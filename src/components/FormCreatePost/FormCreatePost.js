import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addPost } from '../../redux/actions';
import Options from "../AuthorList/AuthorList";
import AUTHORS_DATA from "../AuthorList/Data";
import './FormCreatePost.css';

export default function FormCreatePost() {
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [name, setName] = useState("Anakin Skywalker");

  const dispatch = useDispatch(); 
  const onCreatePost = (ev) => { 
    ev.preventDefault(); 
    const getName = AUTHORS_DATA.find((item) => item.name === name); 
    dispatch(addPost({ 
      author: name ? getName : AUTHORS_DATA[0],
      content, 
      image, 
      date: new Date().toLocaleDateString("en-GB", { month: "short", day: "numeric"}),
      comments: 0,
      repeats: 0,
      likes: 0
    })); 
    setContent(""); 
    setImage(""); 
    setName(""); 
  };

  return (
    <form className="form__create-post" onSubmit={onCreatePost}>
      <textarea
        placeholder="Write text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <label htmlFor="post-img">Choose a post picture:</label>
      <input 
        id="post-img" 
        name="post-img"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <select name="author" value={name} onChange={(e) => setName(e.target.value)}>
        <Options options={AUTHORS_DATA} />
      </select>
      <button type="submit" onClick={onCreatePost}>
        Add Post
      </button>
    </form>
  );
}
