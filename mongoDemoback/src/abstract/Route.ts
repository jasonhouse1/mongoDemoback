import { Router } from "express"
import { Contorller } from "./Contorller"

export abstract class Route{

    // 抽象屬性 - 路由基礎 URL
    protected abstract url: string;

    // 抽象屬性 - 與該路由相關的控制器
    protected abstract controller: Controller;

    // Express 路由器實例
    protected router = Router();

    // 設定路由 - 子類必須實現
    protected abstract setRoutes(): void;
    // 公共方法 - 獲取路由器
    public getRouter(){
        return this.router
    }
    // 公共方法 - 獲取路由基礎 URl
    public getUrl(){
        return this.url
    }
}