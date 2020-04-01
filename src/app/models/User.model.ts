import { Model, Table, Column, AllowNull, AutoIncrement, Unique, Default, PrimaryKey, Comment, DataType } from 'sequelize-typescript';

@Table({ tableName: 'user' })
export class User extends Model<User> {

    @Column
    @Comment('yong')
    @AllowNull(false)
    @PrimaryKey
    @AutoIncrement
    id: number;

    @Column
    @Comment('')
    @AllowNull(true)
    name?: string;

    @Column
    @Comment('')
    @AllowNull(true)
    age?: number;
}
