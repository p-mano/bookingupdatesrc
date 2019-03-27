import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import CustomerService from '../customer.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,private customerService:CustomerService,public alertController: AlertController) { }
  data = {email:"",password:""};
  ngOnInit() {}
  doLogin(data){
    this.customerService.authenticate(data).subscribe((result)=>{
      console.log(result);
      if(result.password==data.password){
        this.router.navigate(['/tabs/tab1'])
      }else{
        alert('wrong password');
        this.presentAlert();
      }
    })
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Login Failed',
      message: 'please Enter Login Details',
      buttons: ['OK']
    });

    await alert.present();
  }
    
}
