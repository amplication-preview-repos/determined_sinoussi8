import { Module } from "@nestjs/common";
import { TelegramUserModuleBase } from "./base/telegramUser.module.base";
import { TelegramUserService } from "./telegramUser.service";
import { TelegramUserController } from "./telegramUser.controller";
import { TelegramUserResolver } from "./telegramUser.resolver";

@Module({
  imports: [TelegramUserModuleBase],
  controllers: [TelegramUserController],
  providers: [TelegramUserService, TelegramUserResolver],
  exports: [TelegramUserService],
})
export class TelegramUserModule {}
