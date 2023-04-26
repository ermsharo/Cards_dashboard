import { useState, useEffect } from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';

interface UseAxiosProps<T> {
  url: string;
  data?: T;
}

interface UseAxiosState<T> {
  data: T | null;
  error: AxiosError<T> | null;
  isLoading: boolean;
  refetch: () => void;
}


interface UsePostState<T> {
  data: T | null;
  error: AxiosError<T> | null;
  isLoading: boolean;
  isSuccess: boolean;
  postData: (payload: T) => Promise<void>;
}

export const useAxios = <T>({ url }: UseAxiosProps<T>): UseAxiosState<T> => {
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


export const useAxiosPost = <T>({ url }: UseAxiosProps<T>): UsePostState<T> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<AxiosError<T> | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const postData = async (payload: T): Promise<void> => {
    setIsLoading(true);
    setIsSuccess(false);

    try {
      const response: AxiosResponse<T> = await axios.post(url, payload);
      setData(response.data);
      setIsLoading(false);
      setIsSuccess(true);
    } catch (error: unknown) {
      setError(error as AxiosError<T>);
      setIsLoading(false);
      setIsSuccess(false);
    }
  };

  return { data, error, isLoading, isSuccess, postData };
};



