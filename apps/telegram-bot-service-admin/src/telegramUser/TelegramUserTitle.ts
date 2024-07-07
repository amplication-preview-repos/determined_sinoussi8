import { TelegramUser as TTelegramUser } from "../api/telegramUser/TelegramUser";

export const TELEGRAMUSER_TITLE_FIELD = "username";

export const TelegramUserTitle = (record: TTelegramUser): string => {
  return record.username?.toString() || String(record.id);
};
