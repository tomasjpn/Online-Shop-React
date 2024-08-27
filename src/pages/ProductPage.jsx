// ProductPage.jsx
import { useParams } from "react-router-dom";
import ImageCarousel from "../components/ImageCarousel/ImageCarousel";
import Navbar from "../components/Navbar";
import styles from "../styles/ProductPage.module.css";

const ProductPage = () => {
  const { productId } = useParams(); // useParams ermöglicht den Zugriff auf die Parameter eines dynamischen Objekts

  return (
    <div className={styles.body}>
      <Navbar fixed={false} />
      <div>
        <p>Product ID: {productId}</p>
        <ImageCarousel />
      </div>
    </div>
  );
};

export default ProductPage;
