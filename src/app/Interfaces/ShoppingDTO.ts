import { GamesModel } from "src/app/Interfaces/GamesDTO";
export interface ShoppingModel{
    _id:number,
    UserName:string,
    UserEmail:string,
    UserPhone:number,
    BillingAddress:string,
    CreditCard:bigint,
    CreditCardExpiration:Date,
    Price:bigint
    Games:GamesModel[]
}