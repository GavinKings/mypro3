import UserService from '../../service/userService/index';

type params = {

}

export default class UserController {
    static async getList(params?: params) {
        const data= await UserService.getList();
        return data;
    }
}