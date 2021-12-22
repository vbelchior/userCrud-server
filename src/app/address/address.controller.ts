import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { firstValueFrom } from 'rxjs';

import { AddressEntity } from './address.entity';
import { AddressService } from './address.service';

@Controller('addresses')
export class AddressController {
  constructor(private addressService: AddressService) {}

  @Post()
  create(@Body() entity: AddressEntity): Promise<AddressEntity> {
    return firstValueFrom(this.addressService.create(entity));
  }

  @Get('/:id')
  public retrieve(@Param('id') id: number): Promise<AddressEntity> {
    return firstValueFrom(this.addressService.retrieve(id));
  }

  @Patch('/:id')
  public async update(
    @Param('id') id: number,
    @Body() entity: AddressEntity,
  ): Promise<any> {
    return firstValueFrom(this.addressService.update(id, entity));
  }

  @Delete('/:id')
  public delete(@Param('id') id: number): Promise<any> {
    return firstValueFrom(this.addressService.delete(id));
  }

  @Get()
  public filter(): Promise<AddressEntity[]> {
    return firstValueFrom(this.addressService.filter());
  }

  @Get('/count/value')
  public count(): Promise<number> {
    return;
  }
}
