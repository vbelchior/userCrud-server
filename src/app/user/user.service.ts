import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { TypeUtil } from '@commons/utils';
import { DeleteResult, Repository } from 'typeorm';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  public create(entity: UserEntity): Observable<UserEntity> {
    return from(this.userRepository.save(new UserEntity(entity)));
  }

  public retrieve(id: number): Observable<any> {
    return from(
      this.userRepository.findOne({
        where: { id: id },
        relations: ['address'],
      }),
    );
  }

  public update(id: number, entity: UserEntity): Observable<any> {
    return from(this.userRepository.update(id, new UserEntity(entity)));
  }

  public delete(id: number): Observable<DeleteResult> {
    return from(this.userRepository.delete(id));
  }

  public filter(nameLike?: string): Observable<UserEntity[]> {
    const query: object = {};
    if (TypeUtil.exists(nameLike))
      query[UserEntity.NAME] = { $regex: nameLike, $options: 'i' };
    return from(this.userRepository.find({ where: query }));
  }
}
