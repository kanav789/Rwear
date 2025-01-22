import React, { useEffect, useState } from "react";
import CardRwears from "../Card/Card";
import Loader from "../Loader/Loader";
import axios from "axios";
import Footer from "../Footer/Footer";

function Home() {
  const [mens, setMens] = useState({});
  const [loading, setLoading] = useState(true); // Loader state

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASEURL}/api/users/mens`
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

  // Women
  const [womens, setWomens] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
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
  if (loading) {
    return <Loader />;
  }
  return (
    <div>
      <div className="TrendingSectionForMen">
        <h1 className="flex justify-center mt-[20vh] text-[30px] font-extrabold">
          MensTrendingSection
        </h1>
        <CardRwears product={mens} className="products" />
      </div>
      {/* women  */}
      <div className="TrendingSectionForWomen">
        <h1 className="flex justify-center mt-10 text-[30px] font-extrabold">
          MensTrendingSection
        </h1>

        <CardRwears product={womens} className="products" />
      </div>
    </div>
  );
}

export default Home;
