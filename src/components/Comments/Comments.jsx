import React from "react";
import PropTypes from "prop-types";
import { Comment } from "../Comment/Comment";
import { Grid } from "../Grid/Grid";
import { comments } from "../../helpers/comments";
import { useGetCommentsQuery } from "../../redux/commentApi";
import { useSelector } from "react-redux";

export const Comments = () => {
  const filter = useSelector((state) => state.filter.filter.toLowerCase());
  console.log('filter :>> ', filter);
  const { data, error, isLoading } = useGetCommentsQuery();
  console.log("data :>> ", data);

  const getFilteredComments = () => data.filter(comment => comment.author.toLowerCase().includes(filter))
  


  return (
    <Grid>
      {data && getFilteredComments().map((comment) => <Comment key={comment.id} {...comment} />)}
    </Grid>
  );
};

Comments.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape().isRequired),
};
