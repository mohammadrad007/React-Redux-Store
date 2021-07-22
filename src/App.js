import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" exact component={Home} />
          <Route path="/cart/:id?" component={Cart} />
          <Route path="/product/:id" component={Product} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
