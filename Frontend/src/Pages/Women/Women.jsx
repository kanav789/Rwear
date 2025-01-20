import React, { useEffect, useState } from "react";
import CardRwears from "../../Components/Card/Card";
import axios from "axios";
import Loader from "../../Components/Loader/Loader";
function Women() {
  const [womens, setWomens] = useState({});
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASEURL}/api/users/womens`
        );
        console.log(response.data.women);
        setWomens(response.data.women);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, []);
  if (Loading) {
    return <Loader />;
  }

  return (
    <div>
      <div className="Womens">
        <CardRwears product={womens} />
      </div>
    </div>
  );
}

export default Women;
