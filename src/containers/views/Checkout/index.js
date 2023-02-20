import React from "react";
import { useDispatch } from "react-redux";
import Header from "../../../component/Header";
import { place_order } from "../../redux/action";
import { ROUTE_SUCCESS_ORDER } from "../../routes/routes";
const Checkout = (props) => {
  const dispatch = useDispatch();
  const productInfo = JSON.parse(localStorage.getItem("cart_info"));
  const totalProduct = localStorage.getItem("total_product")
    ? localStorage.getItem("total_product")
    : 0;
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const addDays = (n) => {
    var t = new Date();
    t.setDate(t.getDate() + n);
    var month = monthNames[t.getMonth()];
    var date = "0" + t.getDate();
    month = month;
    date = date.slice(-2);
    var date = month + " " + date + "," + t.getFullYear();
    return date;
  };

  const placeOrder = () => {
    const orderDetail = {
      Name: "alpha Test by API",
      Address: "alpha by API by Radhika ",
      Order_Details: productInfo ? productInfo : [],
      Order_Total: totalProduct,
    };
    dispatch(place_order(orderDetail));
    props.history.push(ROUTE_SUCCESS_ORDER);
  };

  return (
    <div className="container-fluid">
      <Header />
      <div className="col-md-12">
        <h3 className="category-title">Checkout</h3>
      </div>
      <div className="col-md-6 checkout-box">
        <h6>Name</h6>
        <h3>Jhon Duo</h3>
        <h4>Shipping Address</h4>
        <p>
          plusonx india A-204 ,SNS Atria Opposite Jolly Party plot,vesu ,surat
          -395007
        </p>
      </div>
      <div className="col-md-6 checkout-box">
        <input type="radio" value="" checked="checked" />
        Cash on Delivery
        <br />
        <input type="radio" value="" />
        Credit/Debit Car
        <br />
        <input type="radio" value="" />
        Pay Via UPI
        <br />
      </div>
      <div className="col-md-6 checkout-box">
        <p>Order Date: {addDays(0)}</p>
        <p>Delivery Date: {addDays(2)}</p>
        <p>Total: ${totalProduct}</p>
        <br />
      </div>
      <button type="button" className="category-btn" onClick={placeOrder}>
        Place Order
      </button>
    </div>
  );
};
export default Checkout;
