import { Link } from "react-router-dom";
import type { Cat } from "../../App";
import { Card } from "../../Components/Card";
import s from "./Favorite.module.css";

type PropTypes = {
  favorites: Cat[];
  removeFromFavorites: (cat: Cat) => void;
};

export function Favorites({ favorites, removeFromFavorites }: PropTypes) {
  return (
    <div className={s.container}>
      {favorites.length ? (
        <div className={s.grid}>
          {favorites.map((cat) => (
            <Card
              cat={cat}
              key={cat.id}
              isFavorite={true}
              removeFromFavorites={removeFromFavorites}
            />
          ))}
        </div>
      ) : (
        <div className={s.empty}>
          <p>
            К сожалению вы еще не нашли своих любимых котиков 😥. Поэтому
            предлагаю вам перейти по ссылке ниже
          </p>
          <p>
            <Link className={s.btn} to="/">
              Все котики
            </Link>
          </p>
        </div>
      )}
    </div>
  );
}
