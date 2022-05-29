import type { Cat } from "../../App";
import s from "../Card/Card.module.css";
type Props = {
  cat: Cat;
  isFavorite: boolean;
  removeFromFavorites: (cat: Cat) => void;
  addToFavorites?: (cat: Cat) => void;
};

export function Card({
  cat,
  addToFavorites,
  removeFromFavorites,
  isFavorite,
}: Props) {
  const handleClick =
    addToFavorites && !isFavorite ? addToFavorites : removeFromFavorites;
  return (
    <div className={s.item}>
      <img
        className={s.img}
        src={cat.url}
        width={cat.width}
        height={cat.height}
        alt="cat"
      />
      <button
        onClick={() => handleClick(cat)}
        className={isFavorite ? `${s.liked}` : `${s.btn}`}
      ></button>
    </div>
  );
}
