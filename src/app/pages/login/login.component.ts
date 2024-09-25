import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ApiserviceService } from '../../service/apiservice.service';
import { IReqLogin } from '../../../models/reqILogin.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [IonicModule, ReactiveFormsModule],
  providers: [ApiserviceService],
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {

  frmLogin: FormGroup;

  Usuario: string ='';
  clave: string ='';

  constructor(private apiService: ApiserviceService){ 
    this.frmLogin = new FormGroup({ 
      User: new FormControl('fy0626@gmail.com', Validators.required),
      password: new FormControl('123', Validators.required)
  })
}

login(){
 // console.log(this.frmLogin.value);
  this.apiService.login();
}
  ngOnInit() {}

  }
