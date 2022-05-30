import { useEffect, useState } from "react";
import { Cat } from "./App";
import { UseEventListenner } from "./useEventListenner";
const API_URL = "https://api.thecatapi.com/v1/images/search";
const API_KEY = "c2e35dca-e23e-41d2-a7a0-5f9ca44a3ba5";

export function useFetch() {
  const [fetchData, setfetchData] = useState<Cat[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { fetching, setFetching } = UseEventListenner(setfetchData);
  //Запрос котов с сервера
  useEffect(() => {
    setFetching(true);
    fetch(`${API_URL}?limit=25&page=${currentPage}`, {
      mode: "cors",
      headers: { "x-api-key": API_KEY },
    })
      .then((res) => res.json())
      .then((data) => setfetchData([...fetchData, ...data]))
      .finally(() => setFetching(false));
  }, [currentPage]);

  return {
    fetchData: fetchData,
    fetching: fetching,
  };
}
