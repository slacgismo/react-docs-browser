const docForm = (state, action) => {
  if (action.error) return state;

  switch (action.type) {
    case 'HANDLE INPUT TEXT': {
      return {
        ...state,
        [action.field]: {
          ...state[action.field],
          value: action.payload,
        },
      };
    }
    case 'HANDLE INITIAL UPDATE': {
      return {
        ...action.payload,
      };
    }
    default:
      return state;
  }
};

export default docForm;
