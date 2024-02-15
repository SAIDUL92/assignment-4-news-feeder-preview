import { useState, useEffect } from "react";

function useNewsQuery() {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });
  const [error, setError] = useState(null);

  const fetchedData = async () => {
    try {
      setLoading({
        ...loading,
        state: true,
        message: "fetching News Data",
      });

      const response = await fetch(import.meta.env.VITE_NEWS_API);

      if (!response.ok) {
        const errorMessage = `fetching News Data failed ${response.status}`;
        throw new Error(errorMessage);
      }

      const data = await response.json();

      setNewsData([...data.articles]);
    } catch (err) {
      setError(err);
    } finally {
      setLoading({
        ...loading,
        state: false,
        message: "",
      });
    }
  };


  const filterdData = async (url) => {
    try {
      setLoading({
        ...loading,
        state: true,
        message: "fetching News Data",
      });

      const response = await fetch(url);

      if (!response.ok) {
        const errorMessage = `fetching News Data failed ${response.status}`;
        throw new Error(errorMessage);
      }

      const data = await response.json();

      setNewsData([...data.articles]);
    } catch (err) {
      setError(err);
    } finally {
      setLoading({
        ...loading,
        state: false,
        message: "",
      });
    }
  };


  const searchedData = async (url) => {
    try {
      setLoading({
        ...loading,
        state: true,
        message: "fetching News Data",
      });

      const response = await fetch(url);

      if (!response.ok) {
        const errorMessage = `fetching News Data failed ${response.status}`;
        throw new Error(errorMessage);
      }

      const data = await response.json();

      setNewsData([...data.result]);
    } catch (err) {
      setError(err);
    } finally {
      setLoading({
        ...loading,
        state: false,
        message: "",
      });
    }
  };


  useEffect(() => {
    setLoading({
      loading: true,
      message: "fetching News Data",
    });

    fetchedData();
  }, []);

  return { newsData, filterdData, searchedData, loading, error };
}

export default useNewsQuery;
