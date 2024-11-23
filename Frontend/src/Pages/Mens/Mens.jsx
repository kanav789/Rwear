import React, { useEffect, useState } from "react";
import CardRwears from "../../Components/Card/Card";
import axios from "axios";
function Mens() {
  const [mens, setMens] = useState({});
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/users/mens"
        );
        console.log(response.data.mens);
        setMens(response.data.mens);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, []);
  return (
    <div>
      <div className="Mens">
        <CardRwears product={mens} />
      </div>
    </div>
  );
}

export default Mens;
