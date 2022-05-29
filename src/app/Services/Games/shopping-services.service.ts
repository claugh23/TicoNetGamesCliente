import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs";
import { ShoppingModel } from "../../Interfaces/ShoppingDTO";

@Injectable({
  providedIn: 'root'
})
export class ShoppingServicesService {


  TicoNetServer: string = 'https://tico-net-games-server.herokuapp.com/Shoppings/'



  constructor(private HttpRequest: HttpClient) { }

  GetShoppingCart() {
    return this.HttpRequest.get<ShoppingModel[]>(this.TicoNetServer + 'GetShopCart');
  }

  PostShoppingCart(shoppingCart: ShoppingModel): Observable<ShoppingModel> {
    return this.HttpRequest.post<ShoppingModel>(this.TicoNetServer + 'CreateShop', shoppingCart, {
      headers: new HttpHeaders(
        {
          'Content-type': 'application/json',
          'Authorization': JSON.stringify(localStorage.getItem('token'))
        }
      )
    });

  }

  PutShoppingCart(update: ShoppingModel): Observable<ShoppingModel> {
    return this.HttpRequest.put<any>(this.TicoNetServer + 'UpdateShopCart', update, {
      headers: new HttpHeaders(
        {
          'Content-type': 'application/json',
          'Authorization': JSON.stringify(localStorage.getItem('token'))
        }
      )
    });
  }


  DeleteShoppingCart(id: Number) {
    return this.HttpRequest.delete<String>(this.TicoNetServer + 'DeleteShopCart/' + id, {
      headers: new HttpHeaders(
        {
          'Authorization': JSON.stringify(localStorage.getItem('token'))
        }
      )
    });
  }
}
