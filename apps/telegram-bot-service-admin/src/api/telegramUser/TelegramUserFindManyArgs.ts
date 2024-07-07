import { TelegramUserWhereInput } from "./TelegramUserWhereInput";
import { TelegramUserOrderByInput } from "./TelegramUserOrderByInput";

export type TelegramUserFindManyArgs = {
  where?: TelegramUserWhereInput;
  orderBy?: Array<TelegramUserOrderByInput>;
  skip?: number;
  take?: number;
};
