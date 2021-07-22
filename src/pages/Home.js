import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "./../components/product/Product";
import { productListAction } from "../actions/productsAction";

const Home = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, products } = productList;

  useEffect(() => {
    dispatch(productListAction());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <h2>در حال بارگزاری</h2>
      ) : (
        <>
          <h1>محصولات</h1>
          <Row>
            {products.map((item) => (
              <Col sm={12} md={6} lg={4} key={item._id}>
                <Product product={item} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </div>
  );
};

export default Home;
