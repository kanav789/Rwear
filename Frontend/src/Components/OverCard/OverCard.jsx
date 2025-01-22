import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./OverCard.css";
import { toast } from "react-toastify";
import Loader from "../Loader/Loader";

const OverCard = () => {
  const { id } = useParams(); // Get product ID from URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          ` ${import.meta.env.VITE_BASEURL}/api/users/overcard/${id}`
        );

        setProduct(response.data.post);
        setLoading(false);

        toast.success("Product details loaded successfully!");
      } catch (error) {
        console.error("Error fetching product details:", error);
        setLoading(false);

        toast.error("Failed to load product details.");
      }
    };

    fetchProduct();
  }, [id]);

  const AddCartProduct = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      if (!token) {
        toast.warn("Please login first!");
        return;
      }

      // Send POST request to add the product to the user's cart
      const response = await axios.post(
        `http://localhost:8080/api/users/product/cart/${product._id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Response:", response); // Log success message and updated cart
      toast.success("Product added to cart successfully!");
    } catch (error) {
      console.error(
        "Error adding product to cart:",
        error.response?.data || error.message
      );
      toast.error(
        `Failed to add product to cart: ${
          error.response?.data?.message || "Server error"
        }`
      );
    }
  };

  if (loading) {
    return <Loader />;
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
              onSubmit={AddCartProduct}
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
