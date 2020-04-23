import { Entity, Column, ObjectIdColumn, ObjectID, Index } from 'typeorm';

@Entity({ name: 'users' })
export class User {
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Index({ unique: true })
    @Column()
    email: string;

    @Column({ unique: true })
    phone: number;

    @Column({ default: false })
    isAdmin: boolean;

    @Column({ default: false })
    verified: boolean;
}
