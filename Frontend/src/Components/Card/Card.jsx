import React, { useEffect, useState } from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const CardRwears = ({ product }) => {
  return (
    <div className="CardRwears">
      {product.length > 0 ? (
        product.map((item) => (
          <div className="card" key={item._id}>
            <img src={item.image} alt="Product Image" />
            <h3>{item.title}</h3>
            <button className="add-to-cart">
              <Link to={`/overCard/${item._id}`}>Check Details</Link>
            </button>
          </div>
        ))
      ) : (
        <p>No posts found.</p>
      )}
    </div>
  );
};

export default CardRwears;
