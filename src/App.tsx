import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header";
import { Favorites } from "./Pages/Favorites";
import { Home } from "./Pages/Home";
import { usePreferences } from "./usePreferences";

export type Cat = {
  width: number;
  height: number;
  id: string;
  url: string;
};

function App() {
  const { favorites, addToFavorites, removeFromFavorites } = usePreferences();

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              favorites={favorites}
              addToFavorites={addToFavorites}
              removeFromFavorites={removeFromFavorites}
            />
          }
        ></Route>
        <Route
          path="/favorites"
          element={
            <Favorites
              favorites={favorites}
              removeFromFavorites={removeFromFavorites}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
