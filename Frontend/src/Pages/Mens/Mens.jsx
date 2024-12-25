import React, { useEffect, useState } from "react";
import CardRwears from "../../Components/Card/Card";
import axios from "axios";
import Loader from "../../Components/Loader/Loader";

function Mens() {
  const [mens, setMens] = useState({});
  const [loading, setLoading] = useState(true); // Loader state

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
      } finally {
        setLoading(false); // Stop loader after fetching
      }
    };
    fetchProduct();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <div className="Mens">
        <CardRwears product={mens} />
      </div>
    </div>
  );
}

export default Mens;
