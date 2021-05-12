import React,{ createContext, useReducer} from 'react';
import AppReducer from './AppReducer';


// Initail State
const initialState = {
  users:[ ]
}



// Create Context
export const GlobalContext = createContext(initialState);



// Provider Component
export const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  // Actions
  const removeComment = (id) => {
    dispatch({
      type: 'REMOVE_COMMENT',
      payload: id  
    })
  }

  const addComment = (user) => {
    dispatch({
      type: 'ADD_COMMENT',
      payload: user 
    })
  }


  const editUser = (user) => {
    dispatch({
      type: 'EDIT_USER',
      payload: user 
    })
  }


  return(
    <GlobalContext.Provider value={{
      users: state.users,
      removeComment,
      addComment,
      editUser
    }}>
      {children}
    </GlobalContext.Provider>
  )
}