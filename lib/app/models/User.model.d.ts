import { Model } from 'sequelize-typescript';
export declare class User extends Model<User> {
    id: number;
    name?: string;
    age?: number;
}
