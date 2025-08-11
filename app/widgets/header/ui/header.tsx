import TelegramLogin from "~/feauters/telegram-button/ui/telegramButton";
import "../styles/header.scss";
import { Link } from "react-router";

export default function Header() {
  return (
    <header className="header ">
      <div className="header__wrapper container">
        <Link to="/">
          <h3 className="header__title">
            Litematik<span className="header__title-beta">beta</span>
          </h3>
        </Link>
        <TelegramLogin />
      </div>
    </header>
  );
}
