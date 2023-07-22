import { useEffect, useState } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleOnine = () => {
      setIsOnline(true);
    };

    const handleOffline = () => {
      setIsOnline(false);
    };
    window.addEventListener("online", handleOnine);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnine);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return isOnline;
};

export default useOnline;
