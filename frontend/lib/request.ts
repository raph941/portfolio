import qs from "qs";
import { message } from "antd";

interface MakeRequestProps {
  /**
   * Path of the API route
   */
  path: string;
  /**
   * URL params object, will be stringified, Defaults to {}
   */
  urlParamsObject?: object;
  /**
   * Options passed to fetch, Defaults to {}
   */
  options?: object;
}

export const makeRequest = async ({
  path,
  urlParamsObject = {},
  options = {},
}: MakeRequestProps) => {
  const authorizationToken = process.env.API_TOKEN;
  // Merge default and user options
  const mergedOptions: RequestInit = {
    headers: {
      "Content-Type": "application/json",
      Authorization: authorizationToken ? `Bearer ${authorizationToken}` : "",
    },
    ...options,
  };

  // Build request URL
  const parsedQueryString = qs.stringify(urlParamsObject);
  const queryString = parsedQueryString ? `?${parsedQueryString}` : "";

  // "http://localhost:1337" - Strapi's default localhost address
  const requestUrl = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api${path}${queryString}`;

  // Trigger API call
  const response = await fetch(requestUrl, mergedOptions);

  const data = await response.json();

  // Handle response
  if (!response.ok) {
    message.error(data?.error?.message)
    // throw new Error(`An error occured please try again`);
  }

  return data;
};
