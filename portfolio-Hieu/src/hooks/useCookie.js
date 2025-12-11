import { useState, useEffect } from "react";

export const useCookie = (name) => {
  const [cookieValue, setCookieValue] = useState(null);

  const getCookie = (cookieName) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${cookieName}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
  };

  useEffect(() => {
    setCookieValue(getCookie(name));
  }, [name]);

  const setCookie = (value, days = 7) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/`;
    setCookieValue(value);
  };

  const removeCookie = () => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    setCookieValue(null);
  };

  return { 
    cookie: cookieValue, 
    setCookie, 
    removeCookie, 
    getCookie 
  };
};
