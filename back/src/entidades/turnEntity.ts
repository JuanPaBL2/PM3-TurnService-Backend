import {Column, Entity, JoinColumn, OneToOne, ManyToOne,PrimaryGeneratedColumn} from "typeorm";
import { User } from "./userEntity";

@Entity({
    name: "turnentity"
})
export class Turn {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date: Date;
    
    @Column()
    time: string;

    @ManyToOne(() => User, user => user.turnos) // Definir la relación muchos a uno con User
    user: User;

    //aca deberia ser por default active.
    @Column({default: "active"})
    status: "active" | "cancelled"; //sera el string especific active o cancelled
}


