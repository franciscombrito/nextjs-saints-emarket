import { Product } from "../models/product.model";

export enum ActionType {
  setProducts = "SET_PRODUCTS",
  setProduct = "SET_PRODUCT",
}

export interface SetProducts {
  type: ActionType.setProducts;
  payload: { products: Product[] };
}

export interface SetProduct {
  type: ActionType.setProduct;
  payload: { product: Product };
}

export type Action = SetProducts | SetProduct;

export const setProducts = (products: Product[]): SetProducts => {
  return { type: ActionType.setProducts, payload: { products } };
};

export const setProduct = (product: Product): SetProduct => {
  return { type: ActionType.setProduct, payload: { product } };
};
