import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { DateAt } from 'src/database/date-at.entity';

import { Product } from './product.entity';

@Entity({ name: 'categories' })
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, unique: true })
  name: string;

  @Column(() => DateAt, { prefix: false })
  register: DateAt;

  @ManyToMany(() => Product, (product) => product.categories)
  products: Product[];
}
