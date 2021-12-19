import React, { useEffect, useState } from "react";
import Cart from "./Cart";
import "../../style/Cart.css";
import { Link } from "react-router-dom";
import { Button, Image, Modal, Grid } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import fetchCartData from "../../redux/action/cart";

const CartList = () => {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchCartData(dispatch); // eslint-disable-next-line
  }, []);

  const cart = useSelector((state) => state.cart);

  const renderCart = cart[0]
    ? cart[0].checkout_details.map((item, index) => {
        return (
          <Cart
            key={index}
            menu={item.menu}
            price={item.price}
            note={item.note}
          />
        );
      })
    : null;

  return (
    <div>
      <div className="ui container">
        <h1>Order Detail</h1>
        <div className="ui cards">{renderCart}</div>
        <div className="addmore">
          <Link to="/menu">
            <button className="ui basic button">
              <i className="icon shopping cart"></i>
              Add More
            </button>
          </Link>
        </div>
        <div id="paymentmethod">
          <h4>Payment Method</h4>

          <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={
              <button
                className="ui inverted green button"
                style={{ width: "100%", marginBottom: "5%" }}
              >
                <i className="money bill alternate outline icon"></i>SELECT
                PAYMENT METHOD
              </button>
            }
          >
            <Modal.Header>Payment Method</Modal.Header>

            <Modal.Content>
              <Modal.Description>
                <Grid>
                  <Grid.Row columns={4}>
                    <Grid.Column>
                      <Image
                        size="small"
                        src="https://cdn.worldvectorlogo.com/logos/bca-bank-central-asia.svg"
                      />
                    </Grid.Column>
                    <Grid.Column>
                      <Image
                        size="small"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Gopay_logo.svg/2560px-Gopay_logo.svg.png"
                      />
                    </Grid.Column>
                    <Grid.Column>
                      <Image
                        size="small"
                        src="https://previews.123rf.com/images/vectorgalaxy/vectorgalaxy1809/vectorgalaxy180901733/108951975-cash-vector-icon-isolated-on-transparent-background-cash-logo-concept.jpg"
                      />
                    </Grid.Column>
                    <Grid.Column>
                      <Image
                        size="small"
                        src="https://www.seekpng.com/png/full/113-1133604_debit-card-comments-ted-x-detroit-logo.png"
                      />
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Modal.Description>
            </Modal.Content>

            <Modal.Actions>
              <Button color="black" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button
                content="OK, Confirm"
                labelPosition="right"
                icon="checkmark"
                onClick={() => setOpen(false)}
                positive
              />
            </Modal.Actions>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default CartList;
