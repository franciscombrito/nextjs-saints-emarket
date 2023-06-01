"use client";

import { useContext, useEffect } from "react";
import { StoreContext } from "../context/store";
import { ActionType } from "../context/actions";

export default function Products() {
  const { state, dispatch } = useContext(StoreContext);

  useEffect(() => {
    (async () => {
      const res = await fetch("https://esaintsmarket.onrender.com/products");
      const products = await res.json();
      dispatch({ type: ActionType.setProducts, payload: { products } });
    })();
  }, [dispatch]);
  return (
    <main>
      <div>
        <h1>Products</h1>
        <ul>
          {state.products?.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}
