import React from "react";
import "../../style/Form.css";
import { Dropdown } from "semantic-ui-react";

const Form = () => {
  const friendOptions = [
    {
      key: "Jenny Hess",
      text: "Jenny Hess",
      value: "Jenny Hess",
      image: { avatar: true, src: "/images/avatar/small/jenny.jpg" },
    },
    {
      key: "Elliot Fu",
      text: "Elliot Fu",
      value: "Elliot Fu",
      image: { avatar: true, src: "/images/avatar/small/elliot.jpg" },
    },
    {
      key: "Stevie Feliciano",
      text: "Stevie Feliciano",
      value: "Stevie Feliciano",
      image: { avatar: true, src: "/images/avatar/small/stevie.jpg" },
    },
    {
      key: "Christian",
      text: "Christian",
      value: "Christian",
      image: { avatar: true, src: "/images/avatar/small/christian.jpg" },
    },
    {
      key: "Matt",
      text: "Matt",
      value: "Matt",
      image: { avatar: true, src: "/images/avatar/small/matt.jpg" },
    },
    {
      key: "Justen Kitsune",
      text: "Justen Kitsune",
      value: "Justen Kitsune",
      image: { avatar: true, src: "/images/avatar/small/justen.jpg" },
    },
    {
      key: "Jenny Hess",
      text: "Jenny Hess",
      value: "Jenny Hess",
      image: { avatar: true, src: "/images/avatar/small/jenny.jpg" },
    },
    {
      key: "Elliot Fu",
      text: "Elliot Fu",
      value: "Elliot Fu",
      image: { avatar: true, src: "/images/avatar/small/elliot.jpg" },
    },
    {
      key: "Stevie Feliciano",
      text: "Stevie Feliciano",
      value: "Stevie Feliciano",
      image: { avatar: true, src: "/images/avatar/small/stevie.jpg" },
    },
    {
      key: "Christian",
      text: "Christian",
      value: "Christian",
      image: { avatar: true, src: "/images/avatar/small/christian.jpg" },
    },
    {
      key: "Matt",
      text: "Matt",
      value: "Matt",
      image: { avatar: true, src: "/images/avatar/small/matt.jpg" },
    },
    {
      key: "Justen Kitsune",
      text: "Justen Kitsune",
      value: "Justen Kitsune",
      image: { avatar: true, src: "/images/avatar/small/justen.jpg" },
    },
  ];

  return (
    <div className="ui container" style={{ padding: "10%" }}>
      <div className="ui card" style={{ width: "100%" }}>
        <div className="content">
          <div className="center aligned header">FORM</div>
          <div className="left aligned description">
            <div className="form-input">
              <div className="ui input" style={{ width: "100%" }}>
                <input type="text" placeholder="Nick Name*" />
              </div>
            </div>
            <div className="form-input">
              <Dropdown
                placeholder="Select Friend"
                fluid
                selection
                options={friendOptions}
              />
            </div>
            <div className="form-input">
              <div className="ui input" style={{ width: "100%" }}>
                <input
                  type="text"
                  style={{ width: "100%" }}
                  placeholder="Email"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="extra content">
          <div className="actions">
            <button className="ui secondary button">Clear</button>
            <span className="primary-btns">
              <button className="ui blue button">Submit</button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
