import { useEffect, useState, useCallback } from "react";

const useOS = () => {
  const [os, setOS] = useState("");
  const [isIphone, setIsIphone] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const launchOnAndroidDevice = useCallback(() => {
    const url =
      "intent://test.app//#Intent;scheme=com.seamless_hrms;package=com.seamless_hrms;end";
    window.location.href = url;
  }, []);

  const launchOnIosDevice = useCallback(() => {
    const url = "org.reactjs.native.example.Seamless-HRMS://";
    window.location.href = url;
  }, []);

  useEffect(() => {
    const userAgent = navigator.userAgent;
    if (userAgent.indexOf("iPhone") > -1) {
      setOS("iPhone");
    } else {
      setOS("Android");
    }
  }, []);

  useEffect(() => {
    if (os === "iPhone") {
      setIsIphone(true);
    }
    if (!(os === "iPhone" || os === "Android")) {
      setIsMobile(false);
    }
  }, [os]);

  return {
    isIphone,
    isMobile,
    launchOnAndroidDevice,
    launchOnIosDevice,
  };
};

export default useOS;
