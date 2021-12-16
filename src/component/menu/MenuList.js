import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { block } from "strip-comments";
import { fetchMenuData } from "../../redux/action/menu";
import "../../style/Menu.css";
import Menu from "./Menu";

const MenuList = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const dispatch = useDispatch();

  const menu = useSelector((state) => state.menu);

  useEffect(() => {
    fetchMenuData(dispatch); // eslint-disable-next-line
  }, []);

  const renderMenu = menu.map((menu, index) => {
    return <Menu key={index} menu={menu} />;
  });

  return (
    <div>
      <Slider style={{ display: block }} {...settings}>
        <div>
          <img
            className="banner"
            alt=""
            src="https://wallpapercave.com/wp/wp1923703.jpg"
          />
        </div>
        <div>
          <img
            className="banner"
            alt=""
            src="https://wallpapersmug.com/large/e1f15f/minimal-coffee-cup.jpg"
          />
        </div>
        <div>
          <img
            className="banner"
            alt=""
            src="https://wallpaperaccess.com/full/1157976.jpg"
          />
        </div>
      </Slider>
      <div className="ui secondary menu box">
        <a href="#!" className="active item">
          All
        </a>
        <a href="#!" className="item">
          Coffee
        </a>
        <a href="#!" className="item">
          Coffee Mocktail
        </a>
        <a href="#!" className="item">
          Non-Coffee
        </a>
        <a href="/menu" className="item">
          Mocktail
        </a>
        <a href="/menu" className="item">
          Food
        </a>
      </div>

      <div className="ui container">
        <div className="ui link cards box empty-space">{renderMenu}</div>
      </div>
      <div id="footer" className="ui raised segment total">
        <div className="item-add left">
          <h2>Total Price</h2>
          <b>Rp. 117.000</b>
        </div>

        <div style={{ marginRight: "3%" }}>
          <Link to="/carts">
            <button
              className="ui teal button"
              style={{ margin: "10%", width: "100%" }}
            >
              <i className="shopping cart icon"></i>View Cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuList;
