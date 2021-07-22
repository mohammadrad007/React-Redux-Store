import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button } from "react-bootstrap";
import { productItemAction } from "./../actions/productAction";
import { addToCart } from "./../actions/cartAction";

const Product = (props) => {
  const id = props.match.params.id;
  const dispatch = useDispatch();
  const productPackage = useSelector((state) => state.productItem);

  const { loading, product } = productPackage;

  useEffect(() => {
    dispatch(productItemAction(id));
  }, [id, dispatch]);

  const addToCartHandler = () => {
    dispatch(addToCart(id));
    props.history.push(`/cart/${id}`);
  };

  return (
    <>
      <Link to="/" className="btn btn-ligth">
        بازگشت به صفحه ی اصلی
      </Link>
      {loading ? (
        <h2>در حال بارگزاری ...</h2>
      ) : (
        <Row>
          <Col md={6}>
            <Image src={product.image} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h4>{product.name}</h4>
              </ListGroup.Item>
              <ListGroup.Item>
                <span>{product.price}$</span>
              </ListGroup.Item>
              <ListGroup.Item>
                <span>{product.description}</span>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Button
                  className="btn-block"
                  onClick={addToCartHandler}
                  type="button"
                >
                  افزودن به سبد خرید
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      )}
    </>
  );
};
export default Product;
