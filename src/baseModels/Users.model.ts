import { Model, Table, Column, AllowNull, AutoIncrement, Unique, Default, PrimaryKey, Comment, DataType } from 'sequelize-typescript';

@Table({ tableName: 'users' })
export class Users extends Model<Users> {


  @Comment('ID')
  @AllowNull(false)
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Comment('用户昵称')
  @AllowNull(true)
  @Column
  nickname?: string;

  @Comment('用户邮箱')
  @AllowNull(true)
  @Column
  email?: string;

  @Comment('用户密码')
  @AllowNull(true)
  @Column
  password?: string;

  @Comment('微信小程序openid')
  @AllowNull(true)
  @Column
  openid?: string;

  @Comment('')
  @AllowNull(false)
  @Column
  created_at: Date;

  @Comment('')
  @AllowNull(false)
  @Column
  updated_at: Date;

  @Comment('')
  @AllowNull(true)
  @Column
  deleted_at?: Date;
}
