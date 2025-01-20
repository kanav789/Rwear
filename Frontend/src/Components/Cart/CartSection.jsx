import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CartSection.css";
import { toast } from "react-toastify";
import Loader from "../Loader/Loader";
const CartSection = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCartItems = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("No token found");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASEURL}/api/users/cart  `,
          {
            headers: {
              Authorization: `Bearer ${token}`, // Include the token in the Authorization header
            },
          }
        );
        setCartItems(response.data.cart);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching cart items:", error);
        toast.error("Error fetching cart items:");
        setLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  const DeleteCart = async (id) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        return console.log("No token found");
      }

      // Perform the DELETE request instead of POST
      const response = await axios.post(
        `http://localhost:8080/api/users/deletecart/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Item deleted:", response);
      toast.success("Item Deleted");
      // Remove the deleted item from the cartItems state
      setCartItems((prevItems) => prevItems.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Error deleting cart item:", error);
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="cart-container">
      <h1 className="cart-title">Your Cart</h1>
      {cartItems.length === 0 ? (
        <h5 className="empty-cart">Your cart is empty.</h5>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div className="cart-item" key={item._id}>
              <img
                src={item.image}
                alt={item.title}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <h2>{item.title}</h2>
                <h6>Price: ₹{item.price}</h6>
                <h6>Size: {item.size}</h6>
                <button
                  onClick={() => DeleteCart(item._id)}
                  className="delete-item-btn"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartSection;
