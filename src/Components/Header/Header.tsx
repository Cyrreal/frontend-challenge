import s from "../Header/Menu.module.css";
import { Link } from "react-router-dom";
export function Header() {
  return (
    <>
      <header>
        <div className={s.container}>
          <nav className={s.menu}>
            <p className={s.all}>
              <Link className={s.link} to="/">
                Все котики
              </Link>
            </p>
            <p className={s.fav}>
              <Link className={s.link} to="/favorites">
                Любимые котики
              </Link>
            </p>
          </nav>
        </div>
      </header>
    </>
  );
}
