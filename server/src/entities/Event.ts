import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Exclude } from "class-transformer";


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
    @UpdateDateColumn({ type: "timestamp" })
    updatedOn: Date

  
}  


