import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setOtherProductDetails } from '../redux/sellerSlice';

const useFetchSellerProductsOnly = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSellerOnlyProducts = async () => {
      try {
        const response = await axios.get("https://ecommerce-platform-backend-ogt2oko7q-khuzzzis-projects.vercel.app/api/v1/seller/showSellerProducts", {
          withCredentials: true
        });

        dispatch(setOtherProductDetails(response.data.sellerOnlyProductDetails));
      } catch (error) {
        setError(error);
        console.error("Error fetching seller products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSellerOnlyProducts();
  }, [dispatch]);

  return { loading, error };
};

export default useFetchSellerProductsOnly;
