import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn
} from 'typeorm';

@Entity()
class Virus extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'double precision' })
  lng: number;

  @Column({ type: 'double precision' })
  lat: number;

  @Column({ type: 'text' })
  address: string;

  @CreateDateColumn()
  createdAt: string;
}

export default Virus;
