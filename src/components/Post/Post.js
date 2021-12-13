import { RiHeart3Line, RiUpload2Line, RiChat1Line, RiRepeat2Line } from "react-icons/ri";
import './Post.css';
import { useState } from "react";

export default function Post({author, content, image, date, comments, repeats, likes}){
    const {name, nickname, photo} = author;

    const [comment, setComment] = useState(0);
    const [repeat, setRepeat] = useState(0);
    const [like, setLike] = useState(0);

    return (
        <div className="post">
            <div className="post__wrapper">
                <img className="post__avatar" src={photo} alt={name} />
                <div className="post__inner">
                    <div className="post__header">
                        <h1 className="post__author-name">{name}</h1>
                        <p className="post__author-nickname">{nickname}</p>
                        <span className="post__dot">&#183;</span>
                        <p className="post__date">{date}</p>
                    </div>
                    <p className="post__content">{content}</p>
                    <img className="post__img" src={image} alt="ray" />
                    <div className="post__icons">
                        <p onClick={() => setComment(count => count ? count - 1 : count + 1)}><RiChat1Line /><span>{comments + comment}</span></p>
                        <p onClick={() => setRepeat(count => count ? count - 1 : count + 1)}><RiRepeat2Line /><span>{repeats + repeat}</span></p>
                        <p onClick={() => setLike(count => count ? count - 1 : count + 1)}><RiHeart3Line /><span>{likes + like}</span></p>
                        <p><RiUpload2Line /></p>
                    </div>
                </div>
            </div>
        </div>
    );
}