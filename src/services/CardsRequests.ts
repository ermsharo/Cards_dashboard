import { useState, useEffect } from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';

interface UseAxiosProps<T> {
  url: string;
}

interface UseAxiosState<T> {
  data: T | null;
  error: AxiosError<T> | null;
  isLoading: boolean;
  refetch: () => void;
}

const useAxios = <T>({ url }: UseAxiosProps<T>): UseAxiosState<T> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<AxiosError<T> | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchData = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const response: AxiosResponse<T> = await axios.get(url);
      setData(response.data);
      setIsLoading(false);
    } catch (error: unknown) {
      setError(error as AxiosError<T>);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  const refetch = (): void => {
    fetchData();
  };

  useEffect(() => {
    setIsLoading(true);
  }, [url]);

  return { data, error, isLoading, refetch };
};

export default useAxios;