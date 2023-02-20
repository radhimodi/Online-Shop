import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Header from "../../../component/Header";
import { category_data } from "../../redux/action";
import { size } from "lodash";
import { Link } from "react-router-dom";

const CategoryPage = () => {
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
  
  return (
    <div className="container-fluid">
      <Header />
      <div className="col-md-12">
        <h3 className="category-title">Categories</h3>
      </div>
      <div className="container">
        <div className="col-md-12">
          <div className="row">
            {category.map((data, index) => {
              return (
                <div className="col-md-6 category-blog">
                  <img
                    src={`https://tznwvelv.directus.app/assets/${data.Category_Image}`}
                    className="img-fluid"
                    alt="ronaldo"
                    style={{
                      width: "405px",
                      height: "301px",
                      margin: "30px 0 30px",
                    }}
                  />
                  <h6>
                    <Link to={`category/${data.id}`} className="d-block">
                      <span>${data.Title}</span>
                    </Link>
                  </h6>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CategoryPage;
