import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from "typeorm";
import User from './User';
import Ticket from './Ticket';
import Event from './Event'
import { Exclude } from "class-transformer";

@Entity()
export default class Comment extends BaseEntity {

    @PrimaryGeneratedColumn()
    id?: number

    @Column('text', { nullable: false })
    comment: string;

    @Exclude()
    @CreateDateColumn({ type: 'timestamp' })
    createdOn: Date

    @Exclude()
    @UpdateDateColumn({ type: 'timestamp' })
    updatedOn: Date

    @ManyToOne(_ => User, user => user.comments, {eager: true})
    user: User;

    @ManyToOne(_ => Ticket, ticket => ticket.comments, { onDelete: 'CASCADE' })
    ticket: Ticket;

    @ManyToOne(_ => Event, event => event.comments , { onDelete: 'CASCADE' })
    event: Event;
}    



