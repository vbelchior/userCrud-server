import { TypeUtil } from '@commons/utils';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('addresses', {
  synchronize: false, //
})
export class AddressEntity {
  public static readonly ID: keyof AddressEntity = 'id';

  public static readonly STREET: keyof AddressEntity = 'street';

  public static readonly NUMBER: keyof AddressEntity = 'number';

  public static readonly EXTRA: keyof AddressEntity = 'extra';

  public static readonly QUARTER: keyof AddressEntity = 'quarter';

  public static readonly CODE: keyof AddressEntity = 'code';

  public static readonly CITY: keyof AddressEntity = 'city';

  public static readonly COUNTRY: keyof AddressEntity = 'country';

  @PrimaryColumn('integer', { generated: 'increment' })
  public id: number;

  @Column()
  public street: string;

  @Column()
  public number: string;

  @Column()
  public extra: string;

  @Column()
  public quarter: string;

  @Column()
  public code: string;

  @Column()
  public city: string;

  @Column()
  public state: string;

  @Column()
  public country: string;

  constructor(json?: any) {
    if (TypeUtil.exists(json)) {
      if (TypeUtil.exists(json.street)) this.street = String(json.street);
      if (TypeUtil.exists(json.number)) this.number = String(json.number);
      if (TypeUtil.exists(json.extra)) this.extra = String(json.extra);
      if (TypeUtil.exists(json.quarter)) this.quarter = String(json.quarter);
      if (TypeUtil.exists(json.code)) this.code = String(json.code);
      if (TypeUtil.exists(json.city)) this.city = String(json.city);
      if (TypeUtil.exists(json.state)) this.state = String(json.state);
      if (TypeUtil.exists(json.country)) this.country = String(json.country);
    }
  }
}
