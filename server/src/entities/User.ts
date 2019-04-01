import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm"; // ,OneToMany
import { IsString, MinLength, IsEmail } from "class-validator";
import { Exclude } from "class-transformer";
import * as bcrypt from 'bcrypt'


@Entity()
export default class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id?: number

    @IsString()
    @MinLength(2)
    @Column('text')
    firstName: string

    @IsString()
    @MinLength(2)
    @Column('text')
    lastName: string

    @IsEmail()
    @Column('text')
    email: string

    @IsString()
    @MinLength(8)
    @Column('text')
    @Exclude({ toPlainOnly: true })
    password: string

    async setPassword(rawPassword: string) {
        const hash = await bcrypt.hash(rawPassword, 10)
        this.password = hash
    }

    checkPassword(rawPassword: string): Promise<boolean> {
        return bcrypt.compare(rawPassword, this.password)
    }

    // this is a relation, read more about them here:
    // http://typeorm.io/#/many-to-one-one-to-many-relations
    //   @OneToMany(_ => Player, player => player.user) 
    //   players: Player[]
}