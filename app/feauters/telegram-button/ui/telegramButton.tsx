import { useEffect } from "react";
import type { TelegramAuthUser } from "~/entities/telegram-user/model/types";

export default function TelegramLogin() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const host = document.getElementById("telegram-login");
    if (!host) return;

    const script = document.createElement("script");
    script.src = "https://telegram.org/js/telegram-widget.js?22";
    script.async = true;
    script.setAttribute("data-telegram-login", "MinecraftLitematicAuthBot");
    script.setAttribute("data-size", "large");
    script.setAttribute("data-onauth", "onTelegramAuth(user)");
    host.appendChild(script);

    window.onTelegramAuth = (user: TelegramAuthUser) => {
      console.log("TG user:", user);
      // Работа с беком 
    };
  }, []);

  return <div id="telegram-login"></div>;
}
