import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
// import * as bcrypt from 'bcrypt';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  name: string;

  //nome na tabela snack case
  // @Column({ nullable: true })
  // firstName: string;

  //nome na tabela snack case
  // @Column({ nullable: true })
  // lastName: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  password: string;

  @Column({ nullable: true })
  avatar: string;

  @Column({ nullable: true })
  bio: string;

  // @Column({ default: true })
  @Column({ nullable: true })
  phone: string;
}
