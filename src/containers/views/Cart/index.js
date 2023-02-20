import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { size } from "lodash";
import { dec_cart, Delete_cart, inc_cart } from "../../redux/action";
import { ROUTE_CHECKOUT } from "../../routes/routes";
import Header from "../../../component/Header";
import Toast from "../../../component/Toast";

const Cart = (props) => {
  const dispatch = useDispatch();
  const cartInfo = JSON.parse(localStorage.getItem("cart_info"));
  let totalProductCount = 0;
  const cart_demo = useSelector((state) => state.reducer.cart.count);

  const handleIncrement = (e, key) => {
    if (Number(e.target.value) === key) {
      dispatch(inc_cart());
    }
  };

  const handleDecrement = (e, key) => {
    if (cart_demo > 0) {
      if (Number(e.target.value) === key) {
        dispatch(dec_cart());
      }
    }
  };

  const deleteCart = (id) => {
    if (size(cartInfo) > 0) {
      const cartDetail = cartInfo.filter((info) => info.id != id);
      localStorage.setItem("cart_info", JSON.stringify(cartDetail));
      dispatch(Delete_cart(id));
      Toast({ message: "Cart Removed Successfully", type: "success" });
      props.history.push(`/cart`);
    }
  };

  const Checkout = (total) => {
    localStorage.setItem("total_product", total);
    props.history.push(ROUTE_CHECKOUT);
  };

  return (
    <div className="container-fluid">
      <Header />
      <div className="col-md-12">
        <h3 className="category-title">Cart</h3>
      </div>
      <div className="cart-list">
        <div className="list-body">
          {cartInfo.map(
            (cart_data, key) => (
              (totalProductCount += parseInt(
                parseInt(cart_data.Price * cart_demo)
              )),
              (
                <div className="list-item" index={key} value={key}>
                  <div className="list-item-img">
                    <img
                      src={`https://tznwvelv.directus.app/assets/${cart_data.Image}`}
                      className="img-fluid cart-img"
                      alt=""
                      style={{ width: "50px", height: "50px" }}
                    />
                  </div>
                  <div className="list-item-desc">
                    <h6 className="mb-0">{cart_data.Title}</h6>
                    <h6 className="mb-0"></h6>
                    <p className="mb-1">Size:5000 </p>
                    <span className="price">
                      ${parseInt(cart_data.Price * cart_demo)}
                    </span>
                    <div className="product-counter">
                      <button
                        value={key}
                        onClick={(e) => handleDecrement(e, cart_data.id, key)}
                      >
                        -
                      </button>
                      <input
                        type="text"
                        value={cart_demo}
                        name="quantity"
                        className="qtycart"
                      />
                      <button
                        value={key}
                        onClick={(e) => handleIncrement(e, cart_data.id, key)}
                      >
                        +
                      </button>
                    </div>
                    <Link
                      to="#"
                      onClick={() => deleteCart(cart_data.id)}
                      className="close-btn"
                    >
                      &times;
                    </Link>
                  </div>
                </div>
              )
            )
          )}
          <div className="sub-total-box text-left">
            <h6>
              SUBTOTAL:
              <span className="price float-right">
                <span className="currencySymbol">$</span>
                {totalProductCount}
              </span>
            </h6>
            <h6>
              Delivery:
              <span className="price float-right">
                <span className="currencySymbol">$</span>
                1000
              </span>
            </h6>
            <h6>
              Total:
              <span className="price float-right">
                <span className="currencySymbol">$</span>
                {parseInt(totalProductCount) - 1000}
              </span>
            </h6>
            <p className="desc">
              Shipping and discount codes are added at checkout.
            </p>
            <button
              type="button"
              className="category-btn"
              onClick={() => Checkout(parseInt(totalProductCount) - 1000)}
            >
              checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
