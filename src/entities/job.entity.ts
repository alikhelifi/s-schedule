import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

export type Job = JobModel;
@Entity()
export class JobModel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  user: string;

  @Column()
  creationDate: Date;

  @Column()
  lastRunDate: Date;

  @Column()
  nextRunDate: Date;

  @Column()
  active: boolean;

  @BeforeInsert()
  generateId() {
    this.id = uuidv4();
  }
}
