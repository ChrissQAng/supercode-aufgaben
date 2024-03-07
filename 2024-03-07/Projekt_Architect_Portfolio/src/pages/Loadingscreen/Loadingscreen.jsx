import { useContext, useEffect } from "react";
import { LoadingContext } from "../../context/Context";

const Loadingscreen = () => {
  const { loading, setLoading } = useContext(LoadingContext);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  }, []);
  return (
    <>
      <h1>Loading ...</h1>
    </>
  );
};

export default Loadingscreen;
