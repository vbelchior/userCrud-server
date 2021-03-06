import { HashService } from '@app/account/hash.service';
import { TypeUtil } from '@commons/utils';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

import { firstValueFrom } from 'rxjs';

import { UserEntity } from './user.entity';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(
    private userService: UserService,
    private hashService: HashService,
  ) {}

  @Post()
  async create(@Body() entity: UserEntity): Promise<UserEntity> {
    const _secret: string = await firstValueFrom(
      this.hashService.hash(entity.secret),
    );
    entity.secret = _secret;
    return firstValueFrom(this.userService.create(entity));
  }

  @Get('/:id')
  public async retrieve(@Param('id') id: number): Promise<UserEntity> {
    const _user: UserEntity = await firstValueFrom(
      this.userService.retrieve(id),
    );
    return _user;
  }

  @Patch('/:id')
  public async update(
    @Param('id') id: number,
    @Body() entity: UserEntity,
  ): Promise<any> {
    return firstValueFrom(this.userService.update(id, entity));
  }

  @Delete('/:id')
  public delete(@Param('id') id: number): Promise<any> {
    return firstValueFrom(this.userService.delete(id));
  }

  @Get()
  public filter(@Query('nameLike') nameLike?: string): Promise<UserEntity[]> {
    return firstValueFrom(this.userService.filter(nameLike));
  }

  @Get('/count/value')
  public count(): Promise<number> {
    return;
  }
}
