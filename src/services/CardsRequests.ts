/* eslint-disable no-mixed-operators */

import axios from "axios";
import { useEffect, useState } from "react";

export const CardsRequests = () => {
  const [data, setData] = useState<any>([]);
  const [error, setError] = useState<boolean | String>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async (): Promise<void> => {
    setLoading(true);
    setError(false);
    try {
      const response = await axios.get<any>(
        `http://localhost:5000/TCG/new`
      );

      setData(response.data);
      console.log(response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios Error with Message: " + error.message);
        setError(true);
      }
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [data, error, loading] as const;
};
