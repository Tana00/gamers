import axios, { AxiosError, AxiosResponse } from "axios";
import { showToast, _create_UUID } from "../utils";

export const servicesBaseURL = {
  apiServiceURL: process.env.REACT_APP_API_SERVICE_BASEURL!,
  searchService: process.env.REACT_APP_SEARCH_SERVICE_BASEURL!,
};

const requestId = _create_UUID();

const apiResource = (baseURL: string, requestID?: string) => {
  const service = axios.create({
    baseURL: `${servicesBaseURL.apiServiceURL}/${baseURL}` /** whatever api {baseURL} you want to append, include this in your .env.local */,
    withCredentials: false,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Origin": baseURL,
      "X-RequestId": requestID || requestId,
    },
  });

  service.interceptors.response.use(
    (response: AxiosResponse) => {
      return response?.data;
    },
    (error: AxiosError) => {
      if (error?.response === undefined)
        showToast("Unable to connect", "error");
      else {
        const status = error?.response?.status;
        const errors: any = error?.response?.data;

        if (status === 404) {
          return showToast("Resource not found", "error");
        }

        const errorMessage = errors?.error || errors?.message;

        errorMessage && showToast(errorMessage, "error");

        return Promise.reject(errors);
      }
    }
  );

  interface IPostProps {
    url: string;
    payload?: object;
  }

  return {
    get: async (url: string) => {
      try {
        const data = service.get(url);
        const resolvedData = await Promise.resolve(data);
        const exactData = resolvedData?.data;
        return exactData;
      } catch (error) {
        return Promise.reject(error);
      }
    },

    post: async ({ url, payload }: IPostProps) => {
      try {
        const data = service.post(url, payload);
        const resolvedData = await Promise.resolve(data);
        return resolvedData;
      } catch (error) {
        return Promise.reject(error);
      }
    },

    patch: async ({ url, payload }: IPostProps) => {
      try {
        const data = service.patch(url, payload);
        const resolvedData = await Promise.resolve(data);
        return resolvedData;
      } catch (error) {
        return Promise.reject(error);
      }
    },

    delete: async ({ url, payload }: IPostProps) => {
      try {
        const data = service.delete(url, payload);
        const resolvedData = await Promise.resolve(data);
        return resolvedData;
      } catch (error) {
        return Promise.reject(error);
      }
    },

    put: async ({ url, payload }: IPostProps) => {
      try {
        const data = service.put(url, payload);
        const resolvedData = await Promise.resolve(data);
        return resolvedData;
      } catch (error) {
        return Promise.reject(error);
      }
    },
  };
};

export const searchService = (requestID?: string) =>
  apiResource(servicesBaseURL.searchService, requestID);
