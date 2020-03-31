import { Context } from "koa";
export default class adminController {
    list(ctx: Context, next: () => void): Promise<void>;
    news(ctx: Context, next: () => void): Promise<void>;
}
