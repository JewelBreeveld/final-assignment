import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity()
export default class Ticket extends BaseEntity {

    @PrimaryGeneratedColumn()
    id?: number

    @Column('text', {nullable: false})
    description: string

    @Column('integer', {nullable: false})
    price: number

    @Column('text', {nullable: true})
    picture: string

    @CreateDateColumn({ type: "timestamp" })
    createdAt: string;


}
