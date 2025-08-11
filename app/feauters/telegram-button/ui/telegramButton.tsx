import { useEffect } from "react";
import type { TelegramAuthUser } from "~/entities/telegram-user/model/types";
import { selectSetUser, useUserStore } from "~/entities/user/model/store";

export default function TelegramLogin() {
  const setUser = useUserStore(selectSetUser); // ✅ получаем сам сеттер
  useEffect(() => {
    if (typeof window === "undefined") return;
    const host = document.getElementById("telegram-login");
    if (!host) return;

    const script = document.createElement("script");
    script.src = "https://telegram.org/js/telegram-widget.js?22";
    script.async = true;
    script.setAttribute("data-telegram-login", "MinecraftLitematicAuthBot");
    script.setAttribute("data-size", "medium");
    script.setAttribute("data-userpic", "false");
    script.setAttribute("data-onauth", "onTelegramAuth(user)");
    host.appendChild(script);

    window.onTelegramAuth = (user: TelegramAuthUser) => {
      try {
        setUser(user);
        console.log(user);
      } catch (err) {
        console.log(err)
      }
    };
  }, [setUser]);

  return <div id="telegram-login"></div>;
}
