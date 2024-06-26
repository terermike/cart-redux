import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    title: "Product 1",
    price: 29.99,
    description: "This is the first product",
  },
  {
    id: "p2",
    title: "Product 2",
    price: 59.99,
    description: "This is the second product",
  },
  {
    id: "p3",
    title: "Product 3",
    price: 19.99,
    description: "This is the third product",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.key}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
