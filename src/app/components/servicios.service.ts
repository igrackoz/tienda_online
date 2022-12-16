import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  private ingresar:boolean = false;

  constructor() { }
  
  public habilitarlogin(){
    return this.ingresar;
  }
}
