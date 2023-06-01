"use client";

import { ActionType } from "@/app/context/actions";
import { StoreContext } from "@/app/context/store";
import { useContext, useEffect } from "react";

export default function Product({ params }: { params: { id: string } }) {
  const { state, dispatch } = useContext(StoreContext);

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `https://esaintsmarket.onrender.com/products/${params.id}`
      );
      const product = await res.json();
      dispatch({ type: ActionType.setProduct, payload: { product } });
    })();
  }, [dispatch, params]);
  return (
    <main>
      <div>
        <h1>{state.products.find((p) => p.id === +params.id)?.name}</h1>
      </div>
    </main>
  );
}
