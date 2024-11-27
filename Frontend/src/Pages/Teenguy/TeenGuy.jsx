import React, { useEffect, useState } from "react";
import CardRwears from "../../Components/Card/Card";
import axios from "axios";
function Teenguy() {
  const [womens, setWomens] = useState({});
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/users/Teenguy"
        );
        console.log(response.data.Teenguy);
        setWomens(response.data.Teenguy);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, []);

  return (
    <div>
      <div className="Teenguys">
        <CardRwears product={Teenguy} />
      </div>
    </div>
  );
}

export default Teenguy;
