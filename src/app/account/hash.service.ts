import { Injectable } from '@nestjs/common';
import { from, Observable } from 'rxjs';
import * as bcrypt from 'bcrypt';
@Injectable()
export class HashService {
  private static readonly SALT_OR_ROUNDS = 10;

  public hash(text: string): Observable<string> {
    return from(bcrypt.hash(text, HashService.SALT_OR_ROUNDS));
  }

  public compare(text: string, hash: string): Observable<unknown> {
    return from(bcrypt.compare(text, hash));
  }
}
