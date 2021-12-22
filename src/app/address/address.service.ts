import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { TypeUtil } from '@commons/utils';
import { DeleteResult, Repository } from 'typeorm';
import { AddressEntity } from './address.entity';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(AddressEntity)
    private addressRepository: Repository<AddressEntity>,
  ) {}

  public create(entity: AddressEntity): Observable<AddressEntity> {
    return from(this.addressRepository.save(new AddressEntity(entity)));
  }

  public retrieve(id: number): Observable<AddressEntity> {
    return from(this.addressRepository.findOne(id));
  }

  public update(id: number, entity: AddressEntity): Observable<any> {
    return from(this.addressRepository.update(id, new AddressEntity(entity)));
  }

  public delete(id: number): Observable<DeleteResult> {
    return from(this.addressRepository.delete(id));
  }

  public filter(nameLike?: string): Observable<AddressEntity[]> {
    const query: object = {};
    return from(this.addressRepository.find({ where: query }));
  }
}
