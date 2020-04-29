import { User } from '../../models/index'
type params = {}

export default class UserService {
    static async getList(params?: params) {
        const users = await User.findAll();
        return users;
    }
}