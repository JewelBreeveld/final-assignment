import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Exclude } from "class-transformer";

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

    @Exclude()
    @CreateDateColumn({ type: 'timestamp' })
    createdOn: Date

    @Exclude()
    @UpdateDateColumn({ type: "timestamp" })
    updatedAt: Date;

}
