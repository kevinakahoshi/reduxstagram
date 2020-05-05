// Reducer takes in the action (info on what happened), and copy of current state

const posts = (state = [], action) => {
  switch(action.type) {
    case 'INCREMENT_LIKES':
      const index = action.index;
      const newState = [
        ...state.slice(0, index),
        {
          ...state[index],
          likes: state[index].likes + 1
        },
        ...state.slice(index + 1),
      ]

      return newState;
    default:
      return state;
  }
}

export default posts;
