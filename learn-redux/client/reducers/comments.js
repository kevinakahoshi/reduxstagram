// Reducer takes in the action (info on what happened), and copy of current state

const comments = (state = [], action) => {
  console.log(state, action);
  return state;
}

export default comments;
