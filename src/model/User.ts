import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: String;
    @Column()
    username: String;
    @Column()
    password: String;

    @CreateDateColumn()
    created_at: Date;
}