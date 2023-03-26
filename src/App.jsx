import { Nav } from "./Nav";
import { Product } from "./Product";
import { products } from "./products";
import "./assets/css/style.css";

export const App = () => {
  const Cards = products.map((product) => {
    console.log(product);
    return <Product {...product} key={product.id} />;
  });
  return (
    <div className="App">
      <Nav />
      <section className="card-list">{Cards}</section>
    </div>
  );
};
