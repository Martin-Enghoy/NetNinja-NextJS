import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      // router.go(1) -> go forwards
      // router.go(-1) -> go backwards
      router.push("/");
    }, 3500);
  }, []);

  return (
    <div>
      <h1>Page does not exist...</h1>
      <h2>Redirecting to Homepage</h2>
    </div>
  );
};

export default NotFound;
