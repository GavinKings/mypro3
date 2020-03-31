import { Model, Table, Column, AllowNull, AutoIncrement, Unique, Default, PrimaryKey, Comment, DataType } from 'sequelize-typescript';

@Table({ tableName: '_mysql_session_store' })
export class MysqlSessionStore extends Model<MysqlSessionStore> {

  @Column
  @Comment('')
  @AllowNull(false)
  @PrimaryKey
  id: string;

  @Column
  @Comment('')
  @AllowNull(true)
  expires?: number;

  @Column
  @Comment('')
  @AllowNull(true)
  data?: string;
}
