import React from "react";
import "../../style/Form.css";
import { Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Form = () => {
  const friendOptions = [
    {
      key: "L1N1",
      text: "Lantai 1 nomor 1",
      value: "L1N1",
    },
    {
      key: "L1N2",
      text: "Lantai 1 nomor 2",
      value: "L1N2",
    },
    {
      key: "L1N3",
      text: "Lantai 1 nomor 3",
      value: "L1N3",
    },
    {
      key: "L1N4",
      text: "Lantai 1 nomor 4",
      value: "L1N4",
    },
    {
      key: "L1N5",
      text: "Lantai 1 nomor 5",
      value: "L1N5",
    },
    {
      key: "L2N1",
      text: "Lantai 2 nomor 1",
      value: "L2N1",
    },
    {
      key: "L2N2",
      text: "Lantai 2 nomor 2",
      value: "L2N2",
    },
    {
      key: "L2N3",
      text: "Lantai 2 nomor 3",
      value: "L2N3",
    },
    {
      key: "L2N4",
      text: "Lantai 2 nomor 4",
      value: "L2N4",
    },
    {
      key: "L2N5",
      text: "Lantai 2 nomor 5",
      value: "L2N5",
    },
  ];

  // const [nickName, setNickname] = useState("");
  // const [table, setTable] = useState("");
  // const [email, setEmail] = useState("");

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
                placeholder="Select Table"
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
              <Link to="/menu">
                <button className="ui blue button">Submit</button>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
