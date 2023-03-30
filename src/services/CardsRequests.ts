import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export const CardsRequests = (obj: any) => {
  const [data, setData] = useState<any>([]);
  const [error, setError] = useState<boolean | String>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const updateCardStatus = useCallback(async () => {
    setLoading(true);
    if (obj) {
      let data = JSON.stringify(obj);

      console.log("obj here", obj);
      const config = {
        method: "post",
        url: "http://localhost:5000/TCG/new",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      await axios(config)
        .then(function (response) {
          console.log("response: " + response);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
    setLoading(false);
  }, [obj]);

  const fetchData = async (): Promise<void> => {
    setLoading(true);
    setError(false);
    try {
      const response = await axios.get<any>(`http://localhost:5000/TCG/new`);
      console.log("response ->", response.data);
      setData(response.data);
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

  useEffect(() => {
    updateCardStatus();
    fetchData();
  }, [obj]);

  return [data, error, loading] as const;
};

// const updateCardStatus = async (obj: any) => {
//   let data = JSON.stringify({
//     obj,
//   });

//   const config = {
//     method: "post",
//     url: "http://localhost:5000/TCG/new",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     data: data,
//   };

//   await axios(config)
//     .then(function (response) {})
//     .catch(function (error) {
//       console.error(error);
//     });
// };
