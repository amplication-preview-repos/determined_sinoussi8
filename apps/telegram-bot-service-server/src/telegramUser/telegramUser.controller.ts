import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TelegramUserService } from "./telegramUser.service";
import { TelegramUserControllerBase } from "./base/telegramUser.controller.base";

@swagger.ApiTags("telegramUsers")
@common.Controller("telegramUsers")
export class TelegramUserController extends TelegramUserControllerBase {
  constructor(protected readonly service: TelegramUserService) {
    super(service);
  }
}
