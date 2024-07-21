import {Column, Entity, JoinColumn, OneToOne,OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { Credential } from "./credEntity";
import { Turn } from "./turnEntity";

@Entity({
    name: "userentity"
})
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column({default: "active"})
    status: string;

    @Column()
    birthdate: Date;

    @Column()
    dni: number;

    @OneToOne(() => Credential)
    @JoinColumn()
    credential: Credential;

    @OneToMany(() => Turn, turn => turn.user)
    turnos: Turn[]; 
}


