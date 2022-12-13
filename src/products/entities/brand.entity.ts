import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

import { Product } from './product.entity';
import { DateAt } from 'src/database/date-at.entity';

@Entity({ name: 'brands' })
export class Brand {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, unique: true })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  image: string;

  @Column(() => DateAt, { prefix: false })
  register: DateAt;

  @OneToMany(() => Product, (product) => product.brand)
  products: Product[];
}
