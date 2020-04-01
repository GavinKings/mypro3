import { Model, Table, Column, AllowNull, AutoIncrement, Unique, Default, PrimaryKey, Comment, DataType } from 'sequelize-typescript';

@Table({
    tableName: 'user',

})
export class User extends Model<User> {

    @Column
    id: number;

    @Column
    name?: string;

    @Column
    age?: number;
}
