import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthUserResponse } from 'src/app/modelos/auth';
import { LoginService } from './../../servicios/login.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  public image: string='';
  public gender: string='';
  public firstName: string='';
  public lastName: string='';
  public username: string='';
  public email: string='';
  public datos!: AuthUserResponse;

  constructor(private route: ActivatedRoute, public api: LoginService) {
   }

  ngOnInit() {
    this.route.queryParams.subscribe(parametros =>{
      this.image = parametros['image'];
      this.gender = parametros['gender'];
      this.firstName = parametros['firstName'];
      this.lastName = parametros['lastName'];
      this.username = parametros['username'];
      this.email = parametros['email'];
    })
  }

}
