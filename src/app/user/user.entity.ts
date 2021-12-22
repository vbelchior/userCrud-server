import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('users')
export class UserEntity {
  public static readonly ID: keyof UserEntity = 'id';

  public static readonly NAME: keyof UserEntity = 'name';

  public static readonly SECRET: keyof UserEntity = 'secret';

  public static readonly PHONE: keyof UserEntity = 'phone';

  public static readonly EMAIL: keyof UserEntity = 'email';

  public static readonly EXTRA: keyof UserEntity = 'extra';

  @PrimaryColumn('integer', { generated: 'increment' })
  public id: number;

  @Column()
  public name: string;

  @Column()
  public email: string;

  @Column()
  public secret: string;

  @Column('text')
  public phone: number;

  @Column('json')
  public extra?: object;

  constructor(json?: any) {
    if (json != undefined && json != null) {
      const keys: Array<string> = Object.keys(json);
      if (keys.includes('id')) this.id = json.id ? Number(json.id) : json.id;
      if (keys.includes('name'))
        this.name = json.name ? String(json.name) : json.name;
      if (keys.includes('email'))
        this.email = json.email ? String(json.email) : json.email;
      if (keys.includes('secret'))
        this.secret = json.secret ? String(json.secret) : json.secret;
      if (keys.includes('phone'))
        this.phone = json.phone ? Number(json.phone) : json.phone;
      if (keys.includes('extra'))
        this.extra = json.extra ? Object(json.extra) : json.extra;
    }
  }
}
