import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity({name : "users"})
export class User {

    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column({})
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

}
