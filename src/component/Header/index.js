import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { size } from "lodash";
import { category_data } from "../../containers/redux/action";
import { useDispatch } from "react-redux";
import { ROUTE_CATEGORY, ROUTE_HOME, ROUTE_SIGN_IN } from "../../containers/routes/routes";

const Header = () => {
  const [category, setCategory] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    loadCategory();
  }, []);

  const loadCategory = async () => {
    dispatch(category_data()).then((data) => {
      if (size(data) > 0) {
        setCategory(data);
      }
    });
  };

  const logout = () => {
    localStorage.clear();
    window.location.href = ROUTE_SIGN_IN;
  };

  return (
    <>
      <header className="header">
        <div className="logo-menu">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-12">
                <h1 className="content-title">Online Shop</h1>
              </div>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto">
              <li className={window.location.pathname == ROUTE_HOME ? "nav-item active" : "nav-item "}>
                  <Link to={ROUTE_HOME} className="nav-link">
                   Home
                  </Link>
                </li>
                {category &&
                  category.map((list, index) => (
                    <li className={window.location.pathname == `/category/${list.id}`? "nav-item active" : "nav-item "}>
                      <Link to={"/category/" + list.id} className="nav-link">
                        {list.Title}
                      </Link>
                    </li>
                  ))}
                <li className={window.location.pathname == ROUTE_CATEGORY ? "nav-item active" : "nav-item "}>
                  <Link to={ROUTE_CATEGORY} className="nav-link">
                    All Categories
                  </Link>
                </li>
              </ul>
              <Link
                to="/Logout"
                className="btn btn-gradient btn-small"
                onClick={logout}
              >
                LogOut
              </Link>
              <div className="action-btn d-md-none d-block text-center mb-4">
                <Link to="/Login" className="btn btn-gradient btn-small">
                  Login
                </Link>
                <Link to="/Signup" className="btn btn-gradient btn-small">
                  signup
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
export default Header;
