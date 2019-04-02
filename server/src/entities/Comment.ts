import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import User from './User';
import Ticket from './Ticket';
import Event from './Event'

@Entity()
export default class Comment extends BaseEntity {

    @PrimaryGeneratedColumn()
    id?: number

    @Column('text', { nullable: false })
    input: string;

    @ManyToOne(_ => User, user => user.comments)
    user: User;

    @ManyToOne(_ => Ticket, ticket => ticket.comments, { onDelete: 'CASCADE' })
    ticket: Ticket;

    @ManyToOne(_ => Event, event => event.comments , { onDelete: 'CASCADE' })
    event: Event;
}    



