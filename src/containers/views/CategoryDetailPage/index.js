import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { add_to_cart, category_detail } from "../../redux/action";
import { size } from "lodash";
import Header from "../../../component/Header";
import { Link } from "react-router-dom";
import { ROUTE_CART } from "../../routes/routes";
import Toast from "../../../component/Toast";

const CategoryDetailPage = (props) => {
  const id = props.match.params.id;
  const dispatch = useDispatch();
  const [categoryDetail, setCategoryDetail] = useState({});

  useEffect(() => {
    loadCategoryDetail();
  }, []);

  const loadCategoryDetail = async () => {
    dispatch(category_detail(id)).then((data) => {
      if (size(data) > 0) {
        data.forEach((element) => {
          setCategoryDetail(element);
        });
      }
    });
  };

  const addToCart = (categoryData) => {
    const CartInfo = {
      id: categoryData.id,
      Title: categoryData.Title,
      Image: categoryData.Image,
      Price: categoryData.Price,
    };
    const cartDetails =
      localStorage.getItem("cart_info") &&
      size(localStorage.getItem("cart_info")) > 0
        ? JSON.parse(localStorage.getItem("cart_info"))
        : [];
    localStorage.setItem(
      "cart_info",
      JSON.stringify([...cartDetails, CartInfo])
    );
    const cartInformation = JSON.parse(localStorage.getItem("cart_info"));
    dispatch(add_to_cart(cartInformation)).then((data) => {
      Toast({ message: "Cart added Successfully", type: "success" });
      props.history.push(ROUTE_CART);
    });
  };

  return (
    <div className="container-fluid">
      <Header />
      <div className="col-md-12">
        <h3 className="category-title">{categoryDetail.Title}</h3>
      </div>
      <div className="container">
        <div className="col-md-12">
          <div className="row">
            <div
              className="col-md-12 category-blog"
            >
              <img
                src={`https://tznwvelv.directus.app/assets/${categoryDetail.Image}`}
                className="img-fluid"
                alt="ronaldo"
                style={{
                  width: "550px",
                  height: "80VH",
                  margin: "30px 0 30px",
                }}
              />
              <h4>${categoryDetail.Price}</h4>
              <h6>
                <Link to="#" className="d-block">
                  <span>{categoryDetail.Title}</span>
                </Link>
              </h6>
              <p>{categoryDetail.Description}</p>
              <button
                type="button"
                className="category-btn"
                onClick={() => addToCart(categoryDetail)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CategoryDetailPage;
