import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';
import { DateAt } from 'src/database/date-at.entity';
import { OneToOne, OneToMany } from 'typeorm';

import { Exclude } from 'class-transformer';

import { User } from './user.entity';
import { Order } from './order.entity';

@Entity({ name: 'customers' })
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ name: 'last_name', type: 'varchar', length: 255 })
  lastName: string;

  @Column({ type: 'varchar', length: 255 })
  phone: string;

  @Exclude()
  @Column(() => DateAt, { prefix: false })
  register: DateAt;

  @OneToOne(() => User, (user) => user.customer, { nullable: true })
  user: User;

  @OneToMany(() => Order, (order) => order.customer)
  orders: Order[];
}
