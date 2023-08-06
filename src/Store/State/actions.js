import { GET_PRODUCTS } from "./actionType";

export const getProduct = (data) => ({
  type: GET_PRODUCTS,
  payload: data,
});
