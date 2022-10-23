import { useEffect } from "react";
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { fetchProducts, STATUSES } from "../store/productSlice";

const Products = () => {
  //   const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);

  //   const fetchProducts = async () => {
  //     const res = await axios.get("https://fakestoreapi.com/products");
  //     setProducts(res.data);
  //   };
  const handleAddCart = (product) => {
    dispatch(add(product));
  };

  useEffect(() => {
    // fetchProducts();
    dispatch(fetchProducts());
  }, []);

  if (status === STATUSES.LOADING) return <h2>Loading ...</h2>;
  else if (status === STATUSES.ERROR) return <h2>Something went wrong!</h2>;
  return (
    <div className='productsWrapper'>
      {products.map((product) => {
        return (
          <div className='card' key={product.id}>
            <img src={product.image} alt='' />
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>
            <button className='btn' onClick={() => handleAddCart(product)}>
              Add to cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
