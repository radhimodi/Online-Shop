import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Section from "../../../component/Section";
import Header from "../../../component/Header";
import { useDispatch } from "react-redux";
import {
  camera_data,
  laptop_data,
  mobile_data,
  product_data,
} from "../../redux/action";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [mobiles, setMobiles] = useState([]);
  const [laptops, setLaptops] = useState([]);
  const [cameras, setCameras] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    loadPopularProducts();
    loadLatestMobiles();
    loadLatestLaptops();
    loadLatestCameras();
  }, []);
  useEffect(() => {
    loadPopularProducts();
  }, []);

  const responsive = {
    0: {
      items: 1,
    },
    576: {
      items: 2,
    },
    768: {
      items: 3,
    },
    992: {
      items: 4,
    },
  };

  const loadPopularProducts = async () => {
    dispatch(product_data()).then((data) => {
      setProducts(data);
    });
  };
  const loadLatestMobiles = async () => {
    dispatch(mobile_data()).then((data) => {
      setMobiles(data);
    });
  };
  const loadLatestLaptops = async () => {
    dispatch(laptop_data()).then((data) => {
      setLaptops(data);
    });
  };

  const loadLatestCameras = async () => {
    dispatch(camera_data()).then((data) => {
      setCameras(data);
    });
  };

  return (
    <div className="container-fluid">
      <Header />
      <div className=" navbar-collapse" id="navbarNav">
        <div className="container">
          <div className="col-md-12">
            <div className="featured-slider">
              <div className="row">
                <Section title="Popular Products" />
                <OwlCarousel
                  className="owl-carousel owl-item"
                  loop
                  nav={true}
                  autoplay={true}
                  margin={30}
                  items={4}
                  responsive={responsive}
                >
                  {products.map((data, index) => {
                    return (
                      <div className="item" key={index}>
                        <div className="item-img">
                          <img
                            src={`https://tznwvelv.directus.app/assets/${data.Image}`}
                            className="img-fluid"
                            alt="ronaldo"
                            style={{ width: "215px", height: "245px" }}
                          />
                        </div>
                        <div className="item-captions">
                          <div className="title">
                            <h6>
                              <Link to="#" className="d-block">
                                <span>${data.Price}</span>
                              </Link>
                            </h6>
                            <p className="category">
                              <Link
                                to={`/categoryDetail/${data.id}`}
                                className="d-block"
                              >
                                {data.Title}
                              </Link>
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </OwlCarousel>
              </div>
            </div>
          </div>

          <div className="col-md-12">
            <div className="featured-slider">
              <div className="row">
                <Section title="Latest Mobiles" />
                <OwlCarousel
                  className="owl-carousel owl-item"
                  loop
                  nav={true}
                  autoplay={true}
                  margin={30}
                  items={4}
                  responsive={responsive}
                >
                  {mobiles.map((data, index) => {
                    return (
                      <div className="item" key={index}>
                        <div className="item-img">
                          <img
                            src={`https://tznwvelv.directus.app/assets/${data.Image}`}
                            className="img-fluid"
                            alt="ronaldo"
                            style={{ width: "215px", height: "245px" }}
                          />
                        </div>
                        <div className="item-captions">
                          <div className="title">
                            <h6>
                              <Link
                                to={`/viewProfile/${data.id}`}
                                className="d-block"
                              >
                                <span>${data.Price}</span>
                              </Link>
                            </h6>
                            <p className="category">
                              <Link
                                to={`/categoryDetail/${data.id}`}
                                className="d-block"
                              >
                                {data.Title}
                              </Link>
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </OwlCarousel>
              </div>
            </div>
          </div>

          <div className="col-md-12">
            <div className="featured-slider">
              <div className="row">
                <Section title="Latest Leptops" />
                <OwlCarousel
                  className="owl-carousel owl-item"
                  loop
                  nav={true}
                  autoplay={true}
                  margin={30}
                  items={4}
                  responsive={responsive}
                >
                  {laptops.map((data, index) => {
                    return (
                      <div className="item" key={index}>
                        <div className="item-img">
                          <img
                            src={`https://tznwvelv.directus.app/assets/${data.Image}`}
                            className="img-fluid"
                            alt="ronaldo"
                            style={{ width: "215px", height: "245px" }}
                          />
                        </div>
                        <div className="item-captions">
                          <div className="title">
                            <h6>
                              <Link
                                to={`/viewProfile/${data.id}`}
                                className="d-block"
                              >
                                <span>${data.Price}</span>
                              </Link>
                            </h6>
                            <p className="category">
                              <Link
                                to={`/categoryDetail/${data.id}`}
                                className="d-block"
                              >
                                {data.Title}
                              </Link>
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </OwlCarousel>
              </div>
            </div>
          </div>

          <div className="col-md-12">
            <div className="featured-slider">
              <div className="row">
                <Section title="Latest Cameras" />
                <OwlCarousel
                  className="owl-carousel owl-item"
                  loop
                  nav={true}
                  autoplay={true}
                  margin={30}
                  items={4}
                  responsive={responsive}
                >
                  {cameras.map((data, index) => {
                    return (
                      <div className="item" key={index}>
                        <div className="item-img">
                          <img
                            src={`https://tznwvelv.directus.app/assets/${data.Image}`}
                            className="img-fluid"
                            alt="ronaldo"
                            style={{ width: "215px", height: "245px" }}
                          />
                        </div>
                        <div className="item-captions">
                          <div className="title">
                            <h6>
                              <Link to="#" className="d-block">
                                <span>${data.Price}</span>
                              </Link>
                            </h6>
                            <p className="category">
                              <Link
                                to={`/categoryDetail/${data.id}`}
                                className="d-block"
                              >
                                {data.Title}
                              </Link>
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
