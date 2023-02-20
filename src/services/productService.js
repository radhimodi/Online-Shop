import http from "../http-common";
import { Access_Token, registerToken } from "../constant/app.constant";

const login_data = (data) => {
  return http.post(`/auth/login`, data);
};

const register_data = (data) => {
  return http.post(`/users`, data, {
    headers: {
      Authorization: "Bearer " + registerToken,
    },
  });
};

const category_data = () => {
  return http.get(`items/Category`, {
    headers: {
      Authorization: "Bearer " + Access_Token,
    },
  });
};
const product_data = () => {
  return http.get(`/items/Products?fields[]=*&fields[]=category*`, {
    headers: {
      Authorization: "Bearer " + Access_Token,
    },
  });
};

const mobile_data = () => {
  return http.get(
    `/items/Products?fields[]=*&fields[]=Category.*&filter[Category][id][_eq]=1`,
    {
      headers: {
        Authorization: "Bearer " + Access_Token,
      },
    }
  );
};

const laptop_data = () => {
  return http.get(
    `/items/Products?fields[]=*&fields[]=Category.*&filter[Category][id][_eq]=2`,
    {
      headers: {
        Authorization: "Bearer " + Access_Token,
      },
    }
  );
};

const camera_data = () => {
  return http.get(
    `/items/Products?fields[]=*&fields[]=Category.*&filter[Category][id][_eq]=3`,
    {
      headers: {
        Authorization: "Bearer " + Access_Token,
      },
    }
  );
};

const product_by_category_data = (id) => {
  return http.get(
    `/items/Products?fields[]=*&fields[]=Category.*&filter[Category][id][_eq]=${id}`,
    {
      headers: {
        Authorization: "Bearer " + Access_Token,
      },
    }
  );
};
const category_detail = (id) => {
  return http.get(
    `/items/Products?fields[]=*&fields[]=Category.*&filter[id][_eq]=${id}`,
    {
      headers: {
        Authorization: "Bearer " + Access_Token,
      },
    }
  );
};

const place_order = (data) => {
  return http.post(`/items/Orders`, data, {
    headers: {
      Authorization: "Bearer " + Access_Token,
    },
  });
};

const productService = {
  register_data,
  login_data,
  category_data,
  product_data,
  mobile_data,
  laptop_data,
  camera_data,
  product_by_category_data,
  category_detail,
  place_order,
};

export default productService;
