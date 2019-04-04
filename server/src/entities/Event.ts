import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany } from 'typeorm';
import { Exclude } from 'class-transformer';
import User from './User';
import Ticket from './Ticket';
import Comment from './Comment'

@Entity()
export default class Event extends BaseEntity {

    @PrimaryGeneratedColumn()
    id?: number;

    @Column('text', {nullable: false})
    name: string
    
    @Column('text', {nullable: false})
    description: string

    @Column('text', {nullable: true})
    urlPictureLogo: string

    @Column('date', {nullable: false})
    startDate: string

    @Column('date', {nullable: false})
    endDate: string

    @Exclude()
    @CreateDateColumn({ type: 'timestamp' })
    createdOn: Date

    @Exclude()
    @UpdateDateColumn({ type: 'timestamp' })
    updatedOn: Date

    @ManyToOne(_=> User, user => user.events)
    user: User

    @OneToMany(_=> Comment, comment => comment.event)
    comments: Comment

    @OneToMany(_=> Ticket, ticket=> ticket.event , {eager: true})
    tickets: Ticket[]
}  
    

