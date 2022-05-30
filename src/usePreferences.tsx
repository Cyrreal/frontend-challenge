import { useState, useEffect } from "react";
import { Cat } from "./App";
export function usePreferences() {
  const saved: Cat[] = JSON.parse(localStorage.getItem("favorites") || "[]");
  const [favorites, setFavorites] = useState<Cat[]>(saved);

  //Добавление в любимые
  const addToFavorites = (cat: Cat) => {
    if (favorites.includes(cat)) return;
    setFavorites([...favorites, cat]);
  };
  // Удаление из Любимых
  const removeFromFavorites = (cat: Cat) => {
    const filtered: any = favorites.filter((item) => item !== cat);
    setFavorites(filtered);
  };

  useEffect(() => {
    localStorage.favorites = JSON.stringify(favorites);
  }, [favorites]);

  return {
    favorites: favorites,
    addToFavorites: addToFavorites,
    removeFromFavorites: removeFromFavorites,
  };
}
