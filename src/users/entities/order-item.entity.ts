import { PrimaryGeneratedColumn, Entity, Column, ManyToOne, JoinColumn } from 'typeorm';

import { Product } from '../../products/entities/product.entity';
import { Order } from './order.entity';
import { DateAt } from '../../database/date-at.entity';

@Entity({ name: 'order-items' })
export class OrderItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  quantity: number;

  @Column(() => DateAt, { prefix: false })
  register: DateAt;

  @ManyToOne(() => Product)
  @JoinColumn({ name: 'product_id' })
  product: Product;

  @ManyToOne(() => Order, (order) => order.items)
  @JoinColumn({ name: 'order_id' })
  order: Order;
}
