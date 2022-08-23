import { useState, useCallback, ReactNode } from "react";
import { Task } from "../types/Task";

type RequestConfig = {
  url: string;
  method?: string;
  headers?: any;
  body?: any;
};

const useHttp = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | ReactNode | null>(null);

  const sendRequest = useCallback(
    async (requestConfig: RequestConfig, applyData: (data: Task) => void) => {
      const { url, method, headers, body } = requestConfig;

      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(url, {
          headers,
          method: method ?? "GET",
          body: JSON.stringify(body) || null,
        });

        if (!response.ok) {
          throw new Error("Request failed!");
        }

        const data = await response.json();

        applyData(data);
      } catch (err) {
        setError((err as any).message || "Something went wrong!");
      }
      setIsLoading(false);
    },
    []
  );

  return { sendRequest, isLoading, error };
};

export default useHttp;
