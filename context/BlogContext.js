import React, { useReducer } from "react";
import createDataContext from "./createDataContext";

const BlogContext = React.createContext();

const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blog":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 1000),
          title: action.playload.title,
          content: action.playload.content,
        },
      ];

    case "delete_blog":
      return state.filter((blogPost) => blogPost.id !== action.playload);
    default:
      return state;
  }
};
const addBlogPost = (dispatch) => {
  return (title, content,callback) => {
    dispatch({ type: "add_blog", playload: { title, content } });
    callback();
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_blog", playload: id });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost },
  []
);
