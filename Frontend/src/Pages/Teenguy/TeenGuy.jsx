import React, { useEffect, useState } from "react";
import CardRwears from "../../Components/Card/Card";
import axios from "axios";
import Loader from "../../Components/Loader/Loader";
function Teenguy() {
  const [womens, setWomens] = useState({});
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASEURL}/api/users/Teenguy`
        );
        console.log(response.data.Teenguy);
        setWomens(response.data.Teenguy);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, []);
  if (Loading) return <Loader />;
  return (
    <div>
      <div className="Teenguys">
        <CardRwears product={Teenguy} />
      </div>
    </div>
  );
}

export default Teenguy;
