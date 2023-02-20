import Toast from "../../../component/Toast";
import productService from "../../../services/productService";

export const register_data = (data) => async (dispatch) => {
  try {
    const res = await productService.register_data(data);

    dispatch({
      type: "REGISTER_DATA",
      payload: res.data.data,
    });

    return Promise.resolve(res.data.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const login_data = (data) => async (dispatch) => {
  try {
    const res = await productService.login_data(data);

    dispatch({
      type: "LOGIN_DATA",
      payload: res.data.data,
    });

    return Promise.resolve(res.data.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const category_data = () => async (dispatch) => {
  try {
    const res = await productService.category_data();

    dispatch({
      type: "CATEGORY_DATA",
      payload: res.data.data,
    });

    return Promise.resolve(res.data.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const product_data = () => async (dispatch) => {
  try {
    const res = await productService.product_data();

    dispatch({
      type: "PRODUCT_DATA",
      payload: res.data.data,
    });

    return Promise.resolve(res.data.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const mobile_data = () => async (dispatch) => {
  try {
    const res = await productService.mobile_data();

    dispatch({
      type: "MOBILE_DATA",
      payload: res.data.data,
    });

    return Promise.resolve(res.data.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const laptop_data = () => async (dispatch) => {
  try {
    const res = await productService.laptop_data();

    dispatch({
      type: "LAPTOP_DATA",
      payload: res.data.data,
    });

    return Promise.resolve(res.data.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const camera_data = () => async (dispatch) => {
  try {
    const res = await productService.camera_data();

    dispatch({
      type: "CAMERA_DATA",
      payload: res.data.data,
    });

    return Promise.resolve(res.data.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const product_by_category_data = (id) => async (dispatch) => {
  try {
    const res = await productService.product_by_category_data(id);

    dispatch({
      type: "PRODUCT_BY_CATEGORY_DATA",
      payload: res.data.data,
    });

    return Promise.resolve(res.data.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const category_detail = (id) => async (dispatch) => {
  try {
    const res = await productService.category_detail(id);

    dispatch({
      type: "CATEGORY_DETAIL",
      payload: res.data.data,
    });

    return Promise.resolve(res.data.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const add_to_cart = (data) => async (dispatch) => {
  try {
    dispatch({
      type: "ADD_TO_CART",
      payload: data,
    });

    return Promise.resolve(data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const inc_cart = () => {
  return { type: "INC_CART" };
};

export const dec_cart = () => {
  return { type: "DEC_CART" };
};

export const Delete_cart = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "DELETE_CART",
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

export const place_order = (data) => async (dispatch) => {
  try {
    const res = await productService.place_order(data);
    if (res) {
      Toast({ message: "Order Placed Successfully", type: "success" });
    }

    dispatch({
      type: "PLACE_ORDER",
      payload: res.data.data,
    });

    return Promise.resolve(data);
  } catch (err) {
    return Promise.reject(err);
  }
};
