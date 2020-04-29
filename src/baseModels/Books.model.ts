import { Model, Table, Column, AllowNull, AutoIncrement, Unique, Default, PrimaryKey, Comment, DataType } from 'sequelize-typescript';

@Table({ tableName: 'books' })
export class Books extends Model<Books> {

  @Column
  @Comment('')
  @AllowNull(false)
  @PrimaryKey
  id: number;

  @Column
  @Comment('')
  @AllowNull(true)
  name?: string;

  @Column
  @Comment('')
  @AllowNull(true)
  author_id?: number;
}
