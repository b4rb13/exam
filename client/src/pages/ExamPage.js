import React from "react";
// import { useHttp } from "../hooks/http.hook";
// import { AuthContext } from "../context/AuthContext";
// import Loader from "../components/Loader";
import LinksList from "../components/LinksList";

const ExamPage = () => {
  // const [links, setLinks] = useState([]);
  // const { loading, request } = useHttp();
  // const { token } = useContext(AuthContext);

  // const fetchLinks = useCallback(async () => {
  //   try {
  //     const fetched = await request("/api/link", "GET", null, {
  //       Authorization: `Bearer ${token}`,
  //     });
  //     setLinks(fetched);
  //   } catch (e) {}
  // }, [token, request]);
  //
  // useEffect(() => {
  //   fetchLinks();
  // }, [fetchLinks]);
  //
  // if (loading) {
  //   return <Loader />;
  // }

  // return <>{!loading && <LinksList />}</>;
  return (
    <>
      <LinksList />
    </>
  );
};

export default ExamPage;
