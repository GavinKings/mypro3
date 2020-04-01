import { User } from '../../models/User.model';

export default class UserServiceClass {
    async findAll() {
        let data = await User.findAll()
        // console.log(data)
        return data;
    }
}