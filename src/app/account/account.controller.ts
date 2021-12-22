import { firstValueFrom } from 'rxjs';

import { TypeUtil } from '@commons/utils/type.util';
import { UserService } from './../user/user.service';
import { HashService } from './hash.service';
import { Controller } from '@nestjs/common';

@Controller()
export class AccountController {
  constructor(
    private userService: UserService,
    private hashService: HashService,
  ) {}
}
