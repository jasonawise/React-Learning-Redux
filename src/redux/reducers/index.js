const defualtState = {
  count: 5,
  text: 'Hello',
};

function counter(state = defualtState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

export default counter;
