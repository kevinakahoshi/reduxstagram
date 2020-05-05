const postComments = (state = [], action) => {
  switch(action.type) {
    case 'ADD_COMMENT':
      // Return existing state plus new comment
      return [
        ...state,
        {
          user: action.author,
          text: action.comment
        }];
    case 'REMOVE_COMMENT':
      return state;
    default:
      return state;
  }
}

// Reducer takes in the action (info on what happened), and copy of current state
const comments = (state = [], action) => {
  if (typeof action.postId !== undefined) {
    return {
      // Take current state
      ...state,
      // Overwrite this post with a new one
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state;
}

export default comments;
