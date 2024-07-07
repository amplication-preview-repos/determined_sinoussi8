import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TelegramUserServiceBase } from "./base/telegramUser.service.base";

@Injectable()
export class TelegramUserService extends TelegramUserServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
