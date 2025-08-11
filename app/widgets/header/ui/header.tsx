import TelegramLogin from "~/feauters/telegram-button/ui/telegramButton";
import "../styles/header.scss";

export default function Header() {
  return (
    <header className="header ">
      <div className="header__wrapper container">
        <h3 className="header__title">
          Litematik<span className="header__title-beta">beta</span>
        </h3>
        <TelegramLogin />
      </div>
    </header>
  );
}
