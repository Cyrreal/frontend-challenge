import type { Cat } from "../../App";
import { Card } from "../../Components/Card";
import { useState, useEffect } from "react";
import s from "../Home/Home.module.css";

const API_URL = "https://api.thecatapi.com/v1/images/search";
const API_KEY = "c2e35dca-e23e-41d2-a7a0-5f9ca44a3ba5";

type Props = {
  favorites: Cat[];
  addToFavorites: (cats: Cat) => void;
  removeFromFavorites: (cat: Cat) => void;
  //   fetching: boolean;
};

export function Home({
  favorites,
  addToFavorites,
  removeFromFavorites,
}: Props) {
  const [fetchData, setfetchData] = useState<Cat[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);
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

  //Слушатели скрола для бесконечного скрола
  useEffect(() => {
    document.addEventListener("scroll", scrollPage);
    return () => document.removeEventListener("scroll", scrollPage);
  }, [fetching]);

  //Условия для срабатывания слушателя скрола
  const scrollPage = () => {
    if (fetching) return;
    const scrollTop = window.scrollY;
    const docHeight = document.body.offsetHeight;
    const winHeight = window.innerHeight;
    const scrollPercent = scrollTop / (docHeight - winHeight);
    const scrollPercentRounded = Math.round(scrollPercent * 100);
    if (scrollPercentRounded > 80) setCurrentPage((perv) => perv + 1);
  };

  return (
    <div className={s.container}>
      <div className={s.grid}>
        {fetchData.map((cat, index) => (
          // В качестве ключа используем index так как в данных с API встречаются дубликаты
          <Card
            cat={cat}
            key={index}
            isFavorite={favorites.includes(cat)}
            addToFavorites={addToFavorites}
            removeFromFavorites={removeFromFavorites}
          />
        ))}
      </div>
      {fetching && <p className={s.loader}>...загружаем котиков...</p>}
    </div>
  );
}
