import * as graphql from "@nestjs/graphql";
import { TelegramUserResolverBase } from "./base/telegramUser.resolver.base";
import { TelegramUser } from "./base/TelegramUser";
import { TelegramUserService } from "./telegramUser.service";

@graphql.Resolver(() => TelegramUser)
export class TelegramUserResolver extends TelegramUserResolverBase {
  constructor(protected readonly service: TelegramUserService) {
    super(service);
  }
}
