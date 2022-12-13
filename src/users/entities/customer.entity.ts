import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';
import { DateAt } from 'src/database/date-at.entity';
import { OneToOne } from 'typeorm';

import { User } from './user.entity';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  lastName: string;

  @Column({ type: 'varchar', length: 255 })
  phone: string;

  @Column(() => DateAt, { prefix: false })
  register: DateAt;

  @OneToOne(() => User, (user) => user.customer, { nullable: true })
  user: User;
}
