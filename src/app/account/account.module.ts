import { ConfigModule } from '@nestjs/config';
import { forwardRef, Module } from '@nestjs/common';

import { AccountController } from './account.controller';
import { HashService } from './hash.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [],
  providers: [HashService],
  exports: [HashService],
})
export class AccountModule {}
