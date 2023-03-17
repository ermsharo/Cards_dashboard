/* eslint-disable no-mixed-operators */

import axios from "axios";
import { useEffect, useState } from "react";

const findValueByKey: any = (obj: object, keyToFind: String) => {
  return (
    Object.entries(obj).reduce(
      (acc, [key, value]) =>
        key === keyToFind
          ? acc.concat(value)
          : typeof value === "object" && value
          ? acc.concat(findValueByKey(value, keyToFind))
          : acc,
      []
    )[0] || []
  );
};

const formatData = (data: any) => {
  return data.map((item: object) => {
    return {
      title: findValueByKey(findValueByKey(item, "title"), "rendered"),
      description: findValueByKey(findValueByKey(item, "content"), "rendered"),
      projectSlug: findValueByKey(item, "slug"),
      projectRepoLink: findValueByKey(item, "productionlink"),
      projectProdLink: findValueByKey(item, "productionlink"),
      projectSmallDescription: findValueByKey(item, "small_description"),
      tags: findValueByKey(item, "tags"),
    };
  });
};

export const ProjectRequests = () => {
  const [data, setData] = useState<any>([]);
  const [error, setError] = useState<boolean | String>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async (): Promise<void> => {
    setLoading(true);
    setError(false);
    try {
      const response = await axios.get<any>(
        `http://portfolio.local/wp-json/wp/v2/posts`
      );

      setData(formatData(response.data));
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

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [data, error, loading] as const;
};
