import { GET_PRODUCTS } from "./actionType";

const INIT_STATE = {
  products: [],
};

const data = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    default:
      return state;
  }
};

export default data;
