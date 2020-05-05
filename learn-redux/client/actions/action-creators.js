// Increment
export const increment = (index) => {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}

// Add comment
export const addComment = (postId, author, comment) => {
  console.log('dispatched');
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

// Remove comment
export const removeComment = (postId, index) => {
  return {
    type: 'REMOVE_COMMENT',
    postId,
    index
  }
}
