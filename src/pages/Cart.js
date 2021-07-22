import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, ListGroup, Image, Button, Card } from "react-bootstrap";
import { removeFromCart } from "../actions/cartAction";

const Cart = () => {
  const dispatch = useDispatch();
  useEffect(() => {}, []);
  const cartItems = useSelector((state) => state.cart.cartItems);

  console.log(cartItems);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <Row>
      <Col md={8}>
        <h2>سبد خرید</h2>
        {cartItems.length === 0 ? (
          <p>سبد خرید خالی است</p>
        ) : (
          <ListGroup variant="flush">
            {cartItems.map((item) => (
              <ListGroup.Item key={item.product}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>{item.name}</Col>
                  <Col md={2}>{item.price}$</Col>
                  <Col md={2}>
                    <Button
                      type="button"
                      varien="ligth"
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      <i className="fa fa-trash"></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup varient="flush">
            <ListGroup.Item>
              {cartItems.reduce((acc, item) => acc + item.price, 0)}$ مجموع
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};

export default Cart;
