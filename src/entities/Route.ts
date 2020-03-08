import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
class Route extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  infectedNo: number;

  @Column({ type: 'double precision' })
  routeLat: number;

  @Column({ type: 'double precision' })
  routeLng: number;

  @Column({ type: 'text' })
  routeAddress: string;
}

export default Route;
