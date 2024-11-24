import React, { useEffect, useState } from "react";
import CardRwears from "../../Components/Card/Card";
import axios from "axios";
function Women() {
  const [womens, setWomens] = useState({});
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/users/womens"
        );
        console.log(response.data.women);
        setWomens(response.data.women);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, []);

  return (
    <div>
      <div className="Womens">
        <CardRwears product={womens} />
      </div>
    </div>
  );
}

export default Women;
