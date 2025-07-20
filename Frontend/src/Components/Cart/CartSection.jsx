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
  const checkout = async (id, price) => {
    try {
      const result = await axios.post(
        `${import.meta.env.VITE_BASEURL}/api/checkout/create-order`,
        {
          amount: price,
        }
      );
      console.log(result);

      const order = result.data.order;
      //  const order = await result.order;
      console.log(order, "order");

      const options = {
        key: "rzp_test_H8tZtmny8n80nM",
        amount: order.amount,
        currency: order.currency,
        name: "Rwear",
        description: "Purchase Product",
        image:
          "https://avatars.githubusercontent.com/u/106293653?s=400&u=303436d211b34380b07e9be3e3175e8b604cc0b4&v=4o",

        handler: function (response) {
          alert(
            `Payment successful. Payment ID: ${response.razorpay_payment_id}`
          );
          // You can now verify the payment on your backend
        },
        prefill: {
          name: "Customer Name",
          email: "customer@example.com",
          contact: "9999999999",
        },
        notes: {
          address: "Customer Address",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.log("Error creating order:", error);
      toast.error("Failed to create order. Please try again.");
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="cart-container">
      <h1 className="mt-10 text-center text-[25px]">Your Cart</h1>
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
                <div className="flex gap-5">
                  <button
                    onClick={() => DeleteCart(item._id)}
                    className="delete-item-btn"
                  >
                    Delete
                  </button>
                  <button
                    className="pay-now-btn"
                    onClick={() => {
                      checkout(item._id, item.price);
                      // console.log(item.price);
                    }}
                  >
                    Pay Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartSection;
