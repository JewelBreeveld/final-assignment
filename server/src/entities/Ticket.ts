import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany } from "typeorm";
import { Exclude } from "class-transformer";
import User from './User';
import Comment from './Comment'
import Event from './Event'

@Entity()
export default class Ticket extends BaseEntity {

    @PrimaryGeneratedColumn()
    id?: number

    @Column('text', {nullable: false})
    description: string

    @Column('integer', {nullable: false})
    price: number

    @Column('text', {nullable: true, default: 'https://sitejerk.com/images/tickets-transparent-3.png'})
    picture: string

    @Exclude()
    @CreateDateColumn({ type: 'timestamp' })
    createdOn: Date

    @Exclude()
    @UpdateDateColumn({ type: "timestamp" })
    updatedOn: Date;

    @ManyToOne(_ => User, user => user.tickets)
    user: User

    @OneToMany(_=> Comment, comment => comment.ticket, {eager: true})
    comments: Comment

    @ManyToOne(_=> Event, event => event.tickets, {nullable: false})
    event: Event

    @Column('integer', {nullable: true})
    risk: number
}
