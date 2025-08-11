import "../styles/header.scss";
import TelegramLogin from "./../../telegram-button/ui/telegramButton";

export default function Header() {
  return (
    <header className="header ">
      <div className="header__wrapper">
          <h3 className="header__title">Litematik<span className="header__title-beta">beta</span></h3>
          <TelegramLogin />
      </div>
    </header>
  );
}
