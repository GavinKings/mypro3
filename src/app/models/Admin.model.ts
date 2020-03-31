import { Model, Table, Column, AllowNull, AutoIncrement, Unique, Default, PrimaryKey, Comment, DataType } from 'sequelize-typescript';

@Table({ tableName: 'admin' })
export class Admin extends Model<Admin> {

  @Column
  @Comment('')
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
  @AllowNull(false)
  sex: any;
}
