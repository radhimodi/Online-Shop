import React, { useEffect, useState } from "react";
import { product_by_category_data } from "../../redux/action";
import { size } from "lodash";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../../../component/Header";

const CategoryListPage = (props) => {
  const id = props.match.params.id;
  const [categoryList, setCategoryList] = useState([]);
  const [categoryTitle, setCategoryTitle] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    loadCategoryList();
  }, []);

  const loadCategoryList = async () => {
    dispatch(product_by_category_data(id)).then((data) => {
      if (size(data) > 0) {
        setCategoryList(data);
        setCategoryTitle(data[0].Category.Title);
      }
    });
  };
  
  return (
    <div className="container-fluid">
      <Header />
      <div className="col-md-12">
        <h3 className="category-title">{categoryTitle}</h3>
      </div>
      <div className="container">
        <div className="col-md-12">
          <div className="row">
            {categoryList.map((data, index) => {
              return (
                <div className="col-md-6 category-blog">
                  <img
                    src={`https://tznwvelv.directus.app/assets/${data.Image}`}
                    className="img-fluid"
                    alt="ronaldo"
                    style={{
                      width: "405px",
                      height: "301px",
                      margin: "30px 0 30px",
                    }}
                  />
                  <h6>
                    <Link to={`/categoryDetail/${data.id}`} className="d-block">
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
export default CategoryListPage;
