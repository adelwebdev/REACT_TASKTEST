import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deletePost, editPost } from "../actions/post.action";
import Like from "./Like";
import { isEmpty } from "./Utils";



const Post = ({ post }) => {

  const user = useSelector((state) => state.userReducer);
  const [editToggle, setEditToggle] = useState(false);
  const [editContent, setEditContent] = useState(post.content);

  const dispatch = useDispatch();
  const handleEdit = (e) => {
    e.preventDefault();
    const postData = {
      title: post.title,
      author: "Adel et oui!",
      content: editContent,
      likes: post.likes,
      id: post.id,
    };
    dispatch(editPost(postData));
    setEditToggle(false); 
  };

  return (
    <div className="post">
      <div className="edit-delete">
        <img
          onClick={() => setEditToggle(!editToggle)}
          src="/public/icons/edit.svg"
          alt="edit"
        />
        <img
          src="/public/icons/delete.svg"
          alt="delete"
          onClick={() => dispatch(deletePost(post.id))}
        />
      </div>
      <h2>{post.title}</h2>
      <img
        src="https://picsum.photos/1500/400"
        className="post-img"
        alt="img-post"
      />
      {editToggle ? (
        <form onSubmit={(e) => handleEdit(e)}>
          <textarea
            default
            value={post.content}
            onChange={(e) => setEditContent(e.target.value)}
          >
            <input type="submit" value="valider modification"></input>
          </textarea>
        </form>
      ) : (
        <p>{post.content}</p>
      )}
      <div className="author">
        <h5>{post.author}</h5>
        <Like post={post} />
      </div>
    </div>
  );
};

export default Post;
