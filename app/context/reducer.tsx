import { Product } from "../models/product.model";
import { Action, ActionType } from "./actions";

export interface State {
  products: Product[];
}

export const initialState: State = {
  products: [],
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.setProducts:
      return {
        ...state,
        products: structuredClone(action.payload.products),
      };
    case ActionType.setProduct:
      return {
        ...state,
        products: state.products.find((p) => p.id === action.payload.product.id)
          ? structuredClone(state.products)
          : [...state.products, action.payload.product],
      };
    default:
      return state;
  }
};
