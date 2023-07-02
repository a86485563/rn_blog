import React, { useReducer } from "react";

export default (reducer, actions, initialState) => {
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    //actions = { addBlogPost: (dispath) =>{ return () => {} } }

    const boundActions = {};
    for (let key in actions) {
      //[addBlogPost,deleteBlogPost]
      boundActions[key] = actions[key](dispatch); //object add 的方式
    }

    return <Context.Provider value={{ state, ...boundActions }}>{children}</Context.Provider>;
  };

  return { Context, Provider };
};
