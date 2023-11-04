import * as ACTIONS_TYPES from "../actions/action_types";

const initialState = {
  stateprop1: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS_TYPES.SUCCESS:
      return {
        ...state,
        stateprop1: true,
      };

    case ACTIONS_TYPES.FAILURE:
      return {
        ...state,
        stateprop1: false,
      };

    default:
      return state;
  }
};

export default rootReducer;
