import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./overCard.css";

const OverCard = () => {
  const { id } = useParams(); // Get product ID from URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/users/overcard/${id}`
        );
        console.log(response.data.post);
        setProduct(response.data.post);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product details:", error);
        setLoading(false);
      }

      console.log("prodct set", product);
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="OverCard-container">
      {/* Section */}
      <div className="section">
        <div className="image">
          <img src={product.image} alt="Product" />
        </div>
        <div className="information">
          <h2>{product.title}</h2>
          <h2>Price: ₹{product.price}</h2>
          <h2>Discount: {product.discount}</h2>
          <h4>Size: {product.size}</h4>

          <div className="button">
            <form
              action={`/overCard/${product._id}`}
              method="post"
              id="addToCartForm"
            >
              <input id="AddToCart" type="submit" value="Add To Cart" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverCard;
