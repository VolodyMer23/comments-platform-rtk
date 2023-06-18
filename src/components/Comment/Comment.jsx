import React, { useState } from "react";
import styles from "./Comment.module.css";
import PropTypes from "prop-types";
import { TiThumbsUp, TiThumbsDown } from "react-icons/ti";
import { formatDateToNow } from "../../helpers/formatDateToNow";
import { Button } from "../Button/Button";
import { useDeleteCommentCountMutation, useUpdateCommentCountMutation } from "../../redux/commentApi";


export const Comment = ({
  createdAt,
  content,
  author,
  avatar,
  thumbsUp,
  thumbsDown,
  id,
}) => {
  const [updateComent, { isLoading }] = useUpdateCommentCountMutation();
  const [deleteComent] = useDeleteCommentCountMutation();
  const [isEdit, setIsEdit] = useState(false)
  const [text, setText] = useState(content)

  const handleDelete = () => {
    deleteComent(id);
  };
  return (
    <li className={styles.card}>
      <img className={styles.avatar} src={avatar} alt={author} />
      <button onClick={handleDelete} type="button">
        Delete coment
      </button>
      <div className={styles.cardWrapper}>
        <div className={styles.cardBody}>
          <h3 className={styles.author}>{author}</h3>
          {isEdit ? (
            <input
              onChange={(e) => setText(e.target.value)}
              value={text}
              autoFocus
              onBlur={() => {
                setIsEdit(false);
                updateComent({ id, content: text });
              }}
            />
          ) : (
            <p onClick={() => setIsEdit(true)} className={styles.content}>
              <span className={styles.blockquote}>"</span>
              {text}
              <span className={styles.blockquote}>"</span>
            </p>
          )}
        </div>

        <div className={styles.cardFooter}>
          <span className={styles.date}>{formatDateToNow(createdAt)}</span>

          <div className={styles.buttonBox}>
            <Button counter={thumbsUp} id={id}>
              <TiThumbsUp className={styles.icon} />
            </Button>

            <Button counter={thumbsDown} role="thumbsDown" id={id}>
              <TiThumbsDown className={styles.icon} />
            </Button>
          </div>
        </div>
      </div>
    </li>
  );
};

Comment.propTypes = {
  createdAt: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  thumbsUp: PropTypes.number.isRequired,
  thumbsDown: PropTypes.number.isRequired,
};
