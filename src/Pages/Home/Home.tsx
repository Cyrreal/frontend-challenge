import type { Cat } from "../../App";
import { Card } from "../../Components/Card";
import { useFetch } from "../../Hooks/useFetch";
import s from "../Home/Home.module.css";
type Props = {
  favorites: Cat[];
  addToFavorites: (cats: Cat) => void;
  removeFromFavorites: (cat: Cat) => void;
};

export function Home({
  favorites,
  addToFavorites,
  removeFromFavorites,
}: Props) {
  const { fetchData, fetching } = useFetch();

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
