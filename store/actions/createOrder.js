import { setId } from "../slices/cartSlice";
import { reset } from "../slices/cartSlice";

import axios from "axios";

export const createOrder = (data) => {
  return async (dispatch) => {
    try {
      const res = await axios.post("http://localhost:3000/api/orders", data);
      if (res.status === 201) {
        dispatch(setId(res.data._id));
        dispatch(reset());
      }
    } catch {}
  };
};
