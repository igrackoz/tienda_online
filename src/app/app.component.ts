import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiciosService } from './components/servicios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto';

  constructor(private router:Router, private login:ServiciosService){}
/*
  goToPage(pageName:string):void{

    this.router.navigate([`${pageName}`]);
  }*/

  public visualizarMenu():boolean{

    return this.login.habilitarlogin();
    
    this.router.navigate(['/planes']);
  }

  
}
