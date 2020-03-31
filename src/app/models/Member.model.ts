import { Model, Table, Column, AllowNull, AutoIncrement, Unique, Default, PrimaryKey, Comment, DataType } from 'sequelize-typescript';
import { DataTypes, Op } from 'sequelize';

@Table({ tableName: 'member' })
export class Member extends Model<Member> {

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
