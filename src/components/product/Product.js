import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <Card className="m-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">{product.name}</Card.Title>
        </Link>
      </Card.Body>
      <Card.Text as="h4">{product.price}$</Card.Text>
    </Card>
  );
};

export default Product;
