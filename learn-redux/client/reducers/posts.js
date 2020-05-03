// Reducer takes in the action (info on what happened), and copy of current state

const posts = (state = [], action) => {
  console.log('The post will change');
  console.log(state, action);
  return state;
}

export default posts;
