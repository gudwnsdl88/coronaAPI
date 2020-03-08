import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
class Status extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  confirmation: number;

  @Column({ type: 'int' })
  release: number;

  @Column({ type: 'int' })
  dead: number;

  @Column({ type: 'int' })
  inspection: number;

  @Column({ type: 'text' })
  date: string;
}

export default Status;
