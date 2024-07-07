import { SortOrder } from "../../util/SortOrder";

export type TelegramUserOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
