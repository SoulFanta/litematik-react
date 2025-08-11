import type { TelegramAuthUser } from "../entities/telegram-user/model/types";

declare global {
  interface Window {
    onTelegramAuth?: (user: TelegramAuthUser) => void;
  }
}

export {};