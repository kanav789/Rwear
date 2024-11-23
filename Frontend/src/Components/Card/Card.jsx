import React, { useEffect, useState } from "react";
import "./Card.css";

const CardRwears = ({ product }) => {
  return (
    <div className="CardRwears">
      {product.length > 0 ? (
        product.map((item) => (
          <div className="card" key={item._id}>
            <img src={item.image} alt="Product Image" />
            <h3>{item.title}</h3>
            <button className="add-to-cart">
              <a href={`/overCard/${item._id}`}>Check Details</a>
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
